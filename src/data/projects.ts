import heroImg from '../assets/images/hero-visual.jpg';
import docusphereImg from '../assets/images/docusphere.jpg';
import timeslotImg from '../assets/images/timeslot.jpg';
import healthsyncImg from '../assets/images/healthsync.jpg';
import roverImg from '../assets/images/rover.jpg';

export { heroImg };

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  contributions: string[];
  technologies: string[];
  image: string;
  github: string;
  liveDemo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'docusphere',
    number: '01',
    title: 'DOCUSPHERE',
    subtitle: 'AI-Powered Secure Document Management Platform',
    description:
      'A secure document management platform supporting team collaboration, document processing, administration and real-time system events.',
    role: 'Team Project — Admin Module & Notification System Developer',
    contributions: [
      'Built administrative features for monitoring users, teams, documents and storage usage.',
      'Implemented team-management workflows including member management, role changes, leadership transfer, team merging and archival.',
      'Developed global search and administrative report generation for PDF, CSV and Excel.',
      'Implemented real-time notifications using WebSocket, STOMP.js and SockJS.',
      'Integrated OCR-based text extraction and Gemini API document summarization.',
    ],
    technologies: [
      'React',
      'Spring Boot',
      'PostgreSQL',
      'Supabase Storage',
      'WebSocket',
      'STOMP.js',
      'SockJS',
      'Gemini API',
    ],
    image: docusphereImg,
    github: '#',
    liveDemo: '#',
    featured: true,
  },
  {
    id: 'timeslot',
    number: '02',
    title: 'TIME SLOT BOOKING APP',
    subtitle: 'Appointment & Scheduling System',
    description:
      'A single-page booking application for creating and managing time slots with conflict-prevention logic and persistent data storage.',
    role: 'Full-Stack Developer',
    contributions: [
      'Implemented booking creation, viewing, updating and deletion.',
      'Added Supabase-backed persistent storage.',
      'Prevented duplicate and overlapping bookings through application validation and database constraints.',
      'Added date/category filters and calendar-based booking views.',
      'Structured application logic into reusable components and service modules.',
      'Deployed the application using Vercel.',
    ],
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Vercel',
    ],
    image: timeslotImg,
    github: '#',
    liveDemo: '#',
  },
  {
    id: 'healthsync',
    number: '03',
    title: 'HEALTHSYNC',
    subtitle: 'Smart Hospital Appointment System',
    description:
      'A full-stack hospital appointment platform designed to manage patient access to doctors and appointment workflows online.',
    role: 'Team Project — IEEE HackElite 2.0',
    contributions: [
      'Implemented appointment booking with doctor availability, date and time-slot handling.',
      'Added appointment rescheduling and cancellation.',
      'Implemented appointment history.',
      'Worked with JWT and cookie-based authentication.',
      'Contributed to patient profiles and hospital-contact functionality.',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'JWT',
      'Cookies',
      'Postman',
    ],
    image: healthsyncImg,
    github: '#',
  },
  {
    id: 'roverxplorer',
    number: '04',
    title: 'ROVERXPLORER',
    subtitle: 'Smart Six-Wheeled Rover',
    description:
      'An Arduino-based remotely controlled rover with environmental monitoring designed for movement across uneven terrain.',
    role: 'Team Project',
    contributions: [
      'Developed joystick-based remote navigation.',
      'Integrated temperature, humidity, CO₂, light and UV sensors.',
      'Contributed to rocker-bogie suspension implementation for improved stability on uneven terrain.',
    ],
    technologies: ['Arduino', 'C++', 'Environmental Sensors'],
    image: roverImg,
    github: '#',
  },
];
