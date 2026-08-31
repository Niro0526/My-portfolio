import profileImg from '../assets/images/niroja.jpg';
import { heroImg } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { label: 'Specialization', value: 'B.Sc. (Hons) IT' },
  { label: 'Core Projects', value: '4 Major Repos' },
  { label: 'Focus Area', value: 'Full-Stack Dev' },
  { label: 'Stack', value: 'React + Spring Boot' },
];

export default function Hero() {
  const ref = useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-dark/10 blur-[120px]" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full bg-purple-primary/5 blur-[80px] animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-[200px] h-[200px] rounded-full bg-purple-glow/5 blur-[60px] animate-float-slow" />

      <div ref={ref} className="section-container relative z-10">
        {/* Top status bar */}
        <div className="flex flex-wrap items-center gap-4 mb-10 reveal">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-xs font-medium tracking-wider text-text-secondary uppercase">
              Open to Software Engineering Internships
            </span>
          </div>
          <span className="text-text-muted text-xs">•</span>
          <span className="text-xs text-text-secondary">Jaffna, Sri Lanka</span>
          <span className="text-text-muted text-xs">•</span>
          <span className="text-xs text-text-secondary">University of Moratuwa</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          {/* Left: Main Content (3 cols) */}
          <div className="lg:col-span-3 reveal">
            <p className="section-eyebrow reveal reveal-delay-1">
              SOFTWARE ENGINEERING UNDERGRADUATE
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 reveal reveal-delay-2">
              Hi, I'm <span className="gradient-text">Niroja</span>
              <br />
              <span className="gradient-text">Vijayakumar</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 reveal reveal-delay-2">
              <span className="text-purple-glow text-lg font-medium">&gt;</span>
              <span className="text-text-secondary text-lg font-medium">
                Software Engineer &amp; Full-Stack Developer
              </span>
            </div>

            <p className="text-text-secondary text-base max-w-xl leading-relaxed mb-6 reveal reveal-delay-3">
              Software Engineering undergraduate at the University of Moratuwa focused on
              full-stack development, backend systems, databases, real-time applications
              and practical software solutions. Building intelligent, scalable and
              real-world digital products.
            </p>

            {/* Key highlight badge */}
            <div className="glass-card inline-flex items-center gap-3 px-4 py-2.5 mb-8 reveal reveal-delay-3">
              <span className="w-2 h-2 rounded-full bg-purple-primary animate-pulse" />
              <span className="text-sm text-text-primary font-medium">
                CodeRally 7.0 — Selected for Finalist
              </span>
              <span className="text-xs text-text-muted px-2 py-0.5 rounded-full border border-border-glass">
                2026
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8 reveal reveal-delay-4">
              <button onClick={() => scrollTo('about')} className="btn-secondary">
                About Niroja
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                SE Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Profile Card Sidebar (2 cols) */}
          <div className="lg:col-span-2 reveal reveal-delay-2">
            <div className="glass-card overflow-hidden">
              {/* Profile header */}
              <div className="relative">
                {/* BG visual */}
                <div className="h-24 overflow-hidden relative">
                  <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-card" />
                </div>
                {/* Avatar */}
                <div className="absolute -bottom-10 left-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-primary/30 glow-purple">
                    <img src={profileImg} alt="Niroja Vijayakumar" className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Status badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-purple-primary/20 text-purple-glow border border-purple-primary/30">
                    Researcher Profile
                  </span>
                  <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                    Available for SE Roles
                  </span>
                </div>
              </div>

              {/* Profile body */}
              <div className="pt-14 px-6 pb-5">
                <h3 className="text-base font-bold text-text-primary">Niroja Vijayakumar</h3>
                <p className="text-xs text-text-secondary mt-0.5">
                  B.Sc. (Hons) in Information Technology
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  University of Moratuwa, Sri Lanka (2023–Present)
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-xs">
                    <span className="text-text-muted">Primary Focus:</span>
                    <span className="text-text-primary font-medium ml-1">Full-Stack Dev</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-text-muted">Achievement:</span>
                    <span className="text-text-primary font-medium ml-1">CodeRally 7.0</span>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 border-t border-border-glass">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-5 py-3.5 ${i % 2 === 0 ? 'border-r border-border-glass' : ''} ${i < 2 ? 'border-b border-border-glass' : ''}`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-purple-primary font-semibold mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs font-medium text-text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 px-6 py-4 border-t border-border-glass">
                <a href="https://github.com/niroja-vijayakumar" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all text-xs"
                  aria-label="GitHub">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/niroja-vijayakumar" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all text-xs"
                  aria-label="LinkedIn">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="mailto:niroja0226@gmail.com"
                  className="w-8 h-8 rounded-lg border border-border-glass flex items-center justify-center text-text-secondary hover:text-purple-glow hover:border-purple-primary/40 transition-all text-xs"
                  aria-label="Email">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
