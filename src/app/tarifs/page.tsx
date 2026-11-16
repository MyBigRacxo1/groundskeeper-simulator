import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { PricingGrid } from "@/components/sections/pricing";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata = pageMeta("Tarifs", "Des tarifs clairs pour l’assistance administrative, numérique et le dossier locatif. Le prix est annoncé avant toute prestation.", "/tarifs");

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Tarifs" title="Des tarifs clairs. Sans surprise.">Le tarif est confirmé dans votre proposition avant le début de la prestation.</PageHeader>
      <div className="container-x"><PricingGrid /></div>
      <CtaFinal />
    </>
  );
}
