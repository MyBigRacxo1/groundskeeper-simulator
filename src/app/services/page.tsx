import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { ServiceCards } from "@/components/sections/service-cards";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata = pageMeta("Services d’assistance administrative et numérique", "Assistance administrative, assistance numérique et documents immobiliers : un accompagnement humain à distance pour simplifier vos démarches.", "/services");

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Un accompagnement pour chaque démarche.">Trois domaines, un même principe : vous expliquer clairement et avancer avec vous.</PageHeader>
      <div className="container-x"><ServiceCards /></div>
      <CtaFinal />
    </>
  );
}
