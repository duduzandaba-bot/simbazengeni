/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { LECTURER_PROFILE, PUBLICATIONS, CAPSTONES } from "../data";
import { 
  Award, 
  BookOpen, 
  Terminal, 
  Users, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  GitPullRequest,
  Quote
} from "lucide-react";

// Use correct profile and hero paths
import avatarImg from "../assets/images/Profile photo.jpeg";
import heroImg from "../assets/images/Hero.jpeg";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  // Take first 2 featured publications
  const featuredPubs = PUBLICATIONS.filter(p => p.featured).slice(0, 2);
  
  // Take active capstones
  const activeCapstones = CAPSTONES.filter(c => c.status === "In Progress").slice(0, 2);

  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const quotes = [
    {
      text: "True software engineering is not just about writing code; it is about building accessibility and breaking barriers.",
      context: "Pioneering Sign Language Translation Models"
    },
    {
      text: "Connecting classroom theory with industry execution prepares students not just for a job, but for technological leadership.",
      context: "Capstones & Industry Alignments"
    },
    {
      text: "Artificial Intelligence in higher education should serve as an equalizer, empowering every mind to create and innovate.",
      context: "AI Strategy in Higher Education"
    },
    {
      text: "A compiler doesn't care if you can hear; it only cares about the clarity and logic of your mind.",
      context: "Empowering Deaf & Underserved Student Groups"
    },
    {
      text: "The compiler is the most honest critic. It teaches patience, structural thinking, and the humility to continuously refactor.",
      context: "On Software Development Craftsmanship"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      
      {/* 1. Hero Cover Section */}
      <section className="relative min-h-screen snap-start overflow-hidden shadow-xl border-b bg-[#1A202C]">
        <img 
          src={heroImg} 
          alt="Simba Zengeni Academic Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Rich gradient cover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C]/90 via-[#1A202C]/60 to-transparent"></div>
        
        {/* Banner content styled with premium fonts & palette */}
        <div className="absolute inset-0 flex flex-col justify-end pb-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setCurrentPage("about")}
                className="bg-[#A0522D] hover:bg-[#A0522D]/90 text-[#E2E8FO] font-medium text-sm px-6 py-2.5 rounded-lg border border-[#D4AF37]/30 transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Classes & Supervisions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="bg-transparent hover:bg-white/10 text-[#E2E8FO] font-medium text-sm px-6 py-2.5 rounded-lg border border-slate-400/60 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Consultation</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 3. Author Profile Intro section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center">
        <div className="bg-white rounded-3xl p-8 border border-slate-300/60 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Avatar side */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A0522D] to-[#D4AF37] rounded-3xl blur-md opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-3xl border-4 border-[#1A202C] w-64 h-64 md:w-72 md:h-72 shadow-xl">
                <img 
                  src={avatarImg} 
                  alt={LECTURER_PROFILE.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Quick statement details */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="font-mono text-xs text-[#A0522D] uppercase tracking-wider font-semibold">
                Faculty Welcome
              </span>
              <h2 className="text-3xl font-display font-bold text-[#1A202C] mt-1">
                Connecting Theory and Deployment
              </h2>
            </div>
            
            <p className="text-[#4A5568] leading-relaxed text-base">
              {LECTURER_PROFILE.bioShort}
            </p>

            <p className="text-[#4A5568] leading-relaxed text-sm">
              As the <strong className="text-slate-800">Projects Coordinator</strong> for computing disciplines, I believe in an educational mandate focused on execution. Our curriculum pushes students beyond standard textbooks, engaging them directly in cloud architectures, integration checks, and agile operations.
            </p>

            {/* Quick contact briefs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#A0522D]" />
                <span className="text-xs text-[#4A5568]">
                  <strong>Office:</strong> {LECTURER_PROFILE.office}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-xs text-[#4A5568]">
                  <strong>Consultations:</strong> T & Th 14:00 - 16:00
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Wall: Lecturer's teaching quotes carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] snap-start flex flex-col justify-center relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#1A202C] to-[#2D3748] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/20 shadow-2xl relative overflow-hidden">
          {/* Background quote mark */}
          <div className="absolute -top-4 -left-2 text-[12rem] font-serif text-[#D4AF37]/5 pointer-events-none select-none">
            “
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
              Teaching Philosophy & Quote Wall
            </span>
            
            <div className="min-h-[140px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-[#E2E8FO] italic leading-relaxed">
                    "{quotes[quoteIndex].text}"
                  </p>
                  <p className="text-xs font-mono text-[#D4AF37]/80">
                    — Simba Zengeni | {quotes[quoteIndex].context}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 pt-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuoteIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === quoteIndex 
                      ? "bg-[#D4AF37] w-6" 
                      : "bg-slate-500 hover:bg-slate-400"
                  } cursor-pointer`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Background quote mark right */}
          <div className="absolute -bottom-16 -right-2 text-[12rem] font-serif text-[#D4AF37]/5 pointer-events-none select-none">
            ”
          </div>
        </div>
      </section>

      {/* 4. Modules & Expertise section with Flip Cards & Scroll-triggered Components */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="font-mono text-xs text-[#A0522D] uppercase tracking-wider font-semibold">
            Faculty Expertise & Coursework
          </span>
          <h2 className="text-3xl font-display font-bold text-[#1A202C] mt-1">
            Modules & Expertise
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Physically hover or tap cards below to reveal course codes, active curriculum, and deeper research directions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          
          {/* Card 1 - Software Engineering */}
          <div className="flip-card group">
            <div className="flip-card-inner">
              
              {/* Front side */}
              <div className="flip-card-front bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A5568]"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#4A5568] mb-4">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
                    Software Architecting
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Teaching robust modularity, microservices patterns, decoupling event brokers, testing automation, and deep refactoring patterns to streamline system reliability.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#A0522D] flex items-center gap-1 mt-2">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Hover for module & stack details</span>
                </div>
              </div>

              {/* Back side */}
              <div className="flip-card-back bg-[#1A202C] border border-[#D4AF37]/30 p-6 shadow-lg flex flex-col justify-between overflow-hidden text-white">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]"></div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-[#A0522D] text-white px-2 py-0.5 rounded font-mono font-bold">
                      BC-SEN302
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Undergrad • Sem 1
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#E2E8FO]">
                    Enterprise Software Engineering & Cloud Deployment
                  </h4>
                  <p className="text-[11px] text-slate-350 leading-relaxed">
                    Focuses on design patterns, C# OOP, AWS cloud architecture, CI/CD automated test gating, and Docker containers.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-[#D4AF37]">
                  Stack: C# • .NET • AWS • Docker
                </div>
              </div>

            </div>
          </div>

          {/* Card 2 - Machine Learning Engineering */}
          <div className="flip-card group">
            <div className="flip-card-inner">
              
              {/* Front side */}
              <div className="flip-card-front bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#A0522D]"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#A0522D] mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
                    Applied Intelligence
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Researching automated code synthesis, developer workflow agents, structured transformer grammar outputs, and prompt-driven program debugging mechanisms.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#A0522D] flex items-center gap-1 mt-2">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Hover for research & stack details</span>
                </div>
              </div>

              {/* Back side */}
              <div className="flip-card-back bg-[#1A202C] border border-[#D4AF37]/30 p-6 shadow-lg flex flex-col justify-between overflow-hidden text-white">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]"></div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-[#A0522D] text-white px-2 py-0.5 rounded font-mono font-bold">
                      BC-AI401
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Undergrad • Sem 2
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#E2E8FO]">
                    Applied Artificial Intelligence & Neural Architectures
                  </h4>
                  <p className="text-[11px] text-slate-350 leading-relaxed">
                    Practical machine learning models. Simba's PhD research focuses on Deep Learning models translating coding syntax to sign language for deaf students.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-[#D4AF37]">
                  Stack: Python • PyTorch • JS • NLP
                </div>
              </div>

            </div>
          </div>

          {/* Card 3 - Capstones Coordinator */}
          <div className="flip-card group">
            <div className="flip-card-inner">
              
              {/* Front side */}
              <div className="flip-card-front bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-[#D4AF37] mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
                    Projects Coordination
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Connecting senior cohorts with tech incubators and clinical clients. Ensuring project delivery metrics mirror modern agile industry release cycles.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#A0522D] flex items-center gap-1 mt-2">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Hover for project & tech details</span>
                </div>
              </div>

              {/* Back side */}
              <div className="flip-card-back bg-[#1A202C] border border-[#D4AF37]/30 p-6 shadow-lg flex flex-col justify-between overflow-hidden text-white">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]"></div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-[#A0522D] text-white px-2 py-0.5 rounded font-mono font-bold">
                      BC-PRJ499
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Undergrad • Full Year
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#E2E8FO]">
                    Senior IT Capstone Systems Hub
                  </h4>
                  <p className="text-[11px] text-slate-350 leading-relaxed">
                    Governing senior software projects constructed for real clients. Connects IoT systems, telemetry modules, and cloud databases.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-[#D4AF37]">
                  Stack: Flutter • Arduino • Node-RED
                </div>
              </div>

            </div>
          </div>

        </motion.div>
      </section>

      {/* 5. Featured publications and Capstone brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Recent Publications Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-2xl font-display font-bold text-[#1A202C] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#A0522D]" />
                <span>Featured Literature</span>
              </h2>
              <button 
                onClick={() => setCurrentPage("publications")}
                className="text-xs font-semibold text-[#A0522D] hover:text-[#A0522D]/80 flex items-center gap-1 cursor-pointer"
              >
                <span>All Research</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {featuredPubs.map((pub) => (
                <div 
                  key={pub.id}
                  className="bg-white border border-slate-200 p-5 rounded-2xl hover:border-[#D4AF37]/50 shadow-xs space-y-3"
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] bg-slate-100 text-[#4A5568] font-mono px-2 py-0.5 rounded-full font-semibold shrink-0">
                      {pub.category}
                    </span>
                    <span className="text-xs font-bold text-[#D4AF37] font-mono">
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-sm leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] line-clamp-2">
                    {pub.abstract}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Underway Supervised Capstone Projects */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-2xl font-display font-bold text-[#1A202C] flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-[#D4AF37]" />
                <span>Supervised Tech Capstones</span>
              </h2>
              <button 
                onClick={() => setCurrentPage("about")}
                className="text-xs font-semibold text-[#A0522D] hover:text-[#A0522D]/80 flex items-center gap-1 cursor-pointer"
              >
                <span>Curriculums</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {activeCapstones.map((project) => (
                <div 
                  key={project.id}
                  className="bg-[#1A202C] border border-[#D4AF37]/20 p-5 rounded-2xl space-y-3 text-[#E2E8FO]"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-[#A0522D] text-[#E2E8FO] font-semibold px-2.5 py-0.5 rounded-full">
                      Active Development
                    </span>
                    <span className="text-xs text-[#D4AF37] font-mono">
                      {project.academicYear}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#E2E8FO] text-sm leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
