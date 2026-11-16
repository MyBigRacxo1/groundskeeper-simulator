import { Check } from "lucide-react";
import { formatPrice, offers, type Offer } from "@/config/services";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function PricingCard({ offer }: { offer: Offer }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[var(--radius-card)] border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        offer.featured ? "border-accent/40 ring-1 ring-accent/20" : "border-line"
      }`}
    >
      <h3 className="text-lg font-semibold tracking-tight">{offer.name}</h3>
      <p className="mt-1 min-h-12 text-[0.9375rem] leading-relaxed text-muted">{offer.description}</p>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">{formatPrice(offer.price)}</span>
        <span className="text-[0.9375rem] text-muted">/ {offer.unit}</span>
      </p>
      <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-[0.9375rem]">
        {offer.includes.map((i) => (
          <li key={i} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />{i}</li>
        ))}
      </ul>
      <ButtonLink href={`/reservation?service=${offer.id}`} variant={offer.featured ? "primary" : "secondary"} className="mt-8">
        Choisir cette offre<span className="sr-only"> : {offer.name}</span>
      </ButtonLink>
    </article>
  );
}

export function PricingGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {offers.map((o, i) => (
        <Reveal key={o.id} delay={(i % 3) * 0.06} className="h-full"><PricingCard offer={o} /></Reveal>
      ))}
    </div>
  );
}
