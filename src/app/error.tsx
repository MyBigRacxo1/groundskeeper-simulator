"use client";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="eyebrow">Un imprévu</p>
        <h1 className="display mt-3 text-4xl sm:text-5xl">Quelque chose s’est mal passé.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">Ce n’est pas de votre fait. Réessayez dans un instant.</p>
        <Button onClick={reset} className="mt-8">Réessayer</Button>
      </div>
    </section>
  );
}
