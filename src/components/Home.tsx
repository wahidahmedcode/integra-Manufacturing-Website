import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { LOCALIZATION, MOCK_PRODUCTS, INDUSTRIES_SERVED } from "../data";
import { Award, Factory, Globe, Users2, ShieldCheck, ArrowRight, ChevronRight, Cpu, Wrench, Sparkles, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export const Home: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const dict = LOCALIZATION[language];

  const stats = [
    { value: "35+", label: dict.yearsExperience, icon: Award, color: "text-amber-500" },
    { value: "5", label: dict.factoriesCount, icon: Factory, color: "text-blue-500" },
    { value: "24+", label: dict.globalPresence, icon: Globe, color: "text-emerald-500" },
    { value: "2,500+", label: dict.workforceCount, icon: Users2, color: "text-indigo-500" }
  ];

  const featured = MOCK_PRODUCTS.slice(0, 3);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  const testimonials = [
    {
      quote: "Integra delivered our double-helix propulsion setups with impeccable precision tolerances of ±0.005mm. The chemical testing documentation and AS9102 reports left zero room for regulatory friction. Absolute Tier-1 performance.",
      author: "Marcus Vance",
      role: "VP of Quality & Procurement, Sarasota Aerospace",
      facility: "Tokyo Quality Lab Verified"
    },
    {
      quote: "Our wind alternator stators demand perfect copper winding with zero insulation voids. Integra's simulated coil winding technology gave us predictable, zero-error parts on schedule. A true ally in green production.",
      author: "Hannelore Schmidt",
      role: "Lead Systems Architect, Rhine Renewable Energy",
      facility: "Hamburg Forge Tested"
    }
  ];

  const certifications = [
    { norm: "AS9100D", title: "Aerospace Structural Standard", issued: "Quality Assurance Council Intl" },
    { norm: "ISO 9001:2015", title: "Management Systems Standard", issued: "TÜV Rheinland Audited" },
    { norm: "ISO 14001", title: "Environmental Management", issued: "ESG Green Council" },
    { norm: "ITAR Registered", title: "Defense Sourcing Authorized", issued: "United States DDTC" }
  ];

  return (
    <div id="view-home" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 px-4 border-b border-zinc-200 dark:border-zinc-900">
        
        {/* Dynamic Industrial Tech Lattice Grid in Background */}
        <div className="absolute inset-0 opacity-15 dark:opacity-25 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/50 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:border-indigo-900/40 dark:bg-indigo-950/40 dark:text-indigo-400 mb-6 uppercase tracking-wider"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>{dict.heroBadge}</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6"
              >
                {dict.heroHeading}
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed"
              >
                {dict.heroSub}
              </motion.p>

              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => setActiveTab("contact")}
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{dict.heroCTA}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveTab("portal")}
                  className="border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-all cursor-pointer"
                >
                  {dict.navPortal}
                </button>
              </motion.div>
            </div>

            {/* Immersive Industrial Graphic Display to replace missing video */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white/75 dark:bg-zinc-900/75 backdrop-blur-md shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 h-2 w-full bg-linear-to-r from-indigo-500 to-emerald-500" />
                
                {/* Simulated Machine Telemetry */}
                <span className="text-[10px] font-mono uppercase text-indigo-500 font-bold block mb-2">● ROBOTIC FORCING CELL F-4</span>
                <span className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 block">Induction Coils Offline</span>
                
                <div className="my-6 space-y-3 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5">
                    <span>Active Force Threshold:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">12,450 kN</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5">
                    <span>Atmosphere Rating:</span>
                    <span className="font-bold text-emerald-500">Argon Seal [OK]</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5">
                    <span>Continuous Duty Cycle:</span>
                    <span className="font-bold text-zinc-900 dark:text-white">100% (No heat bleed)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Power Consumption:</span>
                    <span className="font-bold text-indigo-400">12.4 MWh</span>
                  </div>
                </div>

                <div className="rounded-lg bg-zinc-100 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">Vibration Index</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white">0.0004 mm max (Isolated)</span>
                    </div>
                  </div>
                  <Wrench className="h-5 w-5 stroke-[1.5] text-zinc-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 px-4 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-3">
              {dict.statsTitle}
            </h2>
            <p className="text-lg font-bold text-zinc-700 dark:text-zinc-200 leading-normal">
              {dict.statsTagline}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center mb-4">
                    <st.icon className={`h-5 w-5 ${st.color}`} />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white block mb-2">{st.value}</span>
                </div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block tracking-wider leading-snug">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / SECTORS */}
      <section className="py-20 px-4 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">
              {dict.industriesTitle}
            </h3>
            <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {dict.industriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Sidebar lists */}
            <div className="lg:col-span-4 flex flex-col justify-start space-y-2">
              {INDUSTRIES_SERVED.map((ind, idx) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryIdx(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer ${
                    activeIndustryIdx === idx
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                      : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span>{ind.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>

            {/* Active detail view */}
            <div className="lg:col-span-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold block mb-2">Target Sector Highlight</span>
                <h4 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">
                  {INDUSTRIES_SERVED[activeIndustryIdx].title} Engineering Solutions
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-6">
                  {INDUSTRIES_SERVED[activeIndustryIdx].desc} Integra utilizes certified structural materials designed to withstand continuous heating cycles, high corrosive profiles, and sheer vibration loads common to {INDUSTRIES_SERVED[activeIndustryIdx].title.toLowerCase()} configurations.
                </p>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">Critical Standards Compliance</span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">SAE, ISO 3834-2, NADCAP Certified</span>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">Testing Procedures</span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Liquid Penetrant & X-Ray inspection</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setActiveTab("products")}
                  className="text-xs font-bold uppercase tracking-wider text-indigo-500 hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Browse Category Catalog</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS PREVIEW */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Product Spotlight</h3>
              <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Precision components, engineered at scale.</p>
            </div>
            <button
              onClick={() => setActiveTab("products")}
              className="text-xs font-bold uppercase tracking-wider text-indigo-500 hover:text-indigo-600 shrink-0 mt-4 md:mt-0 flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Catalog</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <div key={item.id} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden relative">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-mono uppercase font-bold text-white bg-indigo-600 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-bold tracking-tight text-white line-clamp-1 mb-2 dark:text-zinc-100">{item.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">{item.description}</p>
                  
                  <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-950 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Max Precision:</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-500">{item.specifications["Tolerance Precision"] || "Standard ±0.1mm"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY / AUDITING STANDARDS GRID */}
      <section className="py-16 px-4 bg-zinc-100 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-500 font-bold block mb-2">Tolerancing & Compliance</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">Absolute Assurance Framework</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                Integra operates under international aerospace, automotive, and heavy transport engineering frameworks. Quality control is not a post-process step; it is mathematically modeled directly inside our raw material routing and CNC cutpath compiler logic.
              </p>
              
              <div className="space-y-4">
                {certifications.map((crt, idx) => (
                  <div key={idx} className="flex gap-3.5 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider block">{crt.norm} • {crt.title}</span>
                      <span className="text-[11px] text-zinc-500">{crt.issued}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-lg">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">Live MES Quality Statistics</span>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-center">
                  <span className="text-2xl font-bold text-emerald-500 block">99.991%</span>
                  <span className="text-[10px] uppercase font-mono text-zinc-500">Yield Reliability Rate</span>
                </div>
                <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 text-center">
                  <span className="text-2xl font-bold text-indigo-500 block">85.4%</span>
                  <span className="text-[10px] uppercase font-mono text-zinc-500">Overall Equipment (OEE)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 block mb-2">Testing Lab Telemetry [Toyota, Detroit, Hamburg]</span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Every forge session log is pushed to an immutable audit record ledger. Clients can retrieve raw spectral breakdown details and certificate numbers inside their secure ERP log center.
                </p>
                <button
                  onClick={() => setActiveTab("quality")}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-indigo-500 hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspection Guidelines</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Client Testimonials</h3>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">Partnering with Global Procurement Leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900/80 shadow-xs relative">
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>
                <div className="flex justify-between items-end border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white block">{test.author}</span>
                    <span className="text-[11px] text-zinc-500">{test.role}</span>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest font-bold">
                    {test.facility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-16 px-4 bg-zinc-900 border-t border-zinc-800 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">Formulate Your Custom Fabrication Requirements Now</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-8">
            Submit your CAD dimensions and tolerances. Our server-side model evaluates structural metallurgical feeds and returns an instant cost proposal, testing workflow catalog, first article indices, and lead time scheduling forecasts.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => setActiveTab("portal")}
              className="border border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            >
              Access ERP Client Center
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
