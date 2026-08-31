import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';

export default function Projects() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-28 md:py-36">
        {/* Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-dark/5 blur-[120px]" />

        <div ref={ref} className="section-container relative z-10">
          {/* Header */}
          <div className="mb-16 reveal">
            <p className="section-eyebrow">FEATURED WORK</p>
            <h2 className="section-title">
              Selected <span className="gradient-text">projects</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Real applications, practical systems, and engineering experiments.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
