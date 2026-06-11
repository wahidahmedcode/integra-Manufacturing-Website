import React from "react";
import { useApp } from "../context/AppContext";
import { MOCK_SERVICES } from "../data";
import { Hammer, DraftingCompass, ShieldCheck, Check } from "lucide-react";

export const Services: React.FC = () => {
  const { language } = useApp();

  const getSvcIcon = (iconName: string) => {
    switch (iconName) {
      case "Hammer":
        return <Hammer className="h-6 w-6 stroke-[1.5]" />;
      case "DraftingCompass":
        return <DraftingCompass className="h-6 w-6 stroke-[1.5]" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 stroke-[1.5]" />;
      default:
        return <Hammer className="h-6 w-6 stroke-[1.5]" />;
    }
  };

  return (
    <div id="view-services" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Capabilities Desk</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Industrial Solutions Portfolio</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
            Combining immense hydraulic force, predictive physical simulation modules, and high-precision laser non-destructive testing labs.
          </p>
        </div>

        {/* Detailed services blocks */}
        <div className="space-y-16">
          {MOCK_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm flex flex-col lg:flex-row gap-10 items-stretch"
            >
              
              {/* Core Description */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-zinc-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 border border-zinc-100 dark:border-zinc-800">
                    {getSvcIcon(svc.icon)}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed mb-6">
                    {svc.longDesc}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4 border border-zinc-100 dark:border-zinc-800 font-mono text-[11px]">
                  <span className="text-zinc-500 font-bold block mb-1 uppercase tracking-wide">MES Workflow Steps:</span>
                  <div className="space-y-1 block mt-2 text-zinc-400">
                    {svc.workflow.map((step, idx) => (
                      <span key={idx} className="block last:border-0 pb-1 border-b border-zinc-100 dark:border-zinc-900/40">
                        {idx + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables / Audits list */}
              <div className="lg:w-1/2 bg-zinc-50 dark:bg-zinc-950/40 border-t lg:border-t-0 lg:border-l border-zinc-150 dark:border-zinc-800/80 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-500 font-bold block mb-4">Standard Deliverables Package</span>
                  
                  <div className="space-y-4">
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="h-5 w-5 rounded-full bg-emerald-500/10 font-mono text-emerald-500 text-xs font-bold shrink-0 flex items-center justify-center mt-0.5">
                          ✓
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-305 font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-150 dark:border-zinc-800/80 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">Typical Sizing</span>
                    <span className="font-bold text-zinc-900 dark:text-white">Up to 25 Tons Monoblock</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">Primary Certificate</span>
                    <span className="font-bold text-emerald-500">MTR EN 10204 3.1</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
