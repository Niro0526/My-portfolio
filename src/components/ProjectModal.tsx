import { useEffect } from 'react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Image */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110d1b] via-[#110d1b]/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold text-purple-glow tracking-widest">
              PROJECT {project.number}
            </span>
            <h2 className="text-3xl font-bold text-text-primary mt-1">
              {project.title}
            </h2>
            <p className="text-sm text-purple-glow font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-purple-primary uppercase mb-3">
              Overview
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-purple-primary uppercase mb-3">
              Role
            </h3>
            <p className="text-text-primary font-medium">{project.role}</p>
          </div>

          {/* Contributions */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-purple-primary uppercase mb-3">
              Key Contributions
            </h3>
            <ul className="space-y-3">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="text-purple-primary mt-0.5 shrink-0">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-purple-primary uppercase mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-border-glass">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-sm"
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
