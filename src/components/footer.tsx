import Link from "next/link";
import { Wordmark } from "./logo";
import { site } from "@/config/site";
import { servicePages } from "@/config/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-alt/60">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Wordmark className="h-6 w-auto" />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{site.tagline}</p>
          {site.contact.email && (
            <a href={`mailto:${site.contact.email}`} className="mt-4 inline-block text-[0.9375rem] underline-offset-4 hover:underline">
              {site.contact.email}
            </a>
          )}
        </div>
        <FooterCol title="Services" links={servicePages.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))} />
        <FooterCol
          title="Clario"
          links={[
            { href: "/tarifs", label: "Tarifs" },
            { href: "/comment-ca-marche", label: "Comment ça marche" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol title="Informations" links={[...site.footerLegal]} />
      </div>
      <div className="container-x border-t border-line py-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} Clario. Clario n’est pas une agence immobilière, un cabinet juridique ou un service de conseil fiscal.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-sm font-medium">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.9375rem] text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
