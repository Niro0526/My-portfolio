import { useScrollReveal } from '../hooks/useScrollReveal';

const achievements = [
  {
    title: 'CodeRally 7.0',
    badge: 'Selected for Finalist',
    year: '2026',
    icon: '🏆',
  },
  {
    title: 'HackElite 2.0',
    badge: 'Participant',
    year: '2025',
    icon: '⚡',
  },
  {
    title: 'CodeRush 2024',
    badge: 'Participant',
    year: '2024',
    icon: '🚀',
  },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section
      id="achievements"
      className="relative py-28 md:py-36 bg-bg-secondary/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-primary/5 blur-[120px]" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-eyebrow">COMPETITIONS</p>
          <h2 className="section-title">
            Beyond the <span className="gradient-text">classroom</span>
          </h2>
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className={`glass-card-hover p-8 text-center reveal reveal-delay-${i + 1}`}
            >
              <div className="text-3xl mb-4">{a.icon}</div>
              <h3 className="text-base font-bold text-text-primary mb-2">
                {a.title}
              </h3>
              <p className="text-sm text-purple-glow font-medium mb-3">
                {a.badge}
              </p>
              <span className="text-xs text-text-muted">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
