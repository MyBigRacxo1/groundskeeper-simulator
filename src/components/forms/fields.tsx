import type { ComponentProps, ReactNode } from "react";

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors hover:border-ink/25 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 aria-[invalid=true]:border-danger";

export function Field({ label, error, hint, id, children }: { label: string; error?: string; hint?: string; id: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">{hint}</p>}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
}

export const describe = (id: string, error?: string, hint?: string) =>
  ({ "aria-invalid": error ? true : undefined, "aria-describedby": error ? `${id}-err` : hint ? `${id}-hint` : undefined }) as const;

export function Input(props: ComponentProps<"input">) { return <input {...props} className={input} />; }
export function Textarea(props: ComponentProps<"textarea">) { return <textarea rows={5} {...props} className={`${input} resize-y`} />; }

export function Consent({ id, error, ...props }: ComponentProps<"input"> & { id: string; error?: string }) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
        <input id={id} type="checkbox" {...props} {...describe(id, error)} className="mt-0.5 size-4 shrink-0 accent-[#397c69]" />
        <span>
          J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
          <a href="/confidentialite" className="text-ink underline underline-offset-4">politique de confidentialité</a>.
        </span>
      </label>
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
}

/** Champ piège anti-spam : invisible pour les humains. */
export function Honeypot(props: ComponentProps<"input">) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>Ne pas remplir<input type="text" tabIndex={-1} autoComplete="off" {...props} /></label>
    </div>
  );
}

export function Notice({ tone, children }: { tone: "error" | "success"; children: ReactNode }) {
  return (
    <div role={tone === "error" ? "alert" : "status"} className={`rounded-xl border px-4 py-3 text-[0.9375rem] ${tone === "error" ? "border-danger/30 bg-danger/5 text-danger" : "border-accent/30 bg-accent-soft text-accent-strong"}`}>
      {children}
    </div>
  );
}
