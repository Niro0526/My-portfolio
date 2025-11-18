export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and user authentication. Built with React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Features a clean and intuitive interface.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
];
