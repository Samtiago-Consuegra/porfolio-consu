import AnimatedTitle from "../components/AboutMe/AnimatedTitle";

export default function AboutMe({
  title = "Sobre mi",
  description = "Soy Santiago Consuegra Bravo, ingeniero de sistemas enfocado en el desarrollo web. Me apasiona crear soluciones eficientes, escalables y con una buena experiencia de usuario, combinando desarrollo frontend y backend. Actualmente, estoy fortaleciendo mis habilidades en tecnologías como JavaScript, React y Python, mientras desarrollo proyectos que integran funcionalidades reales como APIs y autenticación segura. Me destaco por mi capacidad de aprendizaje rápido, pensamiento lógico y enfoque en la mejora continua. Busco formar parte de equipos donde pueda aportar valor, crecer profesionalmente y enfrentar nuevos retos.",
}) {
  return (
    <section id="about-me" className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 dark:bg-[#0c0c0c]">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center sm:gap-8 sm:px-6 md:max-w-3xl">

        <AnimatedTitle title={title} />

        <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {description}
        </p>

      </div>
    </section>
  );
}