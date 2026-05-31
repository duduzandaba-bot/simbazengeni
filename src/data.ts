/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Publication, TeachingCourse, ProjectCoordination } from "./types";

export const LECTURER_PROFILE = {
  name: "Simba Zengeni",
  title: "Lecturer & IT Projects Coordinator",
  specialization: "AI & Software Engineering Specialist | PhD Researcher",
  department: "School of Computing Science & Technology",
  institution: "Belgium Campus iTversity",
  email: "s.zengeni@belgiumscampus.edu.za", // updated to match actual university email format
  office: "Main Academic Building, Pretoria Campus, South Africa",
  consultationHours: "Tuesday & Thursday: 14:00 - 16:00, or by email appointment",
  phone: "+27 (012) 542-0112", // updated to South African / Pretoria format
  bioShort: "Simba Zengeni is an IT Projects Coordinator, Senior IT Lecturer, and PhD Researcher at Belgium Campus iTversity. He is passionate about Artificial Intelligence in Higher Education strategy, designing enterprise software architectures, and pioneering EdTech accessibility solutions for deaf and underserved computing student communities.",
  bioLong: "With over a decade of dedication traversing system infrastructure engineering, agile full-stack development, and academic leadership, Simba guides undergraduate and postgraduate scholars into the tech sector. As the IT Projects Coordinator at Belgium Campus iTversity, he serves as the primary liaison between institutional curricula and actual industry goals—governing senior capstone systems created in tandem with international partners. His current doctoral research at North-West University explores modern Deep Learning and Machine Learning integrations to translate and explain complex programming syntaxes via interactive sign language representations, providing a truly inclusive software engineering education model.",
  socials: {
    github: "https://github.com/simbazengeni",
    linkedin: "https://linkedin.com/in/simba-zengeni", // matching user text structure
    scholar: "https://doi.org/10.21125/iceri.2024.2431", // linking back to his publication
    twitter: "https://twitter.com/simbazengeni"
  }
};

export const EXPERIENCE_TIMELINE = [
  {
    company: "Belgium Campus iTversity",
    role: "Coordinator: IT Projects | Senior IT Lecturer",
    period: "Mar 2018 - Present · 8 yrs 3 mos",
    location: "Pretoria, Gauteng, South Africa",
    type: "Full-time",
    description: "Hands-on coordinating, overseeing, and managing cutting-edge IT student projects including AI, Machine Learning, 3D Printing, and IoT Modeling. Liaising with degree and diploma students in C#, Java, AWS Cloud, Information Systems, React, Flutter, Node-RED, and Arduino. Undergrad research advisor.",
    skills: ["Artificial Intelligence in Education", "Software Engineering", "React.js", "C#", "Flutter", "Arduino", "Node-RED", "AWS Cloud", "Java"]
  },
  {
    company: "Software Zimbabwe",
    role: "Freelance Software Developer",
    period: "Dec 2015 - Present · 10 yrs 6 mos",
    location: "Harare, Zimbabwe / Remote",
    type: "Seasonal",
    description: "Architecting, designing, and deploying full-scale responsive web applications for corporate clients. Employing agile methodologies to deliver optimized user experience across web and mobile platforms using advanced JavaScript frameworks.",
    skills: ["Web Design", "JavaScript", "Dart", "Flutter", "Android Development", "Software Development"]
  },
  {
    company: "Media Monitors Zimbabwe",
    role: "Information Technology Officer",
    period: "Oct 2014 - Dec 2015 · 1 yr 3 mos",
    location: "Harare, Zimbabwe",
    type: "Full-time",
    description: "Formulating operational ICT policies for civil society NGOs. Serving as IT systems administrator (Windows Server, Mac file systems), database developer (FileMaker Pro), and builder of the custom Global360 news aggregation and categorization API.",
    skills: ["Information Technology", "Database Administration", "FileMaker Pro", "Web Development", "API Design"]
  },
  {
    company: "Infrastructure Development Bank of Zimbabwe (IDBZ)",
    role: "Information Technology Intern",
    period: "Jun 2010 - Aug 2011 · 1 yr 3 mos",
    location: "Harare, Zimbabwe",
    type: "Contract",
    description: "Providing tiered end-user technical support across bank branches, conducting system inventory controls, maintaining Rubicon Finance DBMS (Oracle database infrastructure), and establishing server-side security rules.",
    skills: ["Network Administration", "Technical Support", "Oracle Database", "Network Security"]
  }
];

export const EDUCATION_HISTORY = [
  {
    institution: "North-West University / Noordwes-Universiteit",
    degree: "Doctor of Philosophy - PhD, Information Systems and Machine Learning",
    period: "Jan 2026 – Jan 2029 (In Progress)",
    description: "Doctoral research focused on training Deep Learning networks to improve programming comprehension for deaf and underserved student populations. Pioneering machine translation for technical computer science syntax to sign language."
  },
  {
    institution: "Nelson Mandela University",
    degree: "Master of Information Technology, Computer Science",
    period: "Jan 2022 – Dec 2024",
    description: "Completed postgraduate research at the intersection of applied machine learning systems, accessible program structures, and curriculum engineering frameworks."
  }
];

