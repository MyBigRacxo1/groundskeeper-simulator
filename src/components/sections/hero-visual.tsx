import { CalendarCheck, Check, FileText, Mail } from "lucide-react";

/** Composition illustrative (pas une capture d'écran) : démarche, documents, rendez-vous. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/5] w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-accent-soft via-bg-alt to-bg" />
      <div className="absolute left-0 top-[6%] w-[68%] rotate-[-2deg] rounded-2xl border border-line bg-white p-5 shadow-lift">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent"><Mail className="size-[1.1rem]" strokeWidth={1.6} /></span>
          <div>
            <p className="text-sm font-medium">Courrier de relance</p>
            <p className="text-xs text-muted">Rédigé avec vous</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-full rounded-full bg-bg-alt" />
          <div className="h-2 w-[88%] rounded-full bg-bg-alt" />
          <div className="h-2 w-[64%] rounded-full bg-bg-alt" />
        </div>
      </div>

      <div className="absolute right-0 top-[34%] w-[62%] rotate-[1.5deg] rounded-2xl border border-line bg-white p-5 shadow-lift">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent"><FileText className="size-[1.1rem]" strokeWidth={1.6} /></span>
          <p className="text-sm font-medium">Dossier PDF structuré</p>
        </div>
        <ul className="mt-4 space-y-2.5 text-[0.8125rem] text-muted">
          {["Pièce d'identité", "Justificatifs de revenus", "Justificatif de domicile"].map((t) => (
            <li key={t} className="flex items-center gap-2.5">
              <span className="grid size-4 place-items-center rounded-full bg-accent text-white"><Check className="size-2.5" strokeWidth={3} /></span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-[4%] left-[6%] w-[58%] rounded-2xl border border-line bg-ink p-5 text-white shadow-lift">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-white/10"><CalendarCheck className="size-[1.1rem]" strokeWidth={1.6} /></span>
          <div>
            <p className="text-sm font-medium">Rendez-vous confirmé</p>
            <p className="text-xs text-white/60">En visio, à votre rythme</p>
          </div>
        </div>
      </div>
    </div>
  );
}
