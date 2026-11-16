/**
 * Prestations, prix et pages de services. Modifiez les prix ici : tout le site suit.
 */
export type ServiceSlug = "administratif" | "numerique" | "immobilier";
export type IconName = "mail" | "monitor" | "key" | "sparkle" | "layers" | "briefcase" | "clock" | "folder";

export type Offer = {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
  includes: string[];
  category: ServiceSlug | "pack";
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    id: "coup-de-pouce",
    name: "Coup de pouce administratif",
    price: 29,
    unit: "30 min",
    description: "Un point rapide pour débloquer une démarche ou relire un courrier.",
    includes: ["Relecture d'un courrier ou d'un e-mail", "Réponse à une question précise", "Conseils pour la suite"],
    category: "administratif",
  },
  {
    id: "assistance-administrative",
    name: "Assistance administrative",
    price: 49,
    unit: "heure",
    description: "Un accompagnement pour avancer sur vos démarches, pas à pas.",
    includes: ["Rédaction de courriers et e-mails", "Aide aux formulaires", "Organisation et mise en forme de PDF"],
    category: "administratif",
    featured: true,
  },
  {
    id: "assistance-numerique",
    name: "Assistance numérique",
    price: 39,
    unit: "heure",
    description: "Une aide à distance sur vos appareils et vos outils du quotidien.",
    includes: ["Mac, Windows et smartphone", "E-mails, PDF et services en ligne", "Initiation aux outils d'IA"],
    category: "numerique",
  },
  {
    id: "dossier-locatif",
    name: "Dossier locatif",
    price: 59,
    unit: "dossier",
    description: "Un dossier complet, vérifié et prêt à envoyer.",
    includes: ["Vérification des pièces", "Organisation des documents", "Dossier PDF structuré"],
    category: "immobilier",
  },
  {
    id: "pack-organisation",
    name: "Pack organisation",
    price: 99,
    unit: "jusqu'à 3 h",
    description: "Une grande remise en ordre, en une ou plusieurs séances.",
    includes: ["Tri et classement de vos documents", "Mise en place d'une organisation claire", "Utilisable en plusieurs séances"],
    category: "pack",
  },
  {
    id: "pack-independant",
    name: "Pack indépendant",
    price: 179,
    unit: "5 h mensuelles",
    description: "Un renfort régulier pour les indépendants et les petites structures.",
    includes: ["5 heures d'assistance par mois", "Tâches administratives récurrentes", "Un interlocuteur identifié"],
    category: "pack",
  },
];

export const formatPrice = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export type ServicePage = {
  slug: ServiceSlug;
  title: string;
  short: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  benefits: string[];
  does: { title: string; text: string }[];
  forWho: string[];
  doesNot: string[];
  offerIds: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "administratif",
    title: "Assistance administrative",
    short: "Courriers, formulaires, documents : on avance ensemble, sans jargon.",
    icon: "mail",
    metaTitle: "Assistance administrative à distance",
    metaDescription:
      "Aide aux démarches administratives à distance : courriers, e-mails, formulaires, organisation de documents et PDF. Tarifs clairs, accompagnement humain.",
    headline: "Vos démarches avancent. Vous respirez.",
    intro:
      "Un courrier à écrire, un formulaire qui bloque, des documents éparpillés : on s'en occupe avec vous, à distance, dans un langage clair.",
    benefits: ["Des courriers clairs et bien tournés", "Des documents rangés et exploitables", "Un interlocuteur humain, à votre rythme"],
    does: [
      { title: "Courriers et e-mails", text: "Rédaction ou relecture, pour dire les choses simplement et efficacement." },
      { title: "Démarches courantes", text: "Un accompagnement pas à pas sur les démarches du quotidien." },
      { title: "Formulaires", text: "On vous aide à comprendre ce qui est demandé et à le remplir proprement." },
      { title: "Documents et PDF", text: "Organisation, fusion, mise en forme et nommage de vos fichiers." },
      { title: "Relances simples", text: "Un message de relance clair quand une demande reste sans réponse." },
    ],
    forWho: ["Particuliers qui veulent gagner du temps", "Indépendants et freelances", "TPE et petites structures"],
    doesNot: ["Conseil juridique ou fiscal", "Représentation auprès d'une administration", "Décision à votre place sur le fond d'un dossier"],
    offerIds: ["coup-de-pouce", "assistance-administrative", "pack-organisation", "pack-independant"],
  },
  {
    slug: "numerique",
    title: "Assistance numérique",
    short: "Mac, Windows, smartphone, e-mails, PDF, IA : une aide patiente et concrète.",
    icon: "monitor",
    metaTitle: "Assistance informatique à distance",
    metaDescription:
      "Aide informatique à distance sur Mac, Windows et smartphone : e-mails, PDF, services en ligne, initiation à l'IA. Un accompagnement patient et humain.",
    headline: "Le numérique, à votre rythme.",
    intro:
      "Un appareil qui ne fait pas ce qu'on veut, un service en ligne obscur, un outil à apprivoiser : on vous guide en visio, patiemment.",
    benefits: ["Explications simples, sans condescendance", "Aide sur vos propres appareils", "Des réflexes qui restent après la séance"],
    does: [
      { title: "Mac, Windows, smartphone", text: "Prise en main, réglages, organisation de vos fichiers et applications." },
      { title: "E-mails et PDF", text: "Gérer sa messagerie, signer, fusionner ou compresser un document." },
      { title: "Services en ligne", text: "Créer et comprendre vos comptes et outils du quotidien." },
      { title: "Initiation à l'IA", text: "Découvrir des outils d'intelligence artificielle utiles, avec bon sens." },
      { title: "Organisation numérique", text: "Un espace de travail clair : dossiers, sauvegardes, bonnes habitudes." },
    ],
    forWho: ["Personnes peu à l'aise avec les outils numériques", "Étudiants", "Indépendants qui veulent mieux s'organiser"],
    doesNot: ["Dépannage matériel en présentiel", "Récupération de données après panne physique", "Développement logiciel ou web"],
    offerIds: ["assistance-numerique", "pack-organisation"],
  },
  {
    slug: "immobilier",
    title: "Documents immobiliers",
    short: "Un dossier locatif complet, vérifié et prêt à envoyer.",
    icon: "key",
    metaTitle: "Aide à la constitution de dossier locatif",
    metaDescription:
      "Préparation de dossier locatif à distance : vérification des pièces, organisation et dossier PDF structuré. Assistance administrative, non réglementée.",
    headline: "Un dossier locatif qui se présente bien.",
    intro:
      "Vous cherchez un logement ? On vérifie que votre dossier est complet, on organise vos pièces et on vous remet un PDF clair, prêt à être envoyé.",
    benefits: ["Vérification de complétude des pièces", "Documents classés dans le bon ordre", "Un seul dossier PDF structuré"],
    does: [
      { title: "Préparation du dossier", text: "On liste avec vous les pièces à réunir selon votre situation." },
      { title: "Vérification", text: "On contrôle que chaque pièce est lisible, complète et à jour." },
      { title: "Organisation", text: "Nommage, ordre et regroupement des documents." },
      { title: "Dossier PDF", text: "Un dossier unique, structuré, facile à transmettre." },
    ],
    forWho: ["Candidats locataires", "Étudiants", "Personnes qui déménagent"],
    doesNot: [
      "Activité d'agence immobilière (visites, mise en relation, négociation)",
      "Conseil juridique ou fiscal",
      "Garantie d'obtention d'un logement",
    ],
    offerIds: ["dossier-locatif"],
  },
];

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug);
export const getOffer = (id: string) => offers.find((o) => o.id === id);
