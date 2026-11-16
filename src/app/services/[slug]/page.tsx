import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
import { getOffer, getServicePage, servicePages } from "@/config/services";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/sections/pricing";
import { CtaFinal } from "@/components/sections/cta-final";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";
import { site } from "@/config/site";

export const dynamicParams = false;
export const generateStaticParams = () => servicePages.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getServicePage((await params).slug);
  return s ? pageMeta(s.metaTitle, s.metaDescription, `/services/${s.slug}`) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const s = getServicePage((await params).slug);
  if (!s) notFound();
  const offers = s.offerIds.map(getOffer).filter((o) => !!o);
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.metaDescription, provider: { "@type": "ProfessionalService", name: site.name }, areaServed: "FR" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow={s.title} title={s.headline}>{s.intro}</PageHeader>
      <div className="container-x -mt-4 mb-4"><ButtonLink href="/reservation">Demander un accompagnement</ButtonLink></div>

      <section className="container-x py-16">
        <SectionHeading title="Ce que nous faisons avec vous" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.does.map((d) => (
            <div key={d.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card">
              <h3 className="font-semibold tracking-tight">{d.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-bg-alt/60 py-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Pour qui ?</h2>
            <ul className="mt-5 space-y-3">{s.forWho.map((t) => <li key={t} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Ce que nous ne faisons pas</h2>
            <ul className="mt-5 space-y-3 text-muted">{s.doesNot.map((t) => <li key={t} className="flex gap-3"><X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading title="Nos formules" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => <PricingCard key={o.id} offer={o} />)}
        </div>
      </section>
      <CtaFinal />
    </>
  );
}
