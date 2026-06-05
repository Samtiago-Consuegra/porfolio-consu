import { useState } from "react";

export default function ExperienceCard({ role, company, period, description, stack }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                transform: hovered ? "scale(1.02)" : "scale(1)",
                boxShadow: hovered
                    ? "0 8px 40px rgba(250, 204, 21, 0.15)"
                    : "0 0px 0px rgba(0,0,0,0)",
                borderColor: hovered ? "rgba(250, 204, 21, 0.35)" : "rgba(255,255,255,0.1)",
                backgroundColor: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
                transition: "all 0.3s ease",
            }}
            className="flex-1 border rounded-2xl px-7 py-6 cursor-default"
        >
            {/* Role + Period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <h3 className="text-white font-semibold text-lg leading-snug">{role}</h3>
                <span className="text-yellow-400 text-sm font-medium whitespace-nowrap mt-0.5">
                    {period}
                </span>
            </div>

            {/* Company */}
            <p className="text-white/40 text-xs font-medium mb-4 tracking-widest uppercase">
                {company}
            </p>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-5">{description}</p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium border text-white/70"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.06)",
                            borderColor: hovered
                                ? "rgba(250,204,21,0.25)"
                                : "rgba(255,255,255,0.1)",
                            color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.7)",
                            transition: "all 0.3s ease",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}