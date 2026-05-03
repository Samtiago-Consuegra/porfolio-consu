import PorfolioImg from "../assets/Porfolio-img.png";
import ProximamenteImg from "../assets/Muy-Pronto.jpg";


export const projects = [
  {
    id: 1,
    title: "Porfolio Web",
    description: "Landing page personal con información sobre mi y mis proyectos.",
    image: PorfolioImg,
    stack: ["React", "JavaScript", "Tailwind", ],
    details:
      "Proyecto personal desarrollado con React, Tailwind, Framer Motion y Vite. utilizando la libreria de iconos FontAwesome y libreria de componentes de ScrollX UI, utilizando como IDE Cursor y publicado en Vercel.",
    features: [
      "Información sobre mi",
      "Mis proyectos",
      "Mis skills",
      "Mis contactos",
    ],
  },
  {
    id: 2,
    title: "Proximamente",
    description: "...",
    image: ProximamenteImg,
    stack: ["React", "JavaScript", "Tailwind", ],
    details: "...",
    features: ["..."],
  },
  {
    id: 3,
    title: "Proximamente",
    description: "...",
    image: ProximamenteImg,
    stack: ["React", "JavaScript", "Tailwind", ],
    details: "...",
    features: ["..."],
  },
];