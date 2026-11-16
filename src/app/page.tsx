import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";
import { HeroVisual } from "@/components/sections/hero-visual";
import { ServiceCards } from "@/components/sections/service-cards";
import { Steps } from "@/components/sections/steps";
import { PricingGrid } from "@/components/sections/pricing";
import { Trust } from "@/components/sections/trust";
import { FaqList } from "@/components/sections/faq-list";
import { CtaFinal } from "@/components/sections/cta-final";
import { site } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  areaServed: "FR",
  availableLanguage: "fr",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="container-x grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <p className="eyebrow mb-5">Assistance administrative et numérique à distance</p>
          <h1 className="display text-[2.75rem] sm:text-6xl lg:text-[4.25rem]">L’administratif, sans la complication.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Vos démarches, vos documents et vos outils numériques simplifiés. Un accompagnement humain, à distance, quand vous en avez besoin.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/reservation" className="h-12 px-6">Trouver mon accompagnement <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></ButtonLink>
            <ButtonLink href="/tarifs" variant="secondary" className="h-12 px-6">Découvrir les tarifs</ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
            {["100 % à distance", "Tarifs transparents", "Accompagnement personnalisé"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />{t}</li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </section>

      <section className="border-y border-line bg-bg-alt/60 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Nos services" title="Moins de démarches. Plus de liberté.">
            Trois domaines d’accompagnement, pour les particuliers et les indépendants.
          </SectionHeading>
          <div className="mt-12"><ServiceCards /></div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Comment ça marche" title="Simple, du premier clic au dernier document." />
        <div className="mt-14"><Steps /></div>
      </section>

      <section className="border-y border-line bg-bg-alt/60 py-24" id="tarifs">
        <div className="container-x">
          <SectionHeading eyebrow="Tarifs" title="Des tarifs clairs. Sans surprise.">
            Le prix est annoncé avant de commencer. Vous choisissez, nous confirmons.
          </SectionHeading>
          <div className="mt-12"><PricingGrid /></div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Confiance" title="Un service humain, pensé pour vous rassurer." />
        <div className="mt-12"><Trust /></div>
      </section>

      <section className="container-x pb-4">
        <SectionHeading eyebrow="FAQ" title="Les questions qu’on nous pose souvent." />
        <div className="mt-10 max-w-3xl"><FaqList limit={5} /></div>
        <ButtonLink href="/faq" variant="ghost" className="mt-4 -ml-3">Voir toutes les questions <ArrowRight className="size-4" aria-hidden="true" /></ButtonLink>
      </section>

      <CtaFinal />
    </>
  );
}
