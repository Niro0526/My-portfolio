import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTilt3D } from '../hooks/useTilt3D';
import { useMouseGlow } from '../hooks/useMouseGlow';

const cards = [
  { num: '01', title: 'FULL-STACK DEVELOPMENT' },
  { num: '02', title: 'BACKEND & DATABASES' },
  { num: '03', title: 'REAL-WORLD PROBLEM SOLVING' },
];

function TiltCard({ num, title, delay }: { num: string; title: string; delay: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(10, 1.03);
  const glow = useMouseGlow();

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (glow.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      onMouseMove={(e) => { handleMouseMove(e); glow.handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
      className={`glass-card-hover tilt-3d mouse-glow p-8 reveal reveal-delay-${delay}`}
    >
      <span className="text-4xl font-extrabold gradient-text-subtle block mb-4 relative z-10">
        {num}
      </span>
      <h3 className="text-sm font-semibold tracking-wider text-text-primary relative z-10">
        {title}
      </h3>
    </div>
  );
}

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-28 md:py-36">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-purple-dark/5 blur-[100px] -translate-y-1/2" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 reveal">
          <p className="section-eyebrow">ABOUT</p>
          <h2 className="section-title">
            Engineering with <span className="gradient-text">purpose.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-6 reveal reveal-delay-1">
            I am a Software Engineering undergraduate at the University of
            Moratuwa with hands-on experience developing full-stack web
            applications and software systems.
          </p>
          <p className="text-text-secondary text-base leading-relaxed reveal reveal-delay-2">
            I enjoy working across frontend and backend development, designing
            databases, implementing authentication and role-based access,
            building REST APIs, integrating real-time communication, debugging
            application flows, and turning practical requirements into
            maintainable software.
          </p>
        </div>

        {/* Cards with 3D tilt */}
        <div className="grid sm:grid-cols-3 gap-6 perspective-container">
          {cards.map((card, i) => (
            <TiltCard key={card.num} num={card.num} title={card.title} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
