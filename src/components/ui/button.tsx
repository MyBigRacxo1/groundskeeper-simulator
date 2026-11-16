import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-strong shadow-[0_1px_2px_rgb(23_35_32/0.2),inset_0_1px_0_rgb(255_255_255/0.12)]",
  secondary: "bg-white text-ink border border-line hover:border-ink/25 hover:bg-white",
  ghost: "text-ink hover:bg-bg-alt",
};
const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 h-11 text-[0.9375rem] font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

export const buttonClass = (variant: Variant = "primary", extra = "") => `${base} ${styles[variant]} ${extra}`;

export function ButtonLink({ variant = "primary", className = "", ...props }: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link {...props} className={buttonClass(variant, className)} />;
}

export function Button({ variant = "primary", className = "", ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button {...props} className={buttonClass(variant, className)} />;
}
