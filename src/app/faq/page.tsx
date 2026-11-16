import { pageMeta } from "@/lib/seo";
import { faq } from "@/config/faq";
import { PageHeader } from "@/components/page-header";
import { FaqList } from "@/components/sections/faq-list";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata = pageMeta("Questions fréquentes", "Prestation à distance, documents, réservation, paiement, annulation, confidentialité : toutes les réponses à vos questions.", "/faq");

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow="FAQ" title="Les questions qu’on nous pose souvent." />
      <div className="container-x max-w-4xl"><FaqList /></div>
      <CtaFinal />
    </>
  );
}
