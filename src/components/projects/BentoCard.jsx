import clsx from "clsx";
import { FontAwesomeIcon, faReact, faPython, faJs, faTailwindCss, faArrowRight } from "../../utils/icons";

const iconMap = {
    React: faReact,
    JavaScript: faJs,
    Python: faPython,
    Tailwind: faTailwindCss,
};

const BentoCard = ({ project, onClick, className }) => {
    return (
        <div
            onClick={() => onClick(project)}
            className={clsx(
                "relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition-all duration-300",
                className
            )}
        >
            {/* Imagen */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-r from-black/85 via-black/55 to-transparent p-4 sm:p-6">
                <div className="min-w-0">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {project.title}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs text-white/70 sm:text-sm md:line-clamp-none">
                        {project.description}
                    </p>

                    {/* Stack */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-1.5 rounded-full bg-yellow-400/40 px-2 py-1 text-[10px] text-white sm:gap-2 sm:px-3 sm:text-xs"
                            >
                                <FontAwesomeIcon icon={iconMap[tech]} />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Botón */}
                <div className="flex justify-end pt-2">
                    <button type="button" className="cursor-pointer rounded-full bg-yellow-400 px-3 py-2 text-xs font-medium text-black transition hover:bg-yellow-300 sm:px-4 sm:text-sm">
                        Ver detalles <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-[0.65em] sm:ml-0 sm:text-base" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BentoCard;