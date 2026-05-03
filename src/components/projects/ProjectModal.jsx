import { FontAwesomeIcon, faArrowRight, faXmark } from "../../utils/icons";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-50 flex max-h-[100dvh] items-end justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
            onClick={onClose}
        >
            <div
                className="relative mt-auto max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-white/10 bg-[#0a0a0a] p-4 text-white shadow-2xl sm:mt-0 sm:rounded-2xl sm:p-6"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-yellow-400"
                    aria-label="Cerrar"
                >
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>

                {/* Imagen */}
                <img
                    src={project.image}
                    alt=""
                    className="mb-4 mt-2 w-full rounded-xl object-cover sm:mt-0"
                />

                <h2 id="project-modal-title" className="pr-10 text-xl font-bold sm:text-2xl">
                    {project.title}
                </h2>
                <p className="mb-3 text-sm text-white/70 sm:text-base">{project.description}</p>

                <p className="mb-4 text-sm leading-relaxed sm:text-base">{project.details}</p>

                <h3 className="mb-2 font-semibold text-yellow-400">
                    CARACTERÍSTICAS
                </h3>

                <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    {project.features.map((f, i) => (
                        <li key={i} className="text-balance">• {f}</li>
                    ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="https://porfolio-consu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-yellow-400 px-4 py-2.5 text-center text-sm font-medium text-black transition hover:bg-white hover:text-black">
                        Ver Proyecto <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </a>
                    <a href="https://github.com/Samtiago-Consuegra/porfolio-consu" target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-center text-sm transition hover:bg-yellow-400 hover:text-black">
                        Repositorio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;