import "server-only";
import { NextResponse } from "next/server";
import type { ZodType } from "zod";
import { saveSubmission, type SubmissionKind } from "./submissions";

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const fail = (error: string, status: number) => NextResponse.json({ ok: false, error }, { status });

export async function handleSubmission(req: Request, kind: SubmissionKind, schema: ZodType) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) return fail("Trop de tentatives. Réessayez dans quelques minutes.", 429);

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return fail("Requête invalide.", 400);
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) return fail("Certains champs sont invalides. Vérifiez le formulaire.", 422);
  const data = parsed.data as Record<string, unknown> & { openedAt?: number };

  // Anti-spam : formulaire soumis en moins de 3 s = robot probable.
  if (typeof data.openedAt === "number" && Date.now() - data.openedAt < 3000) {
    return fail("Envoi trop rapide. Réessayez dans un instant.", 429);
  }

  const { website: _w, openedAt: _o, consent: _c, ...fields } = data;
  const flat = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, String(v)]));
  const result = await saveSubmission(kind, flat);

  if (!result.ok) {
    return fail(
      result.reason === "not_configured"
        ? "L'envoi n'est pas encore disponible. Merci de réessayer plus tard."
        : "Votre demande n'a pas pu être enregistrée. Réessayez dans un instant.",
      503,
    );
  }
  return NextResponse.json({ ok: true });
}
