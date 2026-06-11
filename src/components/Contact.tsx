import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { EST_LOCATIONS } from "../data";
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, FileText, Bot, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Contact: React.FC = () => {
  const { language, addQuote, loading } = useApp();

  // Contact form state
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("Aerospace");
  const [material, setMaterial] = useState("Titanium Alloy Grade 5");
  const [quantity, setQuantity] = useState("500");
  const [tolerance, setTolerance] = useState("± 0.005 mm");
  const [notes, setNotes] = useState("");

  const [lastQuoteResult, setLastQuoteResult] = useState<any>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const materialsList = [
    "Titanium Alloy Grade 5",
    "Structural Steel ASTM A36",
    "Stainless Steel 316L",
    "Aircraft Aluminum 7075-T6",
    "Cobalt-Chromium Alloy Haynes 188",
    "Oxygen-Free Copper Pure Core"
  ];

  const tolerancesList = [
    "± 0.005 mm (CNC 5-Axis Premium)",
    "± 0.01 mm (CMM Calibration Required)",
    "± 0.1 mm (Standard Structural)",
    "± 0.5 mm (Bulk Forged Frame)"
  ];

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email || !material) return;

    const res = await addQuote({
      clientName,
      email,
      industry,
      material,
      quantity: parseInt(quantity) || 1,
      tolerance,
      notes
    });

    if (res) {
      setLastQuoteResult(res);
      setContactSubmitted(true);
    }
  };

  const resetForm = () => {
    setClientName("");
    setEmail("");
    setNotes("");
    setContactSubmitted(false);
    setLastQuoteResult(null);
  };

  return (
    <div id="view-contact" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2 font-mono">Inquiry & Quoting Desk</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Contact Us & Custom Spec Planner</p>
          <p className="text-sm text-zinc-505 dark:text-zinc-400 mt-4 leading-relaxed font-normal">
            Transmit custom specs to our active mechanical engineering desks. Our server-side model yields instant cost estimates, compliance testing suggestions, and intermodal lead times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left panel: Sourcing planner contact details & map vector */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase text-indigo-501 font-bold tracking-widest block mb-4">Direct Communication Channel</span>
              
              <div className="space-y-4 text-xs font-medium">
                <div className="flex bg-zinc-50 dark:bg-zinc-950/20 p-3 rounded-xl border border-zinc-100 dark:border-zinc-850 gap-3 items-center">
                  <span className="shrink-0 h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Industrial Procurement Desk:</span>
                    <span className="text-zinc-900 dark:text-white font-bold">sourcing@integra-global.com</span>
                  </div>
                </div>

                <div className="flex bg-zinc-50 dark:bg-zinc-950/20 p-3 rounded-xl border border-zinc-100 dark:border-zinc-850 gap-3 items-center">
                  <span className="shrink-0 h-8 w-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">General Switchboard Phone:</span>
                    <span className="text-zinc-900 dark:text-white font-bold">+49 (40) 892-0120</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Headquarters addresses list */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-808 rounded-2xl p-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase text-indigo-550 font-bold tracking-widest block mb-4">Meteo & Factory Locations</span>
              
              <div className="space-y-4 text-xs">
                {EST_LOCATIONS.map((loc, idx) => (
                  <div key={idx} className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1">
                    <span className="text-zinc-900 dark:text-zinc-105 font-bold uppercase tracking-wider text-[11px] block">{loc.city} ({loc.country})</span>
                    <span className="text-[10px] font-mono text-zinc-500 block my-0.5">{loc.role}</span>
                    <span className="text-[11px] text-zinc-420 block font-medium mt-1 leading-normal">{loc.address}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Dynamic custom cost quote builder */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-md relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {contactSubmitted && lastQuoteResult ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-6"
                  >
                    <div className="text-center border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-4">
                      <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2">Technical Quote Analysis Generated!</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
                        Your custom metallurgy specification has been analyzed by our server-side model. The compiled log has been recorded under Quote ID <span className="font-mono font-bold text-indigo-550">{lastQuoteResult.id}</span> inside the customer portal.
                      </p>
                    </div>

                    {/* Markdown AI cost analysis output container */}
                    <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-150 dark:border-zinc-850 p-6 font-mono text-xs text-zinc-750 dark:text-zinc-300">
                      <div className="flex items-center gap-2 mb-4 border-b border-zinc-200 dark:border-zinc-850 pb-2.5">
                        <Bot className="h-5 w-5 text-indigo-500 shrink-0" />
                        <span className="text-[10px] uppercase font-bold text-indigo-400">● AI Technical Review & Budget Indicators</span>
                      </div>
                      <div className="space-y-1 whitespace-pre-line prose dark:prose-invert text-[11px] leading-relaxed">
                        {lastQuoteResult.aiAnalysis}
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <button
                        onClick={resetForm}
                        className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-850 dark:bg-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase"
                      >
                        Plan Another Specification
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="space-y-6">
                    <div className="border-b border-zinc-150 dark:border-zinc-800 pb-4 mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-indigo-500" />
                      <div>
                        <span className="text-[10px] font-mono uppercase text-zinc-500 block">Specification Portal</span>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">Interactive Fabrication Cost Builder</h3>
                      </div>
                    </div>

                    <form onSubmit={handleSubmitQuote} className="space-y-5">
                      
                      {/* Grid 1: Name & email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Company / Representant Name</label>
                          <input
                            type="text"
                            required
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="Sarasota Aerospace Procure"
                            className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-mono text-zinc-505 block mb-1">Corporate Email Address</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="aviation-desk@sarasota.com"
                            className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                          />
                        </div>
                      </div>

                      {/* Grid 2: industry & target material selector */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Sector Classification</label>
                          <select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100 cursor-pointer"
                          >
                            <option value="Aerospace">Aerospace</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Energy Systems">Energy Systems</option>
                            <option value="Medical Devices">Medical Devices</option>
                            <option value="Defense">Defense Procurement</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Target Alloy / Material Sourcing</label>
                          <select
                            id="quote-material-input"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                            className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-801 dark:text-zinc-100 cursor-pointer"
                          >
                            {materialsList.map((m) => (
                              <option key={m} value={m}>{m}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Slider 1: quantity count */}
                      <div>
                        <div className="flex justify-between items-center mb-1 text-xs">
                          <label className="text-[10px] uppercase font-mono text-zinc-500 block">Batch Order Volume</label>
                          <span className="font-mono font-bold text-indigo-505">{quantity} Pcs</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="5000"
                          step="10"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                      </div>

                      {/* Dropdown 2: tolerance precision parameter */}
                      <div>
                        <label className="text-[10px] uppercase font-mono text-zinc-505 block mb-1">Target Surface Tolerance Precision</label>
                        <select
                          value={tolerance}
                          onChange={(e) => setTolerance(e.target.value)}
                          className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-801 dark:text-zinc-100 cursor-pointer"
                        >
                          {tolerancesList.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      {/* Description / special notes */}
                      <div>
                        <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Special Machining / Chemical Testing Notes</label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Please specify if coordinate tracking documents, CMM inspections, or ASTM heat forge normalization treatments are demanded..."
                          className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-indigo-640 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold text-xs uppercase rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <div className="h-3.5 w-3.5 border-2 border-zinc-400 border-t-zinc-100 rounded-full animate-spin" />
                            <span>Compiling Spec Costing Index...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Analyze Specification & Generate Quote</span>
                          </>
                        )}
                      </button>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
