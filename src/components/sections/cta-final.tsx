import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaFinal() {
  return (
    <section className="container-x pt-24">
      <Reveal>
        <div className="rounded-[2rem] bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <h2 className="h2 text-3xl sm:text-5xl">On simplifie tout ça ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Parlez-nous de votre besoin. On vous aide à trouver la solution adaptée.
          </p>
          <ButtonLink href="/reservation" className="mt-8 h-12 bg-white !text-ink hover:!bg-accent-soft shadow-none">
            Demander un accompagnement
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
