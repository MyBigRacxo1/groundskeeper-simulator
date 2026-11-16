/**
 * Configuration centrale du site : coordonnées, navigation, réservation, mentions légales.
 * Toute valeur vide ("") est masquée sur le site ou signalée « à compléter ».
 */
export const site = {
  name: "Clario",
  tagline: "Vos démarches. En plus simple.",
  description:
    "Clario simplifie vos démarches administratives, vos documents et vos outils numériques. Accompagnement humain, 100 % à distance, tarifs transparents.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",

  contact: {
    email: "", // À COMPLÉTER — ex. bonjour@votre-domaine.fr
    phone: "", // Optionnel
    hours: "", // Optionnel — ex. « Du lundi au vendredi, 9 h – 18 h »
  },

  booking: {
    /** URL d'un calendrier (Cal.com, Calendly…). Vide = demande avec disponibilités souhaitées. */
    calendarUrl: "",
    /** URL du paiement en ligne. Vide = le règlement est précisé dans la proposition. */
    paymentInfo:
      "Le règlement est détaillé dans la proposition que vous recevez avant toute prestation.",
  },

  nav: [
    { href: "/services", label: "Services" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/faq", label: "FAQ" },
  ],

  footerLegal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/confidentialite", label: "Confidentialité" },
    { href: "/cgv", label: "CGV" },
  ],

  /** Champs juridiques à compléter avant mise en ligne. Ne rien inventer. */
  legal: {
    companyName: "",
    legalForm: "",
    siret: "",
    address: "",
    publicationDirector: "",
    hostName: "Vercel Inc.",
    hostAddress: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
    dpoOrContact: "",
    mediator: "",
    vatStatus: "",
  },
} as const;
