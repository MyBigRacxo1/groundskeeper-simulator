type Props = { variant?: "light" | "dark"; className?: string; title?: string };

/** Symbole : un « c » ouvert dont le point trouve sa place — la démarche qui se clarifie. */
export function LogoSymbol({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="13" fill="#397C69" />
      <path d="M31.7 17.6A10 10 0 1 0 31.7 30.4" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <circle cx="35.5" cy="24" r="2.8" fill="#E4F0EA" />
    </svg>
  );
}

/** Wordmark « clario. » dessiné en traits (aucune dépendance à une police). */
export function Wordmark({ variant = "light", className = "h-6", title = "Clario" }: Props) {
  const ink = variant === "light" ? "#172320" : "#FAFAF8";
  const dot = variant === "light" ? "#397C69" : "#7FC4AC";
  return (
    <svg viewBox="-2 0 168 46" className={className} role="img" aria-label={title}>
      <g fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.5 19.5A12 12 0 1 0 22.5 36.5" />
        <path d="M38 4V40" />
        <circle cx="62" cy="28" r="12" />
        <path d="M74 16V40" />
        <path d="M90 16V40M90 33C90 22 95 16 104 16" />
        <path d="M116 16V40" />
        <circle cx="140" cy="28" r="12" />
      </g>
      <circle cx="116" cy="5" r="2.9" fill={dot} />
      <circle cx="159" cy="38" r="2.9" fill={dot} />
    </svg>
  );
}
