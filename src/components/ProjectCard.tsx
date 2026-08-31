import { useRef, useCallback } from 'react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty('--glow-x', `${x}px`);
    el.style.setProperty('--glow-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card mouse-glow tilt-3d group ${project.featured ? 'sm:col-span-2' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="project-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 glass-card px-3 py-1 text-xs font-bold text-purple-glow animate-glow-ring">
          {project.number}
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-border-glass flex items-center justify-center project-arrow bg-bg-primary/50 backdrop-blur-sm">
          <svg className="w-4 h-4 text-purple-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-lg font-bold text-text-primary mb-1 tracking-wide">
          {project.title}
        </h3>
        <p className="text-sm text-purple-glow mb-3 font-medium">
          {project.subtitle}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-tag">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-purple-glow transition-colors"
            onClick={(e) => e.stopPropagation()}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-purple-glow transition-colors"
              onClick={(e) => e.stopPropagation()}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
