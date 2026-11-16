import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/config/site";

export const metadata = pageMeta("Contact", "Une question avant de commencer ? Écrivez-nous, nous vous répondons par e-mail.", "/contact");

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Une question ? Écrivez-nous.">Pour réserver un accompagnement, passez plutôt par la page de réservation.</PageHeader>
      <div className="container-x grid gap-12 pb-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-card sm:p-9"><ContactForm /></div>
        <aside className="text-[0.9375rem] leading-relaxed text-muted">
          <p className="font-medium text-ink">À savoir</p>
          <p className="mt-2">Nous répondons par e-mail. N’envoyez pas de documents ou d’informations sensibles via ce formulaire : nous conviendrons ensemble d’un moyen adapté.</p>
          {site.contact.email && <p className="mt-4"><a className="text-ink underline underline-offset-4" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>}
          {site.contact.hours && <p className="mt-2">{site.contact.hours}</p>}
        </aside>
      </div>
    </>
  );
}
