export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [];

export const education: Experience[] = [
  {
    id: 1,
    title: "School Education",
    company: "J/Vembadi Girls' High School",
    location: "Jaffna, Sri Lanka",
    period: "Completed",
    description: ["Completed secondary education with a strong foundation in academics."],
    type: "education",
  },
  {
    id: 2,
    title: "BSc (Hons) in Information Technology",
    company: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    period: "2nd Year — Present",
    description: [
      "Currently pursuing a Bachelor of Science (Honours) in Information Technology.",
      "Developing skills in software engineering, web technologies, and problem-solving.",
    ],
    type: "education",
  },
];