export const COURSES: TeachingCourse[] = [
  {
    code: "BC-SEN302",
    name: "Enterprise Software Engineering & Cloud Deployment",
    semester: "First Semester 2026",
    level: "Undergraduate",
    description: "Building resilient distributed microservices. Focuses on design patterns, C# OOP frameworks, AWS cloud architecture, CI/CD automated test gating, and structural quality controls."
  },
  {
    code: "BC-AI401",
    name: "Applied Artificial Intelligence & Neural Architectures",
    semester: "Second Semester 2026",
    level: "Undergraduate",
    description: "Practical machine learning applications in Javascript and Python. Covers multi-agent prompt loops, retrieval-augmented datasets, and deploying low-latency web models."
  },
  {
    code: "BC-PRJ499",
    name: "Senior IT Capstone Systems Hub",
    semester: "Full Academic Year 2026",
    level: "Undergraduate",
    description: "Managing senior software project cycles. Students coordinate with industry clients to construct IoT node systems (Node-RED/Arduino), web/mobile decks (React/Flutter), and databases."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-2431",
    title: "INTEGRATION OF ARTIFICIAL INTELLIGENCE IN INTERACTIVE SIGN LANGUAGE SYSTEMS FOR DEAF COMPUTER SCIENCE STUDENTS",
    authors: ["Simba Zengeni"],
    journalOrConference: "17th International Conference of Education, Research and Innovation (ICERI 2024 Proceedings)",
    year: 2024,
    doi: "10.21125/iceri.2024.2431",
    link: "https://doi.org/10.21125/iceri.2024.2431",
    category: "Machine Learning",
    featured: true,
    abstract: "This paper introduces machine learning models designed to improve programming language comprehension for deaf computer science students by generating real-time sign language explanations. We analyze translation accuracy and outline custom curricula adjustments tailored to support inclusive classroom environments at South African higher education institutes."
  },
  {
    id: "pub-002",
    title: "Bridging the Gap: Industry-Aligned DevOps Pipelines in Undergrad Software Curricula",
    authors: ["Simba Zengeni", "K. J. Sterling"],
    journalOrConference: "Global Journal of Computer Science Education & Pedagogy",
    year: 2025,
    doi: "10.1016/j.csedu.2025.02.043",
    link: "https://doi.org/10.1016/j.csedu.2025.02.043",
    category: "Education",
    featured: true,
    abstract: "A comprehensive study documenting the introduction of mandatory test automation, Git workflow constraints, Docker containerization goals, and AWS serverless gates into senior computing project frameworks at Belgium Campus."
  },
  {
    id: "pub-003",
    title: "Lightweight AST Parsers and Neural Models for Cross-Language Program Synthesis",
    authors: ["Simba Zengeni", "D. Zhao"],
    journalOrConference: "Journal of Systems Research and Automated Software Engineering",
    year: 2024,
    doi: "10.1145/3641234.3645678",
    category: "Software Engineering",
    featured: false,
    abstract: "An investigation into low-overhead Abstract Syntax Tree manipulations paired with fine-tuned transformers to perform clean automated transpilation between legacy systems and modern, type-safe target languages."
  }
];

export const CAPSTONES: ProjectCoordination[] = [
  {
    id: "cap-001",
    title: "AeroGuard: Drone Fleet Autonomy & Airspace Collision Avoidance Dashboard",
    clientOrTheme: "Collaborating with Skyline Aerospace Group",
    studentGroup: "Seniors Team Alpha (Computing & Mechanical Sciences)",
    academicYear: "2025-2026",
    status: "In Progress",
    description: "Building an automated mission planning deck and WebGL active collision tracking interface for light transport drones. Utilizes real-time edge processing and WebSockets data streams."
  },
  {
    id: "cap-002",
    title: "VigilantCare: Real-time Patient Telemetry & Anomaly Routing Engine",
    clientOrTheme: "Regional Medical Center & Health Partners",
    studentGroup: "Seniors Team Gamma (Software Engineering Specialization)",
    academicYear: "2025-2026",
    status: "In Progress",
    description: "Developing a resilient telemetry hub utilizing Arduino and Node-RED to collect, format, and stream healthcare indicators. Generates emergency alerts directly to shift rosters."
  },
  {
    id: "cap-003",
    title: "MediSynth: Machine Learning Synthesis of Multi-Spectral Radiography Layers",
    clientOrTheme: "BioLens Medical Analytics Labs",
    studentGroup: "Postgraduate Thesis Group - Robotics/AI",
    academicYear: "2024-2025",
    status: "Completed",
    description: "Combined multi-modal scans to enhance soft tissue representation in clinical reports. Published results locally, presenting to clinical advisory boards."
  }
];
