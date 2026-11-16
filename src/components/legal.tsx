import type { ReactNode } from "react";
import { PageHeader } from "./page-header";

/** Affiche la valeur configurée, ou un champ « à compléter » bien visible. */
export const Fill = ({ value, label }: { value?: string; label: string }) =>
  value ? <>{value}</> : <span className="todo">[À COMPLÉTER : {label}]</span>;

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title={title} />
      <div className="container-x max-w-3xl pb-8">
        <div role="note" className="mb-10 rounded-xl border border-[#e8d48a] bg-[#fff8dc] p-4 text-sm text-[#5c4400]">
          <strong>Brouillon à compléter et à faire valider.</strong> Ce texte est un modèle de structure. Il n’a pas été validé juridiquement : complétez les champs signalés et faites-le relire par un professionnel avant la mise en ligne.
        </div>
        <div className="prose-legal">{children}</div>
      </div>
    </>
  );
}
