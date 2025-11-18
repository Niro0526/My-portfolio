export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    location: "New York, NY",
    period: "2019 - 2021",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Collaborated with cross-functional teams to deliver projects on time",
      "Integrated third-party APIs and payment systems",
      "Wrote comprehensive unit and integration tests"
    ],
    type: "work"
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    location: "Austin, TX",
    period: "2018 - 2019",
    description: [
      "Built responsive web interfaces using React and modern CSS",
      "Participated in agile development processes",
      "Fixed bugs and improved existing codebase",
      "Learned best practices in software development"
    ],
    type: "work"
  },
];

export const education: Experience[] = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    location: "California, USA",
    period: "2014 - 2018",
    description: [
      "GPA: 3.8/4.0",
      "Relevant coursework: Data Structures, Algorithms, Web Development",
      "Dean's List for 6 semesters",
      "Led university coding club and organized hackathons"
    ],
    type: "education"
  },
];
