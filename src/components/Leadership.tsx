import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = [
  {
    title: 'Career Fair Coordinator',
    org: 'FIT Moments — University of Moratuwa',
    year: '2026',
  },
  {
    title: 'Marketing Pillar Team Member',
    org: 'FIT Moments',
    year: '2025',
  },
  {
    title: 'Design Committee Member',
    org: 'IEEE FUTURE 4.0',
    year: '2026',
  },
  {
    title: 'Financial Volunteer',
    org: 'IEEE',
    year: '2025',
  },
];

export default function Leadership() {
  const ref = useScrollReveal();

  return (
    <section id="leadership" className="relative py-28 md:py-36">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-dark/5 blur-[100px]" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-eyebrow">INVOLVEMENT</p>
          <h2 className="section-title">
            Leadership &{' '}
            <span className="gradient-text">involvement</span>
          </h2>
        </div>

        {/* Timeline cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <div
              key={role.title + role.year}
              className={`glass-card-hover p-6 flex items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full border border-purple-primary/30 flex items-center justify-center shrink-0 bg-purple-primary/5">
                <svg
                  className="w-4 h-4 text-purple-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-text-primary">
                    {role.title}
                  </h3>
                  <span className="text-xs text-text-muted ml-3 shrink-0">
                    {role.year}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-1">{role.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
