import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

// ⚠️ estos debes crearlos o reemplazarlos
import PixelBackground from "../components/ui/PixelBackground";
import FotoConsu from "../assets/Santiago-manga-corta-transparente.png"

import { FontAwesomeIcon, faFileArrowDown, faSquareLinkedin, faSquareGithub } from "../utils/icons";


export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden">
      
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-16 h-48 sm:h-56 md:top-16 md:h-64"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      >
        <PixelBackground
          gap={6}
          speed={60}
          colors="#1a1a1a,#2a2a2a,#333333,#111111,#d4d4d4,#e5e5e5,#c4c4c4,#bababa"
          opacity={1}
          direction="top"
          className="w-full h-full absolute inset-0"
        />
      </div>

      <div className="relative flex min-h-screen flex-col pt-16 md:pt-20">
        <Navbar />

        <div className="flex min-h-[calc(100dvh-4rem)] w-full flex-col md:min-h-[calc(100dvh-5rem)] md:flex-row">
          <div className="flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:w-1/2 md:px-6 md:py-12">
            
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-2"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Desarrollador web
              </span>
            </motion.div>

            {/* Title */}
            <div className="flex flex-col items-center gap-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-4xl font-black text-zinc-900 sm:text-5xl md:text-6xl xl:text-7xl dark:text-white"
              >
                Santiago
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center text-4xl font-black text-yellow-500 sm:text-5xl md:text-6xl xl:text-7xl dark:text-yellow-400"
              >
                Consuegra Bravo
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-md px-1 text-center text-sm leading-relaxed text-zinc-600 sm:mt-10 sm:text-base dark:text-zinc-400"
            >
              Ingeniero de Sistemas y Computación con experiencia en soporte técnico,
              automatización de procesos y desarrollo de software. Certificado como Scrum Master
              Profesional.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex w-full max-w-md flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center"
            >
              <a
              href="/HV-CONSU-ATS-2.pdf"
              download="HV-CONSU-ATS.pdf"
              className="flex w-full min-h-11 items-center justify-center gap-2 border-2 border-yellow-200 bg-yellow-400 px-6 py-3 text-xs font-bold uppercase text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black sm:w-auto sm:px-8"
            >
              Descargar CV
              <FontAwesomeIcon icon={faFileArrowDown} className="text-xl"/>
            </a>

              <div className="flex items-center justify-center gap-4 text-3xl text-zinc-800 sm:text-4xl dark:text-white">
                <a href="https://www.linkedin.com/in/santiago-consu" target="_blank" rel="noopener noreferrer" className="min-h-11 min-w-11 flex items-center justify-center" aria-label="LinkedIn"><FontAwesomeIcon icon={faSquareLinkedin} className="transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-500 dark:hover:text-yellow-400"/></a>
                <a href="https://github.com/Samtiago-Consuegra" target="_blank" rel="noopener noreferrer" className="min-h-11 min-w-11 flex items-center justify-center" aria-label="GitHub"><FontAwesomeIcon icon={faSquareGithub} className="transition-all duration-300 hover:-translate-y-0.5 hover:text-yellow-500 dark:hover:text-yellow-400"/></a>
              </div>

            </motion.div>
          </div>

            <div className="relative flex w-full min-h-[260px] items-end justify-center sm:min-h-[300px] md:min-h-[calc(100dvh-5rem)] md:w-1/2 md:items-stretch md:justify-end">
                <img
                  src={FotoConsu}
                  alt="Santiago-foto"
                  className="h-auto max-h-[38vh] w-full max-w-md object-contain object-bottom sm:max-h-[42vh] md:max-h-[50vh] md:absolute md:inset-0 md:max-h-none md:max-w-none md:h-full md:w-full md:object-cover md:object-[center_top]"
                  style={{
                    maskImage: "linear-gradient(to top, transparent 5%, black 20%)",
                    WebkitMaskImage: "linear-gradient(to top, transparent 5%, black 20%)",
                  }}
                />
            </div>
        </div>
      </div>
    </section>
  );
}