import { z } from "zod";
import { offers } from "@/config/services";

const serviceIds = offers.map((o) => o.id) as [string, ...string[]];

const base = {
  firstName: z.string().trim().min(1, "Indiquez votre prénom").max(80),
  lastName: z.string().trim().min(1, "Indiquez votre nom").max(80),
  email: z.string().trim().email("Adresse e-mail invalide").max(200),
  consent: z.boolean().refine((v) => v === true, "Votre accord est nécessaire pour traiter votre demande"),
  /** Anti-spam : champ piège (doit rester vide) et horodatage d'ouverture du formulaire. */
  website: z.string().max(0).optional().default(""),
  openedAt: z.number().optional(),
};

export const contactSchema = z.object({
  ...base,
  message: z.string().trim().min(10, "Décrivez votre demande en quelques mots (10 caractères minimum)").max(3000),
});

export const reservationSchema = z.object({
  ...base,
  service: z.enum(serviceIds, { error: "Choisissez un service" }),
  need: z.string().trim().min(10, "Décrivez votre besoin en quelques mots (10 caractères minimum)").max(3000),
  availability: z.string().trim().min(3, "Indiquez vos disponibilités").max(1000),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ReservationInput = z.input<typeof reservationSchema>;
