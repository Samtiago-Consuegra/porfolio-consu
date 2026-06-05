import { BriefcaseBusiness } from "lucide-react";
import ExperienceCard from "../components/experience/ExperienceCard";
import { experiences } from "../data/experience";

export default function WorkExperience() {
    return (
        <section id="experience" className="relative w-full overflow-hidden bg-white py-12 md:py-16 dark:bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mx-auto mb-8 max-w-7xl text-center sm:mb-10">
                    <h1 className="mb-6 text-center text-3xl font-bold uppercase tracking-tight text-zinc-900 sm:mb-8 md:text-4xl lg:text-5xl dark:text-white">
                    Experiencia
                    </h1>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Línea vertical */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

                    <div className="flex flex-col gap-10">
                        {experiences.map((exp, i) => (
                            <div key={i} className="flex gap-8 items-start">
                                {/* Dot */}
                                <div className="relative z-10 mt-2 flex-shrink-0 w-8 h-8 rounded-full border-2 bg-neutral-950 flex items-center justify-center"
                                    style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                </div>

                                <ExperienceCard {...exp} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}