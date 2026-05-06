/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BasicInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  location: string;
  designation: string;
  dob: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details: string[];
}

export interface TechnicalSkills {
  programming_languages: string[];
  technologies_frameworks: string[];
  database_management: string[];
  tools_platforms: string[];
  core_competencies: string[];
}

export interface Project {
  title: string;
  stack: string[];
  date: string;
  link?: string;
  description?: string;
  bullets?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Achievements {
  academic: string;
  certifications: string[];
  hackathons: string;
  leadership: string[];
}

export interface PortfolioData {
  basics: BasicInfo;
  education: Education[];
  technical_skills: TechnicalSkills;
  projects: Project[];
  experience: Experience[];
  achievements_and_certifications: Achievements;
  additional_information: {
    languages: string[];
    interests: string[];
  };
}
