import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

export type SubmissionKind = "contact" | "reservation";

export type SaveResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/**
 * Enregistre une demande. Une demande n'est « enregistrée » que si :
 *  - la notification Resend a été acceptée (production), ou
 *  - en développement uniquement, elle a été écrite dans .data/submissions.jsonl.
 * Sinon on renvoie une erreur : jamais de fausse confirmation.
 * Pour ajouter une base de données plus tard, branchez-la ici.
 */
export async function saveSubmission(kind: SubmissionKind, data: Record<string, string>): Promise<SaveResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.RESEND_FROM;

  if (apiKey && to && from) {
    try {
      const subject = kind === "contact" ? "Nouveau message — Clario" : "Nouvelle demande de rendez-vous — Clario";
      const rows = Object.entries(data)
        .map(([k, v]) => `<p><strong>${esc(k)}</strong><br>${esc(v).replace(/\n/g, "<br>")}</p>`)
        .join("");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], reply_to: data.email, subject, html: rows }),
        signal: AbortSignal.timeout(10_000),
      });
      return res.ok ? { ok: true } : { ok: false, reason: "failed" };
    } catch {
      return { ok: false, reason: "failed" };
    }
  }

  if (process.env.NODE_ENV === "development") {
    try {
      const dir = path.join(process.cwd(), ".data");
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(
        path.join(dir, "submissions.jsonl"),
        JSON.stringify({ kind, at: new Date().toISOString(), ...data }) + "\n",
      );
      return { ok: true };
    } catch {
      return { ok: false, reason: "failed" };
    }
  }

  return { ok: false, reason: "not_configured" };
}
