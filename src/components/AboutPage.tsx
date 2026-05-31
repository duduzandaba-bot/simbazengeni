/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { LECTURER_PROFILE, COURSES, CAPSTONES, EXPERIENCE_TIMELINE, EDUCATION_HISTORY } from "../data";
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  ChevronRight, 
  Clock, 
  Layers, 
  Building
} from "lucide-react";

import bgImg from "../assets/images/Background.jpg";

interface AboutPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  const [activeCourseFilter, setActiveCourseFilter] = React.useState<"All" | "Undergraduate" | "Postgraduate">("All");
  const [activeCapstoneFilter, setActiveCapstoneFilter] = React.useState<"All" | "In Progress" | "Completed">("All");

  const filteredCourses = COURSES.filter(c => 
    activeCourseFilter === "All" ? true : c.level === activeCourseFilter
  );

  const filteredCapstones = CAPSTONES.filter(c => 
    activeCapstoneFilter === "All" ? true : c.status === activeCapstoneFilter
  );

  return (
    <div className="w-full">
      
      {/* 1. Extended Biography and credentials */}
      <section className="relative w-screen min-h-screen snap-start bg-black left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden flex flex-col justify-center shadow-xl">
        <img 
          src={bgImg} 
          alt="Biography Background" 
          className="absolute inset-0 w-full h-full object-contain object-center" 
        />
        <div className="absolute inset-0 bg-[#1A202C]/65"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT BLOCK: Degrees */}
            <div className="lg:col-span-3 order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-transparent p-2">
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-white/30 pb-3 flex items-center gap-2 drop-shadow-md">
                  <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                  <span>Doctoral & Master Degrees</span>
                </h3>
                <div className="space-y-5 pt-4">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div key={idx} className="space-y-1.5 pb-3 last:pb-0 last:border-none border-b border-white/20">
                      <span className="block font-display font-bold text-sm text-white drop-shadow-md">
                        {edu.degree}
                      </span>
                      <span className="block text-xs font-mono text-[#D4AF37] drop-shadow-md">
                        {edu.period}
                      </span>
                      <span className="block text-xs text-slate-100 font-medium leading-relaxed drop-shadow-md">
                        {edu.institution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MIDDLE: Spacer to show the teacher */}
            <div className="hidden lg:block lg:col-span-5 order-2 min-h-[300px]"></div>

            {/* RIGHT BLOCK: Wording */}
            <div className="lg:col-span-4 order-1 lg:order-3">
              <div className="bg-transparent space-y-6">
                <div>
                  <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider font-semibold drop-shadow-md">
                    Academic & Industry Biography
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2 drop-shadow-md">
                    Pioneering EdTech & AI Curriculum Strategy
                  </h1>
                </div>

                <p className="text-white leading-relaxed text-sm drop-shadow-md font-medium">
                  {LECTURER_PROFILE.bioLong}
                </p>

                
                <div className="bg-transparent space-y-2 mt-4">
                  <h3 className="font-display font-bold text-xs text-[#D4AF37] tracking-wider uppercase drop-shadow-md">
                    Active Institutional Advisory
                  </h3>
                  <p className="text-xs leading-relaxed text-white drop-shadow-md font-medium">
                    Simba Zengeni oversees regional student software portfolios, bridging gaps between lecture-hall theory and real-world compliance benchmarks for deaf and underserved cohorts in South Africa.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Chronological Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center py-8">
        <div className="border-b border-slate-300 pb-3">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1A202C] flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#A0522D]" />
            <span>Academic & Professional Timeline</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Traversing system infrastructure administration, agile full-stack engineering, and senior university instruction.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-300 ml-4 pl-6 space-y-6 mt-4 overflow-y-auto max-h-[70vh] pr-2">
          {EXPERIENCE_TIMELINE.map((ms, index) => (
            <div key={index} className="relative">
              {/* Bullet circle */}
              <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#A0522D] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#D4AF37]/40 transition-all">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <span className="inline-block font-mono text-[10px] font-bold text-[#A0522D] bg-[#A0522D]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {ms.period}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono mt-1 pr-2">
                      {ms.location}
                    </span>
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <h3 className="text-sm sm:text-base font-display font-bold text-[#1A202C] flex items-center gap-2 flex-wrap">
                      <span>{ms.role}</span>
                      <span className="text-xs font-normal text-slate-400">| {ms.type}</span>
                    </h3>
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <strong>{ms.company}</strong>
                    </div>
                    <p className="text-xs text-[#4A5568] leading-relaxed pt-1 border-t border-slate-100">
                      {ms.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {ms.skills.map((sk) => (
                        <span key={sk} className="text-[9px] bg-slate-100 text-[#4A5568] px-2 py-0.5 rounded-full border border-slate-250 font-medium">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Teaching Active Course directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center py-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-300 pb-3 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1A202C] flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              <span>Teaching & Course Roster</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Active lecture modules instructed in Software Systems, Cloud Architectures, and Applied AI.
            </p>
          </div>

          <div className="flex gap-2">
            {(["All", "Undergraduate", "Postgraduate"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCourseFilter(filter)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition-colors ${
                  activeCourseFilter === filter
                    ? "bg-[#1A202C] text-white border-[#1A202C]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.code}
              className="bg-white border border-slate-300/60 p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="font-mono text-xs font-bold text-white bg-[#A0522D] px-2.5 py-1 rounded-md">
                    {course.code}
                  </div>
                  <span className="text-[10px] bg-slate-100 text-[#4A5568] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider border border-slate-200">
                    {course.level}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-slate-800 text-sm leading-snug">
                    {course.name}
                  </h3>
                  <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Term: {course.semester}</span>
                  </div>
                </div>

                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Syllabus reference card footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[10px]">
                  Requires Git & AWS environments
                </span>
                <span className="text-[#A0522D] font-bold flex items-center gap-0.5 hover:underline cursor-not-allowed">
                  <span>Syllabus (PDF)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Coordinated Senior Capstone Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen snap-start flex flex-col justify-center py-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-300 pb-3 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1A202C] flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#A0522D]" />
              <span>Supervised Senior IT Capstones</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Developing and governing real-world student projects in IoT (Arduino, Node-RED) and Mobile (Flutter) systems.
            </p>
          </div>

          <div className="flex gap-2">
            {(["All", "In Progress", "Completed"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCapstoneFilter(filter)}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition-colors ${
                  activeCapstoneFilter === filter
                    ? "bg-[#1A202C] text-white border-[#1A202C]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCapstones.map((project) => (
            <div 
              key={project.id}
              className="bg-[#1A202C] border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 p-6 rounded-2xl shadow-lg space-y-4 flex flex-col justify-between text-[#E2E8FO]"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-4">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                    project.status === "In Progress" 
                      ? "bg-[#A0522D] text-[#E2E8FO]" 
                      : "bg-[#4A5568] text-[#E2E8FO]"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-[#D4AF37] font-mono">
                    {project.academicYear}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-[#E2E8FO] text-base leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 mt-1 italic">
                    Partner: {project.clientOrTheme}
                  </div>
                </div>

                <p className="text-xs text-slate-350 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Student team details */}
              <div className="pt-4 border-t border-slate-800 text-[11px] text-[#D4AF37] flex items-center justify-between font-mono">
                <span>Supervised Cohort:</span>
                <span className="text-slate-300">{project.studentGroup}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
