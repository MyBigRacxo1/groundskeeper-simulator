import { Plus } from "lucide-react";
import { faq } from "@/config/faq";

export function FaqList({ limit }: { limit?: number }) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <div className="divide-y divide-line rounded-[var(--radius-card)] border border-line bg-white shadow-card">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.0625rem] font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="pb-5 pr-8 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
