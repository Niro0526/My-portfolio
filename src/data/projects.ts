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
    title: "Hospital Management System",
    description: "A web-based system to manage patient records, appointments, doctor schedules, and administrative tasks efficiently.",
    image: "/hospital.jpeg", // public folder-la irukkura image
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Sangavig22/Hospital-Booking",
    demo: "",
  },


  {
    id: 2,
    title: "Current Project (In Progress)",
    description:
      "An ongoing project that showcases my exploration of new tools and technologies in full-stack web development. This section will be updated once the project is ready to be showcased.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Node.js"],
  },
];
