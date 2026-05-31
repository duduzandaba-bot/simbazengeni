/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { LECTURER_PROFILE } from "../data";
import { Github, Linkedin, Landmark, Mail, Phone, MapPin, Feather } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-[#1A202C] text-slate-300 border-t-2 border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Main Academic Ident */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#A0522D] flex items-center justify-center border border-[#D4AF37]/30 text-[#E2E8FO] font-bold text-sm">
                SZ
              </div>
              <span className="font-display font-semibold text-lg text-[#E2E8FO] tracking-wide">
                Simba Zengeni
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              {LECTURER_PROFILE.title} and {LECTURER_PROFILE.specialization}. Bridging practical engineering methodologies with state-of-the-art computational workflows.
            </p>
            
            {/* Social Network Integrations */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href={LECTURER_PROFILE.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#A0522D] hover:text-[#E2E8FO] transition-colors border border-slate-700 hover:border-[#D4AF37]/40"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={LECTURER_PROFILE.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#A0522D] hover:text-[#E2E8FO] transition-colors border border-slate-700 hover:border-[#D4AF37]/40"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={LECTURER_PROFILE.socials.scholar} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#A0522D] hover:text-[#E2E8FO] transition-colors border border-slate-700 hover:border-[#D4AF37]/40 text-[#D4AF37]"
                title="Google Scholar"
              >
                <Landmark className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div>
            <h3 className="font-display font-bold text-[#E2E8FO] text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Sitemap
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setCurrentPage("home")} 
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Home Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage("about")} 
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Biography & Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage("publications")} 
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Publications List
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage("contact")} 
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>

          {/* College Info */}
          <div>
            <h3 className="font-display font-bold text-[#E2E8FO] text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Academic Office
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {LECTURER_PROFILE.office}
                  <br />
                  {LECTURER_PROFILE.institution}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${LECTURER_PROFILE.email}`} className="hover:text-white transition-colors">
                  {LECTURER_PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{LECTURER_PROFILE.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and metadata info */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Simba Zengeni. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0 font-mono">
            <span>Specialist in Software Engineering & AI</span>
            <Feather className="w-3.5 h-3.5 text-[#D4AF37]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
