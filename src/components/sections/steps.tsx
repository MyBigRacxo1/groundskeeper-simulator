import { Reveal } from "@/components/ui/reveal";

export const steps = [
  { title: "Expliquez votre besoin", text: "Quelques lignes suffisent. Dites-nous ce qui vous pèse, dans vos mots." },
  { title: "Recevez une proposition claire", text: "Contenu, durée, tarif : tout est précisé avant de commencer. Pas de surprise." },
  { title: "On s’occupe du reste, ensemble", text: "On avance à distance, à votre rythme, et vous gardez la main sur vos documents." },
];

export function Steps() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
      <div className="absolute left-[1.15rem] top-6 bottom-6 w-px bg-line md:hidden" aria-hidden="true" />
      <div className="absolute left-[16%] right-[16%] top-[1.15rem] hidden h-px bg-line md:block" aria-hidden="true" />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-14 md:pl-0">
          <Reveal delay={i * 0.1}>
            <span className="absolute left-0 top-0 grid size-[2.3rem] place-items-center rounded-full border border-accent/30 bg-accent-soft text-sm font-semibold text-accent md:static">
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold tracking-tight md:mt-6">{s.title}</h3>
            <p className="mt-2 max-w-xs leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
