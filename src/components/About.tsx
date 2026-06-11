import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { LOCALIZATION } from "../data";
import { Target, Compass, Eye, Users, MapPin, Leaf, Shield, Award, Calendar } from "lucide-react";

export const About: React.FC = () => {
  const { language } = useApp();
  const dict = LOCALIZATION[language];

  const values = [
    { title: "Surgical Precision", desc: "We target tolerance thresholds down to raw micron scales of ±0.005mm. No assembly leaves unchecked.", icon: Target },
    { title: "Carbon Balance", desc: "Every forging and cutting cycle aligns with zero-waste metrics and recycled metallurgy pathways.", icon: Leaf },
    { title: "Immutable Integrity", desc: "Full calibration tracking, MTR 10204 reports, and audit trails logged on our secure database.", icon: Shield },
    { title: "Collaborative Sourcing", desc: "We synchronize supply parameters directly with client ERP inventories to eliminate warehouse bloat.", icon: Compass }
  ];

  const timeline = [
    { year: "1991", title: "Hamburg Precision Firm Founded", desc: "Started as a small tooling lab containing two heavy lathes, servicing regional shipyard nodes." },
    { year: "2002", title: "Automated Forge Installation", desc: "Inaugurated our first 8,000-ton hydraulic forging press, transitioning to heavy structural parts." },
    { year: "2012", title: "Aerospace AS9100 Registration", desc: "Upgraded all fabrication standards to earn complete Tier-1 aerospace supplier authorization." },
    { year: "2020", title: "MES Cyber-Physical Loop", desc: "Equipped CNC stations and forge ovens with IoT telemetry arrays connected to server automation loops." },
    { year: "2026", title: "Integra Global Manufacturing Website", desc: "Launching the unified cloud ERP portals and AI fabrication planners across 5 global smart factories." }
  ];

  const leadership = [
    { name: "Dr. Albert Fischer", role: "Chief Executive Officer", joined: "Joined 2008 • Former Boeing Procurement Lead", bio: "Albert directs global scaling initiatives, focusing heavily on robotic factory alignment and long-term ITAR defense clearances." },
    { name: "Sonia Tremblay", role: "Chief Technology Officer", joined: "Joined 2014 • MIT Metallurgy Science Lab", bio: "Sonia manages chemical testing divisions, toolpath optimization loops, and custom titanium heat dissipation research." },
    { name: "Kenji Takahashi", role: "VP of Global Supply & ESG", joined: "Joined 2019 • Tokyo Port Logistics", bio: "Kenji supervises carbon sequestration audits, circular iron scraps recycling loops, and active ocean freight slotting." }
  ];

  return (
    <div id="view-about" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-3">Our Corporate DNA</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6">{dict.aboutTitle}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold mb-4">{dict.aboutSub}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{dict.aboutHistory}</p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900 shadow-xs relative">
            <div className="absolute top-4 right-4 text-indigo-500">
              <Compass className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">{dict.missionTitle}</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {dict.missionDesc}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900 shadow-xs relative">
            <div className="absolute top-4 right-4 text-emerald-500">
              <Eye className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">{dict.visionTitle}</h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {dict.visionDesc}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-indigo-500 uppercase font-bold tracking-widest block mb-2">Pillars of Execution</span>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Our Shared Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
                <div className="h-8 w-8 rounded-lg bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center text-indigo-500 mb-4">
                  <val.icon className="h-4.5 w-4.5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-2">{val.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive History Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-indigo-500 uppercase font-bold tracking-widest block mb-2">Our Milestones</span>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Historical Production Timeline</h3>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white dark:bg-indigo-500 text-[10px] font-mono font-bold">
                  {idx + 1}
                </span>
                <span className="text-xs font-mono font-bold text-indigo-500 block mb-1">YEAR {item.year}</span>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-indigo-500 uppercase font-bold tracking-widest block mb-2">Executive Desk</span>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Leadership & Engineering Board</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((ldr, idx) => (
              <div key={idx} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-indigo-500 block uppercase mb-1">{ldr.joined}</span>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-100">{ldr.name}</h4>
                  <span className="text-xs text-zinc-500 block mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">{ldr.role}</span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{ldr.bio}</p>
                </div>
                <div className="mt-6 flex gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono text-emerald-500 uppercase border border-emerald-500/20 bg-emerald-500/5">
                    Clearance Lv. 1
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono text-indigo-500 uppercase border border-indigo-500/20 bg-indigo-500/5">
                    Board Executive
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
