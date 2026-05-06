import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  basics: {
    name: "Nikhil Lanke",
    phone: "9028894864",
    email: "lankenikhil25@gmail.com",
    linkedin: "linkedin.com/in/nikhil-lankeba13aa284",
    location: "Nighoj, Parner, Ahilyanagar 414306, Maharashtra, India",
    designation: "Java Developer & Information Technology Student",
    dob: "19 - March - 2005"
  },
  education: [
    {
      institution: "MIT Arts, Commerce & Science College (MITACSC)",
      location: "Pune, Maharashtra",
      degree: "Bachelor of Science in Information Technology",
      period: "July 2023 – July 2026",
      details: [
        "Relevant Coursework: Data Analyst, Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Web Technologies, Software Engineering",
        "SGPA: 9.45/10.0 (V Semister)"
      ]
    }
  ],
  technical_skills: {
    programming_languages: ["Python", "Java", "SQL", "HTML/CSS", "JavaScript"],
    technologies_frameworks: ["MySQL", "PostgreSQL"],
    database_management: ["MySQL", "PostgreSQL", "DBMS"],
    tools_platforms: ["VS Code", "GitHub", "Jupyter Notebook"],
    core_competencies: ["Data Structures", "Algorithms", "Object-Oriented Programming", "RESTful APIs", "Agile Development"]
  },
  projects: [
    {
      title: "Blinkit Sales Analysis Dashboard",
      stack: ["Excel", "Data Analysis", "Data Visualization"],
      date: "Aug 2025",
      link: "https://github.com/lankenikhil/Data-Analysis-Dashboard/tree/main",
      description: "Development of an interactive Business Intelligence (BI) dashboard for Blinkit, analyzed and visualized retail sales data across various dimensions. Provides comprehensive insights into total sales, item performance, and customer preferences."
    },
    {
      title: "Farmers Market Platform",
      stack: ["Java", "HTML", "CSS"],
      date: "Nov 2025",
      link: "https://github.com/lankenikhil/HTML-CSS-Farmers-Market-/tree/main",
      description: "Responsive web application connecting local farmers directly with consumers, eliminating middlemen."
    },
    {
      title: "Personal Portfolio Website",
      stack: ["HTML", "CSS", "JavaScript", "React"],
      date: "Mar 2025",
      bullets: [
        "Created a responsive portfolio website showcasing projects, skills, and achievements",
        "Integrated contact form with email notification system using EmailJS API"
      ]
    }
  ],
  experience: [
    {
      role: "Java Development Intern",
      company: "Nileson IT Consulting (OPC) Private Limited",
      period: "Aug 2025 – Nov 2025",
      bullets: [
        "Java Development with real-time project exposure",
        "Collaboration, team coordination, and punctuality",
        "Applied problem-solving to various coding challenges"
      ]
    }
  ],
  achievements_and_certifications: {
    academic: "Secured Second Position in the Eureka Pitching Competition at MITACSC.",
    certifications: [
      "Python for Data Science (Coursera)",
      "Java Programming Masterclass (Udemy)"
    ],
    hackathons: "Smart India Hackathon 2024 Participant",
    leadership: [
      "Technical Head - College IT Club",
      "Event Coordinator - Tech Symposium"
    ]
  },
  additional_information: {
    languages: ["English", "Hindi", "Marathi"],
    interests: ["Open Source", "Competitive Programming", "Machine Learning", "Cricket", "Swimming"]
  }
};
