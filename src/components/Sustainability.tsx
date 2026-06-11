import React from "react";
import { useApp } from "../context/AppContext";
import { Leaf, Award, Compass, Zap, Recycle, Trash2 } from "lucide-react";

export const Sustainability: React.FC = () => {
  const { language } = useApp();

  const esgGoals = [
    { title: "Induction Heat Scaling", metric: "-42% Carbon", desc: "Transited from natural gas heating furnaces to localized, electromagnetic coil arrays inside Hamburg and Detroit forge ovens.", icon: Zap, color: "text-amber-500 bg-amber-500/10" },
    { title: "Circular Metallurgy", metric: "94.2% Looping", desc: "Forced recycling loops for structural iron scraps, titanium shavings, and aluminum chips directly back to melting blocks.", icon: Recycle, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Cooling Water Recycle", metric: "100% Closed Loop", desc: "Zero water dumping across operations. Closed loop cooling fluid recycling nodes filter particulate oil waste in-line.", icon: Trash2, color: "text-blue-500 bg-blue-500/10" }
  ];

  return (
    <div id="view-sustainability" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">Resource Preservation</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Green Manufacturing & Circular ESG</p>
          <p className="text-sm text-zinc-505 dark:text-zinc-400 mt-4 leading-relaxed font-normal">
            We are transforming structural heavy metallurgy from a high-extraction cycle into a self-balancing, closed-loop physical automation loop.
          </p>
        </div>

        {/* Dynamic ESG dials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {esgGoals.map((g, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs">
              <div className={`h-11 w-11 rounded-lg ${g.color} flex items-center justify-center mb-6`}>
                <g.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-500 uppercase font-bold tracking-widest block mb-1">Target Milestone</span>
              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-100 mb-2">{g.title}</h3>
              <span className="text-xl font-extrabold text-zinc-900 dark:text-white block mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">{g.metric}</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ESG Target Metrics Chart View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold block mb-2">Performance Tracking</span>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6">Carbon Footprint Abatement Forecast</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Integra is on target to establish carbon neutrality inside all global foundries and logistic centers by 2032. By sourcing scrap metals locally and transitioning assembly processes to 100% hydroelectric grids, we maintain clean production without sacrificing tensile load limits.
            </p>
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900 font-mono text-xs text-zinc-500">
              <span>Primary Power Ingestion:</span>
              <span className="font-bold text-emerald-500 block sm:inline sm:ml-2">100% Certified Hydroelectric-Grid Sourced</span>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-805 p-6 bg-zinc-900 shadow-xl">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-4">Carbon Footprint Metric Progress (Metric Tons CO₂e / Year)</span>
            
            {/* SVG Representation of a nice ESG progress bar chart */}
            <div className="py-6 flex flex-col justify-center items-center">
              <svg viewBox="0 0 500 200" className="w-full h-auto text-zinc-400 font-mono text-[9px] font-bold">
                {/* Axes */}
                <line x1="40" y1="20" x2="40" y2="160" stroke="#4b5563" strokeWidth="1" />
                <line x1="40" y1="160" x2="480" y2="160" stroke="#4b5563" strokeWidth="1" />
                
                {/* Labels */}
                <text x="5" y="160" fill="#9ca3af">0</text>
                <text x="5" y="90" fill="#9ca3af">25K</text>
                <text x="5" y="30" fill="#9ca3af">50K</text>
                
                {/* Bar 1: 2020 */}
                <rect x="80" y="35" width="40" height="125" fill="#ef4444" rx="3" />
                <text x="85" y="175" fill="#ffffff">2020 (48K)</text>
                
                {/* Bar 2: 2022 */}
                <rect x="180" y="65" width="40" height="95" fill="#f97316" rx="3" />
                <text x="185" y="175" fill="#ffffff">2022 (36K)</text>

                {/* Bar 3: 2024 */}
                <rect x="280" y="95" width="40" height="65" fill="#eab308" rx="3" />
                <text x="285" y="175" fill="#ffffff">2024 (24K)</text>

                {/* Bar 4: 2026 (Target) */}
                <rect x="380" y="125" width="40" height="35" fill="#10b981" rx="3" />
                <text x="385" y="175" fill="#ffffff">2026 (12K)</text>
              </svg>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-465 leading-relaxed font-mono">
              <span className="text-emerald-500 font-bold block mb-1">✓ Audit Target Status Confirmed</span>
              All emissions filings are transparently audited by the ESG Green Council with full traceability recorded.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
