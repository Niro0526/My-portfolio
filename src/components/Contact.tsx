import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      {/* 3D Background orb with rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-orb-container w-[500px] h-[500px]">
        <div className="absolute inset-0 rounded-full bg-purple-primary/8 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-0 rounded-full bg-purple-glow/10 blur-[80px]" style={{ width: '60%', height: '60%', top: '20%', left: '20%' }} />
        {/* Rotating rings */}
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-glow/20 animate-float-3d pointer-events-none"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${7 + i * 2}s`,
          }}
        />
      ))}

      <div ref={ref} className="section-container relative z-10 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <p className="section-eyebrow reveal reveal-delay-1">LET'S CONNECT</p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 reveal reveal-delay-2">
            Let's build something
            <br />
            <span className="gradient-text italic">worth building.</span>
          </h2>

          <p className="text-text-secondary text-lg mb-10 reveal reveal-delay-3">
            Looking for a Software Engineering internship where I can learn,
            contribute and build real-world software.
          </p>

          {/* CTA */}
          <div className="mb-12 reveal reveal-delay-4">
            <a href="mailto:niroja0226@gmail.com" className="btn-primary text-base px-10 py-4 group">
              GET IN TOUCH
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-10 reveal reveal-delay-4">
            <a href="https://linkedin.com/in/niroja-vijayakumar" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://github.com/niroja-vijayakumar" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              aria-label="GitHub">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:niroja0226@gmail.com"
              className="w-11 h-11 rounded-full border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              aria-label="Email">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary reveal reveal-delay-5">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +94 76 023 7639
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              niroja0226@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jaffna, Sri Lanka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
