/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { PUBLICATIONS } from "../data";
import { Publication } from "../types";
import { 
  Search, 
  BookMarked, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check,
  Award,
  BookOpen,
  PieChart
} from "lucide-react";

interface PublicationsPageProps {
  setCurrentPage?: (page: string) => void;
}

export default function PublicationsPage({ setCurrentPage }: PublicationsPageProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  // Filter Logic
  const filteredPubs = PUBLICATIONS.filter((pub) => {
    const matchesCategory = selectedCategory === "All" || pub.category === selectedCategory;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journalOrConference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "Machine Learning", "Software Engineering", "Education"];

  // Cite format helper
  const handleCopyCitation = (pub: Publication, e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanId = pub.id.replace("pub-", "");
    const citationText = `@inproceedings{zengeni${pub.year}${cleanId},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  booktitle={${pub.journalOrConference}},
  year={${pub.year}},
  doi={${pub.doi || "N/A"}}
}`;
    
    navigator.clipboard.writeText(citationText);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="w-full">
      
      {/* Header + Metrics + Search — first snap screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen snap-start flex flex-col justify-center space-y-8">
      
      {/* 1. Header Information */}
      <div className="border-b border-slate-300/60 pb-5">
        <span className="font-mono text-xs text-[#A0522D] uppercase tracking-wider font-semibold">
          Scholarly Research
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1A202C] mt-1">
          Peer-Reviewed Research & Publications
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl">
          Advancing computer science education accessibility, designing interactive translation tools for deaf student populations, and standardizing AI integration.
        </p>
      </div>

      {/* 2. Top-Level Citation Metrics Deck */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-slate-300/60 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#4A5568]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-display font-bold text-[#1A202C]">
              {PUBLICATIONS.length}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Academic Papers Cataloged
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-x border-slate-200 sm:px-6 py-4 sm:py-0">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#D4AF37]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-display font-bold text-[#1A202C]">
              {PUBLICATIONS.filter(p => p.featured).length}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Featured Works
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#A0522D]">
            <PieChart className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-display font-bold text-[#1A202C]">
              100%
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Double-Blind Peer-Reviewed
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search Bar and Category Tabs Nav */}
      <section className="bg-white p-4 rounded-2xl border border-slate-300/60 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search publications by keyword, title, DOI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#A0522D]/45 focus:bg-white text-slate-800 font-medium transition-all"
          />
        </div>

        {/* Category filters list */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? "bg-[#A0522D] text-white border-[#A0522D]"
                  : "bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      </div>

      {/* Publications list — second snap screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen snap-start flex flex-col justify-center space-y-8">
      {/* 4. Active Publications dynamic lists */}
      <section className="space-y-4">
        {filteredPubs.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-3xl border border-slate-200 max-w-md mx-auto space-y-3">
            <BookMarked className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-display font-bold text-[#1A202C]">No publications found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or choosing alternate research category tabs above.
            </p>
          </div>
        ) : (
          filteredPubs.map((pub) => {
            const isExpanded = expandedId === pub.id;
            return (
              <div 
                key={pub.id}
                onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                  isExpanded 
                    ? "border-[#D4AF37] ring-1 ring-[#D4AF37]/50 shadow-md" 
                    : "border-slate-300/60 hover:border-slate-400 shadow-xs"
                }`}
              >
                
                {/* Header segment always visible */}
                <div className="p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] bg-slate-105 text-slate-700 font-mono font-bold px-2.5 py-0.5 rounded-full border border-slate-200">
                        {pub.category}
                      </span>
                      {pub.featured && (
                        <span className="text-[10px] bg-[#D4AF37]/15 text-[#A0522D] font-semibold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 flex items-center gap-1">
                          <Award className="w-3 h-3 text-[#A0522D]" />
                          <span>Featured Work</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold text-[#A0522D] font-mono">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-[#1A202C] leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-mono font-medium">
                    {pub.authors.map((author, index) => {
                      const isSimba = author.toLowerCase().includes("simba");
                      return (
                        <span key={index}>
                          {isSimba ? <strong className="text-slate-800">{author}</strong> : author}
                          {index < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </p>

                  <div className="text-xs text-slate-600 flex items-center gap-1.5 italic font-medium">
                    <span>Published in:</span>
                    <span className="text-slate-700 font-semibold">{pub.journalOrConference}</span>
                  </div>

                  {/* Expand button indicators */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#A0522D]">
                    <span className="flex items-center gap-1">
                      <span>{isExpanded ? "Collapse abstract summary" : "Read abstract & get citation"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                    
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-500 hover:text-[#A0522D] flex items-center gap-1 transition-colors z-10"
                      >
                        <span>Official DOI</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Abstract + BibTeX accordion section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#E2E8FO]/30 border-t border-slate-200 px-6 py-5 space-y-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="space-y-1.5 overflow-hidden">
                        <h4 className="font-display font-bold text-xs text-[#1A202C] uppercase tracking-wider">
                          Abstract summary
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-200 select-all">
                          {pub.abstract}
                        </p>
                      </div>

                      {/* Citation container */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-semibold text-xs text-[#1A202C] uppercase tracking-wider">
                            BibTeX academic citation
                          </h4>
                          <button
                            type="button"
                            onClick={(e) => handleCopyCitation(pub, e)}
                            className="bg-white border border-slate-200 hover:border-[#A0522D] text-slate-600 hover:text-[#A0522D] text-xs px-2.5 py-1.5 rounded-lg font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            {copiedId === pub.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-green-500 font-bold" />
                                <span className="text-green-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy BibTeX</span>
                              </>
                            )}
                          </button>
                        </div>

                        <pre className="p-4 rounded-xl bg-[#1A202C] text-[#E2E8FO] text-[10px] sm:text-xs overflow-x-auto font-mono leading-relaxed border border-slate-800">
{`@inproceedings{zengeni${pub.year}${pub.id.replace("pub-", "")},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  booktitle={${pub.journalOrConference}},
  year={${pub.year}},
  doi={${pub.doi || "N/A"}}
}`}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })
        )}
      </section>
      </div>

    </div>
  );
}
