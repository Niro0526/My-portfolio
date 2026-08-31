import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EngineeringProcess from './components/EngineeringProcess';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <ParticleField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringProcess />
        <Education />
        <Achievements />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
