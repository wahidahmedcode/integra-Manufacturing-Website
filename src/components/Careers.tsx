import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { CAREER_LISTINGS } from "../data";
import { JobListing } from "../types";
import { Briefcase, MapPin, DollarSign, Calendar, Upload, CheckCircle, ArrowRight, User, Mail, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Careers: React.FC = () => {
  const { language } = useApp();
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  
  // Apply Form states
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { title: "Global Training Desk", desc: "Gain certifications in AS9100 metrics, Siemens SCADA design, and robotic metallurgy handling." },
    { title: "Healthcare Shield", desc: "100% comprehensive medical, dental, and orthopedic rehabilitation coverage packages." },
    { title: "Circular Equity Plans", desc: "Performance bonuses tied straight to factory OEE yields and waste reduction indicators." }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setUploadedFileName(files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFileName(files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && emailAddress && uploadedFileName) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmailAddress("");
    setUploadedFileName("");
    setSubmitted(false);
    setSelectedJob(null);
  };

  return (
    <div id="view-careers" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2 font-mono">Build with Us</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Active Operational Careers</p>
          <p className="text-sm text-zinc-505 dark:text-zinc-400 mt-4 max-w-2xl mx-auto领先-relaxed">
            Construct the hardware of physical infrastructure. We hire precision aerospace designers, SCADA network developers, and advanced metallurgists.
          </p>
        </div>

        {/* Benefits cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
              <span className="text-[10px] font-mono text-indigo-505 uppercase font-bold tracking-widest block mb-2">Benefit Package</span>
              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-100 mb-2">{b.title}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Job Listings index */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Current Plant Openings</h3>
          
          {CAREER_LISTINGS.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-808 bg-white dark:bg-zinc-900 p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-50 dark:bg-zinc-950 text-indigo-650 dark:text-indigo-400 uppercase border border-zinc-150 dark:border-zinc-800/80">
                    {job.department}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-zinc-100 text-zinc-500 uppercase border border-zinc-200 dark:bg-zinc-950 dark:text-zinc-450 dark:border-zinc-850">
                    {job.type}
                  </span>
                </div>

                <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-100 mb-2 leading-tight">
                  {job.title}
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-zinc-420" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-zinc-420" /> Experience: {job.experience}</span>
                  <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5 text-zinc-420" /> {job.salary}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all self-end sm:self-auto cursor-pointer"
              >
                Review & Apply
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* DETAILED APPLICANT POPUP FORM WITH DRAG AND DROP FILE UPLOADER */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 pointer-events-auto" onClick={() => resetForm()} />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative z-20 pointer-events-auto text-zinc-900 dark:text-zinc-50 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => resetForm()}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-808 text-zinc-500"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">Application Submitted!</h3>
                  <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed mb-6">
                    Applicant code registered for file "{uploadedFileName}". Representative from our {selectedJob.location} division will review logs and contact you within 3 business days.
                  </p>
                  <button
                    onClick={() => resetForm()}
                    className="px-6 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase"
                  >
                    Close Log
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-zinc-450 uppercase tracking-widest block mb-1">{selectedJob.department}</span>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white leading-tight mb-2">{selectedJob.title}</h3>
                    <span className="text-xs text-indigo-500 font-semibold">{selectedJob.location}</span>
                  </div>

                  {/* Requirements details */}
                  <div className="space-y-4 mb-6 text-xs text-zinc-650 dark:text-zinc-400">
                    <div>
                      <h4 className="font-bold text-zinc-950 dark:text-zinc-150 uppercase tracking-wide mb-1">Overview Description:</h4>
                      <p className="leading-relaxed text-[11px]">{selectedJob.description}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-zinc-950 dark:text-zinc-150 uppercase tracking-wide mb-1.5">Key Core Duties:</h4>
                      <div className="space-y-1 text-[11px]">
                        {selectedJob.responsibilities.map((r, idx) => (
                          <span key={idx} className="block">• {r}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-zinc-950 dark:text-zinc-150 uppercase tracking-wide mb-1.5 font-mono">Prerequisite Qualifications:</h4>
                      <div className="space-y-1 text-[11px]">
                        {selectedJob.requirements.map((r, idx) => (
                          <span key={idx} className="block">• {r}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* HTML application Form */}
                  <form onSubmit={handleSubmit} className="border-t border-zinc-150 dark:border-zinc-800 pt-6 space-y-4">
                    <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-2">Applicant Entry Dossier</span>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Contact Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Elizabeth Mercer"
                          className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-505"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Email Coordinates</label>
                        <input
                          type="email"
                          required
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="elizabeth@mit-metal.edu"
                          className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-505"
                        />
                      </div>
                    </div>

                    {/* Integrated DRAG AND DROP CV File Upload Section */}
                    <div>
                      <label className="text-[10px] uppercase font-mono text-zinc-505 block mb-1">CV Portfolio Upload</label>
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-xl p-5 text-center transition-colors relative ${
                          isDragging
                            ? "border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20"
                            : uploadedFileName
                            ? "border-emerald-500/30 bg-emerald-500/5"
                            : "border-zinc-200 dark:border-zinc-808 bg-zinc-50/50 dark:bg-zinc-950/20 hover:border-zinc-300"
                        }`}
                      >
                        <input
                          type="file"
                          id="cv-file-picker"
                          accept=".pdf,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          required={!uploadedFileName}
                        />

                        {uploadedFileName ? (
                          <div className="flex flex-col items-center">
                            <CheckCircle className="h-7 w-7 text-emerald-500 mb-2" />
                            <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">{uploadedFileName}</span>
                            <span className="text-[10px] text-zinc-400 block mt-1">Drag another file or click to overwrite</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <Upload className="h-6 w-6 text-zinc-400 mb-2" />
                            <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 block">Drag & Drop CV File Here</span>
                            <span className="text-[10px] text-zinc-500 block mt-1">Supports PDF, DOCX formats (Max 8MB)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase rounded-lg shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Applications Coordinates</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
