"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./logo";
import { ButtonLink } from "./ui/button";
import { site } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Aller au contenu
      </a>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="Clario — accueil" className="rounded-md">
          <Wordmark className="h-6 w-auto" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {site.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname.startsWith(l.href) ? "page" : undefined}
              className="rounded-full px-3.5 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/reservation" className="hidden h-10 sm:inline-flex">Prendre rendez-vous</ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-bg-alt md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-bg md:hidden">
          <nav aria-label="Navigation mobile" className="container-x flex flex-col py-6">
            {site.nav.map((l) => (
              <Link key={l.href} href={l.href} className="border-b border-line py-4 text-xl font-medium tracking-tight">
                {l.label}
              </Link>
            ))}
            <ButtonLink href="/reservation" className="mt-8 h-12">Prendre rendez-vous</ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
