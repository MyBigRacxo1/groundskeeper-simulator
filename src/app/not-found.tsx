import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="eyebrow">Erreur 404</p>
        <h1 className="display mt-3 text-4xl sm:text-5xl">Cette page n’existe pas.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">Le lien est peut-être incorrect ou la page a été déplacée.</p>
        <ButtonLink href="/" className="mt-8">Retour à l’accueil</ButtonLink>
      </div>
    </section>
  );
}
