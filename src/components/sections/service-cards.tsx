import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { servicePages } from "@/config/services";
import { ServiceIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";

export function ServiceCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {servicePages.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.07} className="h-full">
          <Link
            href={`/services/${s.slug}`}
            className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent"><ServiceIcon name={s.icon} className="size-[1.35rem]" /></span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.short}</p>
            <ul className="mt-6 space-y-2.5 text-[0.9375rem]">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />{b}</li>
              ))}
            </ul>
            <span className="mt-auto flex items-center gap-1 pt-8 text-[0.9375rem] font-medium text-accent">
              En savoir plus <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
