import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { ReservationForm } from "@/components/forms/reservation-form";

export const metadata = pageMeta("Prendre rendez-vous", "Demandez un accompagnement en quelques minutes : choisissez votre service, décrivez votre besoin, indiquez vos disponibilités.", "/reservation");

export default async function Page({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <>
      <PageHeader eyebrow="Réservation" title="Demandez votre accompagnement.">Trois étapes, deux minutes. Votre rendez-vous est confirmé par e-mail après notre réponse.</PageHeader>
      <div className="container-x max-w-3xl"><ReservationForm initialService={service} /></div>
    </>
  );
}
