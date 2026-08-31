import { useScrollReveal } from '../hooks/useScrollReveal';

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Software Engineering',
  'Computer Networks',
  'Computer Graphics',
  'Web Development',
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-dark/5 blur-[100px] -translate-y-1/2" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-eyebrow">EDUCATION</p>
          <h2 className="section-title">
            Academic <span className="gradient-text">foundation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* University */}
          <div className="glass-card-hover p-8 reveal reveal-delay-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  UNIVERSITY OF MORATUWA
                </h3>
                <p className="text-sm text-purple-glow font-medium">
                  Faculty of Information Technology
                </p>
              </div>
              <span className="text-xs font-medium text-text-muted bg-bg-primary/50 px-3 py-1 rounded-full border border-border-glass">
                2023 – Present
              </span>
            </div>

            <p className="text-text-primary font-medium mb-1">
              BSc (Hons) in Information Technology
            </p>
            <p className="text-sm text-text-secondary mb-6">Sri Lanka</p>

            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-purple-primary uppercase mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span key={course} className="tech-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* School */}
          <div className="glass-card-hover p-8 reveal reveal-delay-2 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-lg font-bold text-text-primary">
                  J/VEMBADI GIRLS' HIGH COLLEGE
                </h3>
                <span className="text-xs font-medium text-text-muted bg-bg-primary/50 px-3 py-1 rounded-full border border-border-glass shrink-0 ml-4">
                  2022
                </span>
              </div>
              <p className="text-text-primary font-medium">
                G.C.E. Advanced Level — Physical Science
              </p>
            </div>

            {/* Decorative */}
            <div className="mt-8 pt-6 border-t border-border-glass">
              <div className="flex items-center gap-2 text-text-muted text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jaffna, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
