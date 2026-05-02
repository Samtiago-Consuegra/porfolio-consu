import { FlowingLogos } from "../components/ui/flowing-logo";

import { FontAwesomeIcon, faReact, faPython, faJs, faTailwindCss } from "../utils/icons";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden py-15 dark:bg-[#0a0a0a]">
      <h1 className="uppercase text-white text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-8">
        Skills
      </h1>
      <FlowingLogos
        data={[
          { image: <FontAwesomeIcon icon={faReact} />, name: 'React' },
          { image: <FontAwesomeIcon icon={faPython} />, name: 'Python' },
          { image: <FontAwesomeIcon icon={faJs} />, name: 'JavaScript' },
          { image: <FontAwesomeIcon icon={faTailwindCss} />, name: 'Tailwind CSS' },
          ]}
      />
    </section>
  );
}
