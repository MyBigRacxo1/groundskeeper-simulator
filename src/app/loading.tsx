export default function Loading() {
  return (
    <div className="container-x grid min-h-[50vh] place-items-center" role="status" aria-live="polite">
      <span className="size-6 animate-spin rounded-full border-2 border-line border-t-accent" />
      <span className="sr-only">Chargement…</span>
    </div>
  );
}
