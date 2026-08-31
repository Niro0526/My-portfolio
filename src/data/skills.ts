export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    skills: ['Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  },
  {
    title: 'FRONTEND',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'BACKEND & APIs',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'DATABASES & SERVICES',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'SOFTWARE ENGINEERING',
    skills: [
      'OOP',
      'OOAD',
      'SDLC',
      'Database Design',
      'CRUD',
      'RBAC',
      'Authentication',
      'Validation',
    ],
  },
  {
    title: 'REAL-TIME & INTEGRATION',
    skills: ['WebSocket', 'STOMP.js', 'SockJS', 'API Integration'],
  },
  {
    title: 'TOOLS & PLATFORMS',
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Vercel'],
  },
];
