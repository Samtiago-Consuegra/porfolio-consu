import AnimatedTitle from "../components/AboutMe/AnimatedTitle";

export default function AboutMe({
  title = "Sobre mi",
  description = "Soy Santiago Consuegra Bravo, ingeniero de sistemas enfocado en el desarrollo web. Me apasiona crear soluciones eficientes, escalables y con una buena experiencia de usuario, combinando desarrollo frontend y backend. Actualmente, estoy fortaleciendo mis habilidades en tecnologías como JavaScript, React y Python, mientras desarrollo proyectos que integran funcionalidades reales como APIs y autenticación segura. Me destaco por mi capacidad de aprendizaje rápido, pensamiento lógico y enfoque en la mejora continua. Busco formar parte de equipos donde pueda aportar valor, crecer profesionalmente y enfrentar nuevos retos.",
}) {
  return (
    <section id="about-me" className="relative w-full overflow-hidden py-24 dark:bg-[#0c0c0c]">
      <div className="mx-auto max-w-2xl px-6 flex flex-col items-center text-center gap-8">

        <AnimatedTitle title={title} />

        <p className="text-base text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

      </div>
    </section>
  );
}