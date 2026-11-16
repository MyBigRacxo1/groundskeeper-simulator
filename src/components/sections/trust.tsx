import { EyeOff, Receipt, HeartHandshake, Laptop } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const items = [
  { icon: EyeOff, title: "Échanges confidentiels", text: "Vos informations ne servent qu'à réaliser la prestation demandée." },
  { icon: Receipt, title: "Tarifs transparents", text: "Le prix est annoncé avant de commencer. Aucun frais caché." },
  { icon: HeartHandshake, title: "Un accompagnement humain", text: "Un vrai interlocuteur, qui prend le temps d'expliquer." },
  { icon: Laptop, title: "100 % à distance", text: "Visio, messages, partage de documents : où que vous soyez." },
];

export function Trust() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.06}>
          <it.icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
          <h3 className="mt-4 font-semibold tracking-tight">{it.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
