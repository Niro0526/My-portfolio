import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  { title: 'Diploma in Web Development using HTML & CSS', provider: 'Alison' },
  { title: 'Web Development', provider: 'SoloLearn' },
  { title: 'Web Development', provider: 'Simplilearn' },
  { title: 'JavaScript for Beginners', provider: 'Alison' },
  { title: 'Web Development & Python', provider: 'UOM Open Source' },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section
      id="certifications"
      className="relative py-28 md:py-36 bg-bg-secondary/50"
    >
      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-eyebrow">CERTIFICATIONS</p>
          <h2 className="section-title">
            Continuous <span className="gradient-text">learning</span>
          </h2>
        </div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <div
              key={cert.title + cert.provider}
              className={`glass-card-hover p-5 reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-primary/10 border border-purple-primary/20 flex items-center justify-center shrink-0 mt-0.5">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    {cert.provider}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
