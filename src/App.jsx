import ParticleBackground from "./components/ParticleBackground";
import Navbar             from "./components/Navbar";
import Home               from "./sections/Home";
import About              from "./sections/About";
import Skills             from "./sections/Skills";
import Projects           from "./sections/Projects";
import Experience         from "./sections/Experience";
import Contact            from "./sections/Contact";
import Footer             from "./sections/Footer";

export default function App() {
  return (
    <div
      className="relative text-white"
      style={{ background: "var(--bg-primary)", minHeight: "100vh" }}
    >
      {/* Global particle background — behind everything */}
      <ParticleBackground />

      {/* Page chrome */}
      <Navbar />

      {/* Sections */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
