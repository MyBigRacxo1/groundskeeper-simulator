import { pageMeta } from "@/lib/seo";
import { LegalPage, Fill } from "@/components/legal";
import { site } from "@/config/site";

export const metadata = { ...pageMeta("Mentions légales", "Mentions légales du site Clario.", "/mentions-legales"), robots: { index: false } };
const l = site.legal;

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>Dénomination : <Fill value={l.companyName} label="nom de l'entreprise" /></p>
      <p>Forme juridique : <Fill value={l.legalForm} label="forme juridique" /></p>
      <p>SIRET : <Fill value={l.siret} label="numéro SIRET" /></p>
      <p>Adresse : <Fill value={l.address} label="adresse" /></p>
      <p>E-mail : <Fill value={site.contact.email} label="e-mail de contact" /></p>
      <p>Régime de TVA : <Fill value={l.vatStatus} label="mention TVA" /></p>
      <h2>Directeur de la publication</h2>
      <p><Fill value={l.publicationDirector} label="nom du directeur de la publication" /></p>
      <h2>Hébergement</h2>
      <p>{l.hostName} — {l.hostAddress}. <span className="todo">[À VÉRIFIER avec l&apos;hébergeur réellement utilisé]</span></p>
      <h2>Activité</h2>
      <p>Clario propose une assistance administrative, numérique et documentaire à distance. Clario n’est pas une agence immobilière, un cabinet juridique ou un service de conseil fiscal.</p>
      <h2>Médiation de la consommation</h2>
      <p><Fill value={l.mediator} label="coordonnées du médiateur de la consommation" /></p>
    </LegalPage>
  );
}
