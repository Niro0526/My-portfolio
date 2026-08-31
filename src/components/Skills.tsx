import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTilt3D } from '../hooks/useTilt3D';
import { useMouseGlow } from '../hooks/useMouseGlow';
import { skillCategories } from '../data/skills';

interface SkillBarProps {
  name: string;
  level: number;
  tag?: string;
}

function SkillBar({ name, level, tag }: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-primary">{name}</span>
          {tag && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-purple-primary/15 text-purple-glow border border-purple-primary/20">
              {tag}
            </span>
          )}
        </div>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bg-primary/80 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-primary to-purple-glow transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
      </div>
  );
}

// Map skill categories to tabs with proficiency levels
const skillTabs = [
  {
    id: 'programming',
    label: 'Programming Languages',
    count: 6,
    description: 'Core programming languages for software engineering',
    subtitle: 'University of Moratuwa SE Stack',
    skills: [
      { name: 'Java', level: 90, tag: 'Core' },
      { name: 'JavaScript', level: 88, tag: 'Core' },
      { name: 'TypeScript', level: 82, tag: 'Core' },
      { name: 'SQL', level: 85 },
      { name: 'C / C++', level: 75 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    count: 5,
    description: 'Modern frontend frameworks, styling, and build tools',
    subtitle: 'React & Modern Web Stack',
    skills: [
      { name: 'React', level: 88, tag: 'Core' },
      { name: 'HTML5 & CSS3', level: 92, tag: 'Core' },
      { name: 'Tailwind CSS', level: 85, tag: 'Core' },
      { name: 'Vite', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    count: 7,
    description: 'Server-side frameworks, REST APIs, and database systems',
    subtitle: 'Spring Boot & Node.js Stack',
    skills: [
      { name: 'Spring Boot', level: 85, tag: 'Core' },
      { name: 'Node.js & Express.js', level: 82, tag: 'Core' },
      { name: 'REST API Design', level: 88, tag: 'Core' },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'Supabase', level: 80 },
    ],
  },
  {
    id: 'engineering',
    label: 'Software Engineering',
    count: 8,
    description: 'SE principles, patterns, and real-time systems',
    subtitle: 'Principles & Real-Time',
    skills: [
      { name: 'OOP / OOAD / SDLC', level: 88, tag: 'Core' },
      { name: 'Database Design & CRUD', level: 85, tag: 'Core' },
      { name: 'Authentication & RBAC', level: 82 },
      { name: 'WebSocket / STOMP.js', level: 80 },
      { name: 'API Integration', level: 85 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    count: 6,
    description: 'DevOps, version control, and deployment tools',
    subtitle: 'DevOps & Deployment',
    skills: [
      { name: 'Git & GitHub', level: 90, tag: 'Core' },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel', level: 82 },
    ],
  },
];

function TabCard({ tab }: { tab: typeof skillTabs[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(6, 1.01);
  const glow = useMouseGlow();

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (glow.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      onMouseMove={(e) => { handleMouseMove(e); glow.handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
      className="glass-card tilt-3d mouse-glow p-6"
    >
      <div className="flex items-center justify-between mb-1 relative z-10">
        <h4 className="text-xs font-semibold tracking-[0.1em] text-purple-primary uppercase">
          {tab.label}
        </h4>
      </div>
      <p className="text-[11px] text-text-muted mb-5 relative z-10">{tab.subtitle}</p>

      <div className="relative z-10">
        {tab.skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} tag={skill.tag} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-bg-secondary/50">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-primary/5 blur-[120px]" />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-4 reveal">
          <p className="section-eyebrow">TECHNICAL CAPABILITIES</p>
          <h2 className="section-title">
            Skills & Engineering <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            Specialized in React, Spring Boot, PostgreSQL & Full-Stack Web Development
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal reveal-delay-1">
          {skillTabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                activeTab === i
                  ? 'bg-purple-primary/20 border-purple-primary/40 text-purple-glow shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'border-border-glass text-text-secondary hover:border-purple-primary/30 hover:text-text-primary'
              }`}
            >
              {tab.label}
              <span className="ml-1.5 text-[10px] text-text-muted">{tab.count} core proficiencies</span>
            </button>
          ))}
        </div>

        {/* Active tab detail + all tabs grid */}
        <div className="grid lg:grid-cols-3 gap-6 reveal reveal-delay-2">
          {/* Featured active tab (large) */}
          <div className="lg:col-span-2 glass-card p-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-text-primary">{skillTabs[activeTab].label}</h3>
            </div>
            <p className="text-sm text-text-secondary mb-6">{skillTabs[activeTab].description}</p>
            <p className="text-[11px] text-text-muted uppercase tracking-wider mb-4 font-semibold">
              {skillTabs[activeTab].subtitle}
            </p>

            {skillTabs[activeTab].skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} tag={skill.tag} />
            ))}
          </div>

          {/* Quick view of other tabs */}
          <div className="space-y-4">
            {skillTabs
              .filter((_, i) => i !== activeTab)
              .slice(0, 2)
              .map((tab) => (
                <div key={tab.id} className="glass-card p-5">
                  <h4 className="text-xs font-semibold tracking-wider text-purple-primary uppercase mb-3">
                    {tab.label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {tab.skills.map((s) => (
                      <span key={s.name} className="skill-pill !text-xs !px-3 !py-1">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All categories grid (mobile friendly) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 reveal reveal-delay-3">
          {skillTabs.map((tab) => (
            <TabCard key={tab.id} tab={tab} />
          ))}
        </div>
      </div>
    </section>
  );
}
