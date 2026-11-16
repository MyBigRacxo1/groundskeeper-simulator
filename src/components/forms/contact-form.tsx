"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Consent, Field, Honeypot, Input, Notice, Textarea, describe } from "./fields";
import { postJson } from "./submit";

export function ContactForm() {
  const openedAt = useRef(Date.now());
  const [serverError, setServerError] = useState<string>();
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  if (done)
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-accent/30 bg-accent-soft p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Message bien reçu.</h2>
        <p className="mt-2 text-muted">Nous vous répondons par e-mail dès que possible.</p>
      </div>
    );

  return (
    <form
      noValidate
      className="relative space-y-5"
      onSubmit={handleSubmit(async (v) => {
        setServerError(undefined);
        const r = await postJson("/api/contact", { ...v, openedAt: openedAt.current });
        if (r.ok) setDone(true); else setServerError(r.error);
      })}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="c-first" label="Prénom" error={errors.firstName?.message}>
          <Input id="c-first" autoComplete="given-name" {...register("firstName")} {...describe("c-first", errors.firstName?.message)} />
        </Field>
        <Field id="c-last" label="Nom" error={errors.lastName?.message}>
          <Input id="c-last" autoComplete="family-name" {...register("lastName")} {...describe("c-last", errors.lastName?.message)} />
        </Field>
      </div>
      <Field id="c-email" label="Adresse e-mail" error={errors.email?.message}>
        <Input id="c-email" type="email" autoComplete="email" inputMode="email" {...register("email")} {...describe("c-email", errors.email?.message)} />
      </Field>
      <Field id="c-msg" label="Votre message" error={errors.message?.message} hint="N’envoyez pas de documents ni d’informations sensibles ici.">
        <Textarea id="c-msg" {...register("message")} {...describe("c-msg", errors.message?.message, "x")} />
      </Field>
      <Honeypot {...register("website")} />
      <Consent id="c-consent" error={errors.consent?.message} {...register("consent")} />
      {serverError && <Notice tone="error">{serverError}</Notice>}
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
