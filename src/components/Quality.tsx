import React from "react";
import { useApp } from "../context/AppContext";
import { LOCALIZATION } from "../data";
import { ShieldCheck, Award, FileSpreadsheet, Eye, FileText, BadgeCheck } from "lucide-react";

export const Quality: React.FC = () => {
  const { language } = useApp();
  const dict = LOCALIZATION[language];

  const standards = [
    { norm: "AS 9100 Revision D", context: "Aviation, Space and Defense Sourcing Standard", detail: "Mandates strict material source testing, First Article Inspections (AS9102), and complete lot traceability indexes for aerospace components." },
    { norm: "ISO 9001 : 2015", context: "General Quality Management System Certification", detail: "Core framework directing our continuous loop performance, toolpath calibrations, and client feedback logging protocols." },
    { norm: "ISO 13485 : 2016", context: "Implantable Medical Devices Fabrication Standard", detail: "Provides regulatory oversight for cleanroom operations and chemical purity standards when forging implantable bones." },
    { norm: "ITAR Registered", context: "International Traffic in Arms Defense Sourcing Clearance", detail: "Under USA State Dept parameters, Integra is authorized to design and fabricate structural hardware for airframes and propulsion pods." }
  ];

  const reports = [
    { id: "AUD-2026-61", type: "External Compliance Audit", facility: "Hamburg Global Foundry", auditor: "TÜV Nord Group", result: "99.98% Conformity Rating", date: "May 12, 2026" },
    { id: "AUD-2026-62", type: "Nadcap Pyrometry Profiling", facility: "Detroit Robotics & Assembly Hub", auditor: "Performance Review Institute", result: "Pass [Zero Deviations]", date: "April 28, 2026" },
    { id: "AUD-2026-63", type: "AS9102 Rev C Verification Review", facility: "Tokyo Precision Lab", auditor: "Sarasota Aero Procurement", result: "Approved First Article ID #891", date: "May 30, 2026" }
  ];

  return (
    <div id="view-quality" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Standards & Testing</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Quality Assurance & Compliance</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 font-normal">
            Every material batch, weld boundary, and machined plane is certified to extreme metrics of exactness, eliminating mechanical risk down to the micron.
          </p>
        </div>

        {/* standards index */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {standards.map((std, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs relative">
              <span className="absolute top-4 right-4 text-emerald-500">
                <BadgeCheck className="h-6 w-6 stroke-[1.5]" />
              </span>
              <span className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest block mb-1">Security Standard</span>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-3">{std.norm}</h3>
              <span className="text-xs font-medium text-zinc-500 block mb-4 italic">{std.context}</span>
              <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
                {std.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Audits archive list */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-150 dark:border-zinc-880 pb-6 mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase text-indigo-500 font-bold block mb-1">Governmental & Tier-1 Filings</span>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white leading-none">External Audit & Compliance Log</h3>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 lg:text-right mt-2 md:mt-0">
              Active ledger status: 100% compliant
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 font-mono text-[10px] uppercase">
                  <th className="py-3 px-4">Audit identifier</th>
                  <th className="py-3 px-4">Standard Classification</th>
                  <th className="py-3 px-4">Inspected Facility</th>
                  <th className="py-3 px-4">Auditing Organ</th>
                  <th className="py-3 px-4">Audit Statement</th>
                  <th className="py-3 px-4">Date Filed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-medium">
                {reports.map((rep) => (
                  <tr key={rep.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-500">{rep.id}</td>
                    <td className="py-3.5 px-4 text-zinc-900 dark:text-zinc-100">{rep.type}</td>
                    <td className="py-3.5 px-4 text-zinc-500 dark:text-zinc-400">{rep.facility}</td>
                    <td className="py-3.5 px-4 text-zinc-500 dark:text-zinc-400">{rep.auditor}</td>
                    <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 uppercase font-mono font-bold">{rep.result}</span></td>
                    <td className="py-3.5 px-4 text-zinc-400 font-mono">{rep.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
