import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";

function App() {

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
