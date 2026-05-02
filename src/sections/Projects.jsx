import { useState } from "react";
import BentoCard from "../components/projects/BentoCard";
import ProjectModal from "../components/projects/ProjectModal";
import { projects } from "../data/projects";

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="bg-[#0c0c0c] text-white py-20 px-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 text-center">
                <h2 className="uppercase text-white text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-20">
                    Proyectos
                </h2>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 md:auto-rows-[240px] gap-6 max-w-7xl mx-auto">

                {/* Grande izquierda */}
                <div className="md:row-span-2">
                    <BentoCard
                        project={projects[0]}
                        onClick={setSelected}
                        className="h-[240px] md:h-full"
                    />
                </div>

                {/* Derecha */}
                <BentoCard
                    project={projects[1]}
                    onClick={setSelected}
                    className="h-[240px] md:h-full"
                />

                <BentoCard
                    project={projects[2]}
                    onClick={setSelected}
                    className="h-[240px] md:h-full"
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