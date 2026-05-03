import { useState } from "react";
import BentoCard from "../components/projects/BentoCard";
import ProjectModal from "../components/projects/ProjectModal";
import { projects } from "../data/projects";

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="bg-[#0c0c0c] px-4 py-14 text-white sm:px-6 sm:py-16 md:py-20">
            {/* Header */}
            <div className="mx-auto mb-8 max-w-7xl text-center sm:mb-10">
                <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-tight text-white sm:mb-14 md:mb-20 md:text-4xl lg:text-5xl">
                    Proyectos
                </h2>
            </div>

            {/* Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-6 md:auto-rows-[minmax(200px,240px)] md:grid-cols-2">

                {/* Grande izquierda */}
                <div className="md:row-span-2">
                    <BentoCard
                        project={projects[0]}
                        onClick={setSelected}
                        className="min-h-[220px] h-[240px] md:h-full md:min-h-0"
                    />
                </div>

                {/* Derecha */}
                <BentoCard
                    project={projects[1]}
                    onClick={setSelected}
                    className="min-h-[220px] h-[240px] md:h-full md:min-h-0"
                />

                <BentoCard
                    project={projects[2]}
                    onClick={setSelected}
                    className="min-h-[220px] h-[240px] md:h-full md:min-h-0"
                />
            </div>

            {/* Modal */}
            <ProjectModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
};

export default Projects;