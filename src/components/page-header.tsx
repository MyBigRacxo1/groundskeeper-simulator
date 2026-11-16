import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="container-x pb-12 pt-14 sm:pb-16 sm:pt-20">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="display max-w-3xl text-4xl sm:text-6xl">{title}</h1>
      {children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</p>}
    </header>
  );
}
