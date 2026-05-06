import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Award, 
  BookOpen, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Languages,
  Coffee
} from 'lucide-react';
import { PORTFOLIO_DATA } from './constants';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { basics, technical_skills, projects, experience, education, achievements_and_certifications, additional_information } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative technical-grid overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold font-mono tracking-tighter"
          >
            <span className="text-cyan-400">~/</span>{basics.name.toLowerCase().replace(' ', '')}
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
              >
                {item}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:lankenikhil25@gmail.com"
              className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-1.5 rounded-full hover:bg-cyan-500/20 transition-all font-mono text-xs"
            >
              CONTACT_ME.exe
            </motion.a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={sectionVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              AVAILABLE FOR COLLABORATION
            </motion.div>
            
            <motion.h1 variants={sectionVariants} className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Hello, I'm <br />
              <span className="text-gradient">{basics.name}</span>
            </motion.h1>
            
            <motion.div variants={sectionVariants} className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mb-8 leading-relaxed">
              A <span className="text-slate-100 font-medium">{basics.designation}</span> passionate about building robust backend systems and intuitive digital experiences.
            </motion.div>

            <motion.div variants={sectionVariants} className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="bg-cyan-500 text-brand-dark px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-all flex items-center gap-2 group"
              >
                View My Work
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 mt-4 md:mt-0 px-4">
                <a href={`https://${basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/lankenikhil" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-slate-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About & Contact Quick Info */}
        <section id="about" className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="text-cyan-400 w-6 h-6" />
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <BookOpen className="w-24 h-24" />
                      </div>
                      <div className="text-cyan-400 font-mono text-xs mb-2">{edu.period}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <div className="text-slate-400 mb-4">{edu.institution} | {edu.location}</div>
                      <ul className="space-y-2">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-400 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Mail className="text-cyan-400 w-6 h-6" />
                  Get in Touch
                </h2>
                <div className="glass-card p-6 rounded-2xl space-y-4">
                  <a href={`mailto:${basics.email}`} className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-all">
                    <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 text-cyan-400 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Email</div>
                      <div className="text-sm font-medium text-slate-200">{basics.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-all">
                    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 text-blue-400 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Phone</div>
                      <div className="text-sm font-medium text-slate-200">{basics.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-all">
                    <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 text-indigo-400 transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Location</div>
                      <div className="text-sm font-medium text-slate-200">{basics.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Cpu className="text-cyan-400 w-6 h-6" />
              Technical Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCategory 
                title="Languages" 
                icon={<Code2 className="w-5 h-5" />}
                skills={technical_skills.programming_languages}
              />
              <SkillCategory 
                title="Databases" 
                icon={<Database className="w-5 h-5" />}
                skills={technical_skills.database_management}
              />
              <SkillCategory 
                title="Tools & Platforms" 
                icon={<Globe className="w-5 h-5" />}
                skills={technical_skills.tools_platforms}
              />
              <SkillCategory 
                title="Frontend & Logic" 
                icon={<Layout className="w-5 h-5" />}
                skills={["Java", "HTML", "CSS", "React"]}
              />
              <SkillCategory 
                title="Core Competencies" 
                icon={<Terminal className="w-5 h-5" />}
                skills={technical_skills.core_competencies}
                className="md:col-span-2"
              />
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Award className="text-cyan-400 w-6 h-6" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                        <div className="text-cyan-400 font-medium">{exp.company}</div>
                      </div>
                      <div className="text-xs font-mono bg-white/5 py-1 px-3 rounded-full text-slate-400 border border-white/5">
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-slate-400 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Layout className="text-cyan-400 w-6 h-6" />
                Featured Projects
              </h2>
              <a 
                href="https://github.com/lankenikhil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-mono text-cyan-400 hover:underline flex items-center gap-2"
              >
                VIEW_ALL_REPOS
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Achievements & Footer Info */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-cyan-400 w-5 h-5" />
              Achievements
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-cyan-400 font-mono mb-1 uppercase tracking-widest">Competition</div>
                <div className="text-slate-200">{achievements_and_certifications.academic}</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-xs text-blue-400 font-mono mb-1 uppercase tracking-widest">Hackathons</div>
                <div className="text-slate-200">{achievements_and_certifications.hackathons}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-cyan-400 w-5 h-5" />
              Certifications
            </h2>
            <div className="space-y-4">
              {achievements_and_certifications.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                  <div className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-lg group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="text-slate-200 text-sm font-medium">{cert}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Additional Information */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Languages className="text-cyan-400 w-5 h-5" />
              Languages
            </h2>
            <div className="flex flex-wrap gap-3">
              {additional_information.languages.map((lang, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-slate-200 font-medium">
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Coffee className="text-cyan-400 w-5 h-5" />
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {additional_information.interests.map((interest, idx) => (
                <span key={idx} className="bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 px-3 py-1 rounded-full text-xs font-mono">
                  {interest.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="pt-24 border-t border-slate-800 text-center">
          <div className="text-slate-500 text-sm font-mono mb-4">
            BUILT_WITH_REACT + TAILWIND + MOTION
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a href={`https://${basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/lankenikhil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} {basics.name}. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

function SkillCategory({ title, icon, skills, className = "" }: { title: string, icon: React.ReactNode, skills: string[], className?: string }) {
  return (
    <div className={`glass-card p-8 rounded-2xl overflow-hidden relative group ${className}`}>
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-sm text-slate-300 font-mono hover:bg-cyan-500/15 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl group-hover:scale-110 transition-transform">
            <Terminal className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono text-slate-500">{project.date}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight leading-none">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {project.description || project.bullets?.join(' ')}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech: string, sIdx: number) => (
            <span key={sIdx} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 border border-slate-800 px-2 py-1 rounded transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-500/70">
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-cyan-400 transition-colors group/link"
          >
            Explore Project
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

