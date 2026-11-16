import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { Steps } from "@/components/sections/steps";
import { Trust } from "@/components/sections/trust";
import { CtaFinal } from "@/components/sections/cta-final";

export const metadata = pageMeta("Comment ça marche", "De votre demande au dernier document : une prestation à distance en trois étapes simples, avec un interlocuteur humain.", "/comment-ca-marche");

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Comment ça marche" title="Simple, du premier clic au dernier document." />
      <div className="container-x pb-20"><Steps /></div>
      <section className="border-t border-line bg-bg-alt/60 py-20"><div className="container-x"><Trust /></div></section>
      <CtaFinal />
    </>
  );
}
