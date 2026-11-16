# Clario — site vitrine (brouillon)

Next.js (App Router) · TypeScript strict · Tailwind CSS 4 · Motion · React Hook Form + Zod · Geist.

## Démarrer
```bash
pnpm install
cp .env.example .env.local
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

## Modifier le contenu (sans toucher à l'app)
- `src/config/site.ts` — nom, coordonnées, navigation, lien calendrier, champs légaux
- `src/config/services.ts` — **prix**, offres, pages de services
- `src/config/faq.ts` — questions fréquentes

## Formulaires
`/api/contact` et `/api/reservation` : validation Zod côté serveur, champ piège, délai minimal, limite de débit.
- Avec `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_EMAIL_TO` : notification e-mail via Resend.
- Sans clé, en **développement** : écriture dans `.data/submissions.jsonl`.
- Sans clé, en **production** : erreur explicite, aucune fausse confirmation.
Pour ajouter une base de données, un paiement ou une authentification plus tard, brancher `src/lib/submissions.ts`.

## Logos
`public/logo-light.svg`, `public/logo-dark.svg`, `public/symbol.svg` (favicon : `src/app/icon.svg`), `public/social.svg`. Composants : `src/components/logo.tsx`.

## À compléter avant mise en ligne
- [ ] Informations légales (`site.legal`) et relecture juridique de `/mentions-legales`, `/confidentialite`, `/cgv`
- [ ] E-mail de contact, domaine (`NEXT_PUBLIC_SITE_URL`)
- [ ] Resend : domaine d'envoi vérifié + 3 variables d'environnement
- [ ] Lien calendrier (`site.booking.calendarUrl`) si souhaité
- [ ] Relire les textes (modalités de paiement, annulation)
- [ ] Déploiement Vercel : importer le dépôt, ajouter les variables d'environnement

## Non fait volontairement
Pas de shadcn/ui (composants maison suffisants), pas d'espace client (donc pas de bouton « Connexion »), pas de Supabase/Stripe.
