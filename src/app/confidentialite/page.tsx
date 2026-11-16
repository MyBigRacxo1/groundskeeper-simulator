import { pageMeta } from "@/lib/seo";
import { LegalPage, Fill } from "@/components/legal";
import { site } from "@/config/site";

export const metadata = { ...pageMeta("Politique de confidentialité", "Comment Clario traite les données personnelles collectées via ce site.", "/confidentialite"), robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p><Fill value={site.legal.companyName} label="identité du responsable de traitement" /> — contact : <Fill value={site.legal.dpoOrContact || site.contact.email} label="e-mail pour exercer vos droits" /></p>
      <h2>Données collectées</h2>
      <p>Via les formulaires de contact et de réservation : nom, prénom, adresse e-mail, service souhaité, description du besoin et disponibilités.</p>
      <p>Le formulaire public ne doit pas servir à transmettre des documents ou des informations sensibles.</p>
      <h2>Finalités</h2>
      <ul><li>Répondre à vos messages et demandes de rendez-vous.</li><li>Préparer et exécuter la prestation demandée.</li></ul>
      <h2>Base légale</h2>
      <p>Votre consentement et/ou l’exécution de mesures précontractuelles. <span className="todo">[À VALIDER]</span></p>
      <h2>Destinataires et sous-traitants</h2>
      <p>Hébergement du site et service d’envoi d’e-mails (notification des demandes). <span className="todo">[À COMPLÉTER : liste exacte des prestataires utilisés, localisation des données]</span></p>
      <h2>Durée de conservation</h2>
      <p><span className="todo">[À COMPLÉTER : durée de conservation]</span></p>
      <h2>Vos droits</h2>
      <p>Accès, rectification, effacement, opposition, limitation et portabilité. Vous pouvez aussi introduire une réclamation auprès de la CNIL.</p>
      <h2>Cookies et mesure d’audience</h2>
      <p>Le site n’utilise aucun traceur publicitaire. <span className="todo">[À VÉRIFIER si un outil de mesure d&apos;audience est ajouté]</span></p>
    </LegalPage>
  );
}
