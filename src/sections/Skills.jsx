import { FlowingLogos } from "../components/ui/flowing-logo";

import { FontAwesomeIcon, faReact, faPython, faJs, faTailwindCss, faTypescript } from "../utils/icons";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden bg-white py-12 md:py-16 dark:bg-[#0a0a0a]">
      <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-tight text-zinc-900 sm:mb-8 md:text-4xl lg:text-5xl dark:text-white">
        tecnologias
      </h1>
      <FlowingLogos
        data={[
          { image: <FontAwesomeIcon icon={faReact} />, name: 'React' },
          { image: <FontAwesomeIcon icon={faPython} />, name: 'Python' },
          { image: <FontAwesomeIcon icon={faJs} />, name: 'JavaScript' },
          { image: <FontAwesomeIcon icon={faTailwindCss} />, name: 'Tailwind CSS' },
          { image: <FontAwesomeIcon icon={faTypescript} />, name: 'TypeScript' },
          ]}
      />
    </section>
  );
}
