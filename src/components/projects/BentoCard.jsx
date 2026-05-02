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
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        {project.title}
                    </h3>

                    <p className="text-sm text-white/70 mt-1">
                        {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {project.stack.map((tech, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-2 px-3 py-1 bg-yellow-400/40 rounded-full text-xs text-white"
                            >
                                <FontAwesomeIcon icon={iconMap[tech]} />
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Botón */}
                <div className="flex justify-end">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition cursor-pointer">
                        Ver detalles <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BentoCard;