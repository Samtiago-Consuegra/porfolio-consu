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
        className="absolute inset-x-0 top-22 h-64 pointer-events-none"
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

      <div className="relative flex min-h-screen flex-col pt-20">
        <Navbar />

        <div className="flex min-h-screen">
          <div className="flex w-1/2 flex-col items-center justify-center px-6 py-12">
            
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
            <div className="flex flex-col items-center gap-1 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-7xl font-black text-center"
              >
                Santiago
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-7xl font-black text-center text-yellow-400"
              >
                Consuegra Bravo
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 max-w-md text-center text-sm text-zinc-500"
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
              className="mt-10 flex gap-4"
            >
              <a
              href="/HV-CONSU-ATS.pdf"
              download="HV-CONSU-ATS.pdf"
              className="flex items-center gap-2 border-2 border-yellow-200 bg-yellow-400 px-8 py-3 text-xs font-bold uppercase text-black cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Descargar CV
              <FontAwesomeIcon icon={faFileArrowDown} className="text-xl"/>
            </a>

              <div className="text-white text-4xl cursor-pointer flex items-center gap-2">
                <a href="https://www.linkedin.com/in/santiago-consu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareLinkedin} className="hover:text-yellow-400 transition-all duration-300 hover:-translate-y-0.5"/></a>
                <a href="https://github.com/Samtiago-Consuegra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} className="hover:text-yellow-400 transition-all duration-300 hover:-translate-y-0.5"/></a>
              </div>

            </motion.div>
          </div>

            <div className="relative w-1/2">
                <img
                  src={FotoConsu}
                  alt="Santiago-foto"
                  className="h-200 object-cover"
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