import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeading({ eyebrow, title, children, center = false }: { eyebrow?: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="h2 text-3xl sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted">{children}</p>}
    </Reveal>
  );
}
