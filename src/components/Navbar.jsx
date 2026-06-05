import { useState } from "react";
import logoConsu from "../assets/Consu-logo.png";
import { FontAwesomeIcon, faBars, faXmark } from "../utils/icons";

const navLinks = [
  { href: "#about-me", label: "Sobre mi" },
  { href: "#skills", label: "Tecnologias" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contactos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#0a0a0a]/90">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex shrink-0 items-center gap-2">
          <div className="size-14 sm:size-16 md:size-20">
            <a href="#hero" className="block" onClick={() => setOpen(false)}>
              <img src={logoConsu} alt="Logo Consu" className="h-full w-full object-contain" />
            </a>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex md:gap-2 lg:gap-3">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 dark:bg-white dark:text-black dark:hover:bg-yellow-400 lg:px-4 lg:text-sm"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-zinc-300 text-zinc-900 md:hidden dark:border-zinc-600 dark:text-white"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-xl" />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-zinc-200/80 bg-white/95 dark:border-zinc-800/80 dark:bg-[#0a0a0a]/95 md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-yellow-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-yellow-400"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}