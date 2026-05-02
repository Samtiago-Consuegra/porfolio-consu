import { FontAwesomeIcon, faArrowRight, faXmark } from "../../utils/icons";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#0a0a0a] text-white max-w-3xl w-full rounded-2xl p-6 relative border border-white/10">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/ hover:text-yellow-400 cursor-pointer"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {/* Imagen */}
                <img
                    src={project.image}
                    className="rounded-xl mb-4"
                />

                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-white/70 mb-4">{project.description}</p>

                <p className="mb-4">{project.details}</p>

                <h3 className="text-yellow-400 font-semibold mb-2">
                    CARACTERÍSTICAS
                </h3>

                <ul className="grid grid-cols-2 gap-2 text-sm">
                    {project.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                    ))}
                </ul>

                <div className="flex gap-3 mt-6">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition">
                        Ver Proyecto <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="border border-white/20 px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-400 hover:text-black transition">
                        Repositorio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;