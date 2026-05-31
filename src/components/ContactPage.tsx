/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { LECTURER_PROFILE } from "../data";
import { ContactMessage } from "../types";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Inbox, 
  FileCheck,
  Building,
  AlertTriangle,
  UserCheck
} from "lucide-react";

export default function ContactPage() {
  // Form input states
  const [formData, setFormData] = React.useState<ContactMessage>({
    name: "",
    email: "",
    affiliation: "Undergraduate Student",
    subject: "",
    message: ""
  });

  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [isSending, setIsSending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  // Local state to simulate Simba's admin inbox queue (with localStorage!)
  const [receivedMessages, setReceivedMessages] = React.useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem("simba_admin_inbox");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    // Return standard initial questions for preview polish list
    return [
      {
        name: "Chloe Sterling",
        email: "c.sterling@student.edu",
        affiliation: "Postgraduate Student",
        subject: "Draft Review: Multi-Agent supervisor architecture",
        message: "Hi Dr. Zengeni, I submitted the updated draft of Section 3 concerning peer-to-peer latency overlays. Could you review before our thesis session on Tuesday afternoon?"
      },
      {
        name: "Mark Thorne (Skyline Aerospace)",
        email: "m.thorne@skyline.org",
        affiliation: "Industry Partner",
        subject: "Senior Capstone - Drone Hardware delivery",
        message: "Excellent workspace meeting yesterday Simba. We confirmed the shipping of the 3 telemetry receivers for the AeroGuard drone cohort. They should arrive at the faculty lab by Friday morning."
      }
    ];
  });

  // Handle save messages to local persistence
  React.useEffect(() => {
    localStorage.setItem("simba_admin_inbox", JSON.stringify(receivedMessages));
  }, [receivedMessages]);

  const validateEmail = (emailStr: string) => {
    return /\S+@\S+\.\S+/.test(emailStr);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMsg("Please provide a valid primary email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMsg("Please state your message subject.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg("Please write a detailed message (at least 10 characters).");
      return;
    }

    // Trigger sending simulation
    setErrorMsg(null);
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      
      // Prepend message to Simba's local simulated inbox
      setReceivedMessages(prev => [formData, ...prev]);

      // Reset Form fields
      setFormData({
        name: "",
        email: "",
        affiliation: "Undergraduate Student",
        subject: "",
        message: ""
      });

      // Clear success notification after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    }, 1800); // realistic network ping
  };

  const handleClearInbox = () => {
    if (window.confirm("Do you wish to clear all messages from your local simulated inbox history?")) {
      setReceivedMessages([]);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen snap-start flex flex-col justify-center space-y-10">
      
      {/* Page Title Header */}
      <div className="border-b border-slate-300 pb-5">
        <span className="font-mono text-xs text-[#A0522D] uppercase tracking-wider font-semibold">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1A202C] mt-1">
          Academic Office & Consultations
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-2xl">
          Schedule office discussions, inquire about upcoming software capstone themes, or coordinate joint academic research opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Office Details and Schedules */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Contacts */}
          <div className="bg-white rounded-3xl p-6 border border-slate-300/60 shadow-xs space-y-6">
            <h3 className="font-display font-bold text-lg text-[#1A202C]">
              Direct Contacts
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A5568]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#4A5568] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#1A202C]">Physical Office</div>
                  <div className="text-slate-500">{LECTURER_PROFILE.office}</div>
                  <div className="text-[11px] text-[#A0522D] font-medium font-mono">Department of Software Engineering</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#1A202C]">Faculty Email</div>
                  <a href={`mailto:${LECTURER_PROFILE.email}`} className="text-[#A0522D] hover:underline font-mono">
                    {LECTURER_PROFILE.email}
                  </a>
                  <div className="text-[11px] text-slate-400">Response timeframe: Within 24-48 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#A0522D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#1A202C]">Office Phone</div>
                  <div className="text-slate-500">{LECTURER_PROFILE.phone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Hours */}
          <div className="bg-[#1A202C]/95 rounded-3xl p-6 border border-[#D4AF37]/35 text-white space-y-4">
            <h3 className="font-display font-bold text-base text-[#D4AF37] flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Office Consultation Hours</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dr. Zengeni maintains traditional walk-in times during the semester. Students are requested to prepare concrete agendas prior to visiting:
            </p>

            <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-2 bg-slate-900 px-4 py-2 font-semibold text-slate-300 border-b border-slate-800">
                <span>Day</span>
                <span>Time Frame</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-2 bg-slate-900/60 border-b border-slate-800">
                <span>Tuesday</span>
                <span className="text-[#D4AF37] font-mono">14:00 - 16:00</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-2 bg-slate-900/60 border-b border-slate-800">
                <span>Thursday</span>
                <span className="text-[#D4AF37] font-mono">14:00 - 16:00</span>
              </div>
              <div className="grid grid-cols-2 px-4 py-2 bg-slate-900/60">
                <span>Other Days</span>
                <span className="text-slate-400">By email booking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-300/60 shadow-sm space-y-6">
          
          <div className="space-y-1.5">
            <h2 className="text-xl font-display font-bold text-[#1A202C]">
              Transmission Form
            </h2>
            <p className="text-xs text-slate-500">
              Submit your inquiry directly. The fields below will validate automatically before submission.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Display validation error indicators if any */}
            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-600 text-xs p-3.5 rounded-xl border border-red-200 font-medium flex gap-2 items-start"
              >
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Display success banner */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-700 text-xs p-4 rounded-xl border border-green-200 font-medium flex gap-3 items-start"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Transmission Succeeded!</div>
                  <p className="text-slate-500 mt-0.5">
                    Your form details saved to current mock inbox at the bottom of the page.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#1A202C] block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Liam Nkosi"
                  disabled={isSending}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#A0522D]/40 focus:outline-hidden focus:bg-white transition-all disabled:opacity-60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#1A202C] block">
                  Primary Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. liam.nkosi@example.com"
                  disabled={isSending}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#A0522D]/40 focus:outline-hidden focus:bg-white transition-all disabled:opacity-60"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#1A202C] block">
                  Academic Affiliation
                </label>
                <select
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleInputChange}
                  disabled={isSending}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#A0522D]/40 focus:outline-hidden focus:bg-white transition-all disabled:opacity-60 cursor-pointer"
                >
                  <option>Undergraduate Student</option>
                  <option>Postgraduate Student</option>
                  <option>Faculty Peer / Scholar</option>
                  <option>Industry Partner</option>
                  <option>Administrative Staff</option>
                  <option>Other / General Client</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-[#1A202C] block">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. SE-302 Exam Review Question"
                  disabled={isSending}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#A0522D]/40 focus:outline-hidden focus:bg-white transition-all disabled:opacity-60"
                />
              </div>

            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-bold text-[#1A202C] block">
                Detailed Message Content * (Min. 10 chars)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Type your academic or project inquiry here. Please include group codes or student numbers when applicable..."
                disabled={isSending}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#A0522D]/40 focus:outline-hidden focus:bg-white transition-all resize-none disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-[#A0522D] hover:bg-[#A0522D]/90 text-white font-medium text-xs sm:text-sm py-3 rounded-xl border border-[#D4AF37]/30 transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting Secure Packet...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Consultation Request</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>

      </div>

      {/* Inbox section as a separate snap screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen snap-start flex flex-col justify-center">
      {/* 5. Simulated Inbox Display Drawer Section */}
      <section className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-[#D4AF37]/40 text-white flex items-center justify-center shadow-inner">
              <Inbox className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-[#1A202C] flex items-center gap-2">
                <span>Dr. Zengeni's Faculty Inbox Queue</span>
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                Simulated Administrative Console · Live Client-Side Database
              </p>
            </div>
          </div>

          {receivedMessages.length > 0 && (
            <button
              onClick={handleClearInbox}
              className="text-xs font-mono font-bold text-[#A0522D] hover:text-[#A0522D]/80 border border-dashed border-[#A0522D]/40 hover:border-[#A0522D]/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Clear Messages Log
            </button>
          )}
        </div>

        {/* Display received message item bubbles */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
          {receivedMessages.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <FileCheck className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold">Simbi Inbox Queue Empty</p>
              <p className="text-xs">Submit the transmission form above to test this active system logging loop!</p>
            </div>
          ) : (
            receivedMessages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl relative space-y-3 shadow-xs"
              >
                {/* Meta header labels */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#1A202C]">{msg.name}</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded-full">
                      {msg.affiliation}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A0522D]">{msg.email}</span>
                </div>

                {/* Subj and msg text */}
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-slate-800 text-sm">
                    {msg.subject}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed whitespace-pre-wrap bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs font-medium">
                    {msg.message}
                  </p>
                </div>

                {/* Simulated timestamp node info */}
                <div className="flex justify-end text-[9px] text-slate-400 font-mono italic">
                  <span>Logged Local-Storage Frame #0{receivedMessages.length - index}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
      </div>

    </div>
  );
}
