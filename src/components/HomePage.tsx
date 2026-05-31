/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
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
  GitPullRequest
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

      {/* 4. Bento Specialties section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-display font-bold text-[#1A202C]">
            Academic Specialties
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Intersections of theoretical foundations and professional industry implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Software Engineering */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4A5568]"></div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#4A5568] mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
              Software Architecting
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Teaching robust modularity, microservices patterns, decoupling event brokers, testing automation, and deep refactoring patterns to streamline system reliability.
            </p>
          </div>

          {/* Card 2 - Machine Learning Engineering */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#A0522D]"></div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#A0522D] mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
              Applied Intelligence
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Researching automated code synthesis, developer workflow agents, structured transformer grammar outputs, and prompt-driven program debugging mechanisms.
            </p>
          </div>

          {/* Card 3 - Capstones Coordinator */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]"></div>
            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#1A202C] mb-2">
              Projects Coordination
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connecting senior cohorts with tech incubators and clinical clients. Ensuring project delivery metrics mirror modern agile industry release cycles.
            </p>
          </div>

        </div>
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
