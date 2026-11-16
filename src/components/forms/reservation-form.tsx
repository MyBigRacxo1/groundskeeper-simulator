"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { reservationSchema, type ReservationInput } from "@/lib/schemas";
import { formatPrice, getOffer, offers } from "@/config/services";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Consent, Field, Honeypot, Input, Notice, Textarea, describe } from "./fields";
import { postJson } from "./submit";

const labels = ["Service", "Besoin", "Récapitulatif"] as const;

export function ReservationForm({ initialService }: { initialService?: string }) {
  const openedAt = useRef(Date.now());
  const [step, setStep] = useState(initialService && getOffer(initialService) ? 1 : 0);
  const [serverError, setServerError] = useState<string>();
  const [done, setDone] = useState(false);
  const form = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { service: getOffer(initialService ?? "") ? initialService : undefined, website: "" },
    mode: "onTouched",
  });
  const { register, handleSubmit, trigger, watch, formState: { errors, isSubmitting } } = form;
  const service = watch("service");
  const offer = getOffer(service ?? "");

  const next = async (fields: (keyof ReservationInput)[]) => { if (await trigger(fields)) setStep((s) => s + 1); };

  if (done)
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-accent/30 bg-accent-soft p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">Demande bien enregistrée.</h2>
        <p className="mx-auto mt-2 max-w-md text-muted">Nous revenons vers vous par e-mail pour confirmer le rendez-vous. Il n’est confirmé qu’après notre réponse.</p>
      </div>
    );

  return (
    <form
      noValidate
      className="relative rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card sm:p-9"
      onSubmit={handleSubmit(async (v) => {
        setServerError(undefined);
        const r = await postJson("/api/reservation", { ...v, openedAt: openedAt.current });
        if (r.ok) setDone(true); else setServerError(r.error);
      })}
    >
      <ol className="mb-8 flex gap-2" aria-label="Étapes">
        {labels.map((l, i) => (
          <li key={l} aria-current={i === step ? "step" : undefined} className="flex-1">
            <div className={`h-1 rounded-full transition-colors ${i <= step ? "bg-accent" : "bg-line"}`} />
            <p className={`mt-2 text-xs font-medium ${i === step ? "text-ink" : "text-muted"}`}>{i + 1}. {l}</p>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset>
          <legend className="text-xl font-semibold tracking-tight">Quel accompagnement vous faut-il ?</legend>
          <div className="mt-5 grid gap-3">
            {offers.map((o) => (
              <label key={o.id} className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-line p-4 transition-colors hover:border-ink/25 has-[:checked]:border-accent has-[:checked]:bg-accent-soft/50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-accent/15">
                <span className="flex items-center gap-3">
                  <input type="radio" value={o.id} {...register("service")} className="size-4 accent-[#397c69]" />
                  <span className="font-medium">{o.name}</span>
                </span>
                <span className="shrink-0 text-sm text-muted">{formatPrice(o.price)} / {o.unit}</span>
              </label>
            ))}
          </div>
          {errors.service && <p role="alert" className="mt-3 text-sm text-danger">Choisissez un service pour continuer.</p>}
          <div className="mt-8 flex justify-end">
            <Button type="button" onClick={() => next(["service"])}>Continuer <ArrowRight className="size-4" aria-hidden="true" /></Button>
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">Parlez-nous de votre besoin</h2>
          <Field id="r-need" label="Description du besoin" error={errors.need?.message} hint="Quelques lignes suffisent. Pas de documents ni d’informations sensibles ici.">
            <Textarea id="r-need" {...register("need")} {...describe("r-need", errors.need?.message, "x")} />
          </Field>
          <Field id="r-av" label="Vos disponibilités souhaitées" error={errors.availability?.message} hint="Ex. : en semaine après 18 h, ou le mercredi matin.">
            <Textarea id="r-av" rows={3} {...register("availability")} {...describe("r-av", errors.availability?.message, "x")} />
          </Field>
          {site.booking.calendarUrl && (
            <a href={site.booking.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline">
              <CalendarCheck className="size-4" aria-hidden="true" /> Voir le calendrier pour choisir un créneau
            </a>
          )}
          <div className="flex justify-between pt-3">
            <Button type="button" variant="ghost" onClick={() => setStep(0)}><ArrowLeft className="size-4" aria-hidden="true" /> Retour</Button>
            <Button type="button" onClick={() => next(["need", "availability"])}>Continuer <ArrowRight className="size-4" aria-hidden="true" /></Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight">Dernière étape</h2>
          {offer && (
            <div className="flex items-center justify-between gap-4 rounded-xl bg-bg-alt p-4">
              <div>
                <p className="text-sm text-muted">Votre sélection</p>
                <p className="font-medium">{offer.name}</p>
              </div>
              <p className="text-right"><span className="text-xl font-semibold">{formatPrice(offer.price)}</span><span className="block text-sm text-muted">/ {offer.unit}</span></p>
            </div>
          )}
          <p className="text-sm text-muted">Il s’agit d’une demande : aucun paiement n’est demandé maintenant. {site.booking.paymentInfo}</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="r-first" label="Prénom" error={errors.firstName?.message}>
              <Input id="r-first" autoComplete="given-name" {...register("firstName")} {...describe("r-first", errors.firstName?.message)} />
            </Field>
            <Field id="r-last" label="Nom" error={errors.lastName?.message}>
              <Input id="r-last" autoComplete="family-name" {...register("lastName")} {...describe("r-last", errors.lastName?.message)} />
            </Field>
          </div>
          <Field id="r-email" label="Adresse e-mail" error={errors.email?.message}>
            <Input id="r-email" type="email" autoComplete="email" inputMode="email" {...register("email")} {...describe("r-email", errors.email?.message)} />
          </Field>
          <Honeypot {...register("website")} />
          <Consent id="r-consent" error={errors.consent?.message} {...register("consent")} />
          {serverError && <Notice tone="error">{serverError}</Notice>}
          <div className="flex justify-between pt-3">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}><ArrowLeft className="size-4" aria-hidden="true" /> Retour</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
              {isSubmitting ? "Envoi…" : "Envoyer ma demande"}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}
