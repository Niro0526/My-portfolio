import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'UNDERSTAND', desc: 'Understand the problem, requirements and users.' },
  { num: '02', title: 'DESIGN', desc: 'Plan architecture, database structure and application flow.' },
  { num: '03', title: 'BUILD', desc: 'Develop frontend, backend APIs and core functionality.' },
  { num: '04', title: 'INTEGRATE', desc: 'Connect databases, APIs, authentication and external services.' },
  { num: '05', title: 'TEST & REFINE', desc: 'Debug, validate, improve and deploy.' },
];

export default function EngineeringProcess() {
  const ref = useScrollReveal();

  return (
    <section id="process" className="relative py-28 md:py-36 bg-bg-secondary/50">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-primary/5 blur-[100px]" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-eyebrow">MY PROCESS</p>
          <h2 className="section-title">
            From problem to <span className="gradient-text">product.</span>
          </h2>
        </div>

        {/* Timeline — Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between relative reveal reveal-delay-1">
          {/* Connecting line with animated shimmer */}
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-primary/30 to-transparent" />
          <div className="absolute top-6 left-[10%] right-[10%] h-px animate-shimmer" />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center max-w-[180px] relative z-10 group">
              {/* 3D Node */}
              <div className="w-14 h-14 rounded-full border-2 border-purple-primary/40 flex items-center justify-center mb-5 bg-bg-primary relative
                transition-all duration-500 group-hover:border-purple-primary group-hover:scale-110"
                style={{ transformStyle: 'preserve-3d' }}>
                <span className="text-sm font-bold gradient-text">{step.num}</span>
                {/* Glow ring on hover */}
                <div className="absolute inset-[-4px] rounded-full border border-purple-glow/0 group-hover:border-purple-glow/30 transition-all duration-500
                  group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
                {/* Orbiting dot */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
                </div>
              </div>

              <h3 className="text-sm font-bold text-text-primary tracking-wider mb-2 group-hover:text-purple-glow transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline — Mobile vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={step.num} className={`flex gap-5 reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-purple-primary/40 flex items-center justify-center bg-bg-primary shrink-0">
                  <span className="text-xs font-bold gradient-text">{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-purple-primary/30 to-transparent mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-sm font-bold text-text-primary tracking-wider mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
