import logoConsu from "../assets/Consu-logo.png"

export default function Navbar() {
    return (
      <nav className="fixed left-0 top-0 z-50 flex h-22 w-full items-center justify-around border-b border-zinc-200/80 bg-white/80 px-6 backdrop-blur dark:border-zinc-800/80 dark:bg-[#0a0a0a]/10">
        <div className="flex items-center gap-2">
          <div className="size-20">
            <a href="#hero"><img src={logoConsu} alt="LogoConsu"/></a>
          </div>
        </div>
  
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            <a href="#about-me">Sobre mi</a>
          </button>

          <button
            type="button"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            <a href="#skills">Skills</a>
          </button>
          
          <button
            type="button"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            <a href="#projects">Proyectos</a>
          </button>
          
          <button
            type="button"
            className="rounded-lg bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            <a href="#contact">Contactos</a>
          </button>
        </div>

      </nav>
    );
  }