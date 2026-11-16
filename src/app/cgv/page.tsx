import { pageMeta } from "@/lib/seo";
import { LegalPage, Fill } from "@/components/legal";
import { site } from "@/config/site";

export const metadata = { ...pageMeta("Conditions générales de vente", "Conditions générales de vente des prestations Clario.", "/cgv"), robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2>Prestataire</h2>
      <p><Fill value={site.legal.companyName} label="identité du prestataire" /> — <Fill value={site.legal.siret} label="SIRET" /></p>
      <h2>Objet</h2>
      <p>Les présentes conditions encadrent les prestations d’assistance administrative, numérique et documentaire à distance proposées par Clario. Les prestations sont décrites sur le site et dans chaque proposition.</p>
      <h2>Tarifs</h2>
      <p>Les tarifs en vigueur figurent sur la page Tarifs. Le prix applicable est confirmé dans la proposition avant le début de la prestation. <span className="todo">[À COMPLÉTER : mention TVA]</span></p>
      <h2>Commande et réalisation</h2>
      <p><span className="todo">[À COMPLÉTER : processus d&apos;acceptation de la proposition, délais]</span></p>
      <h2>Paiement</h2>
      <p><span className="todo">[À COMPLÉTER : modalités et délais de règlement]</span></p>
      <h2>Annulation et report</h2>
      <p><span className="todo">[À COMPLÉTER : conditions d&apos;annulation et de report d&apos;un rendez-vous]</span></p>
      <h2>Droit de rétractation</h2>
      <p><span className="todo">[À COMPLÉTER : conditions applicables aux consommateurs — à faire valider]</span></p>
      <h2>Limites de la prestation</h2>
      <p>Clario n’est pas une agence immobilière, un cabinet juridique ou un service de conseil fiscal et ne fournit aucun conseil juridique ou fiscal. Aucun résultat n’est garanti.</p>
      <h2>Litiges</h2>
      <p><span className="todo">[À COMPLÉTER : droit applicable, médiation de la consommation]</span></p>
    </LegalPage>
  );
}
