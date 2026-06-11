import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { LOCALIZATION, EST_LOCATIONS } from "../data";
import { Mail, Phone, MapPin, Shield, CheckCircle, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const dict = LOCALIZATION[language];
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const links = [
    { label: dict.navHome, tab: "home" },
    { label: dict.navAbout, tab: "about" },
    { label: dict.navProducts, tab: "products" },
    { label: dict.navServices, tab: "services" },
    { label: dict.navProcess, tab: "process" },
    { label: dict.navQuality, tab: "quality" },
    { label: dict.navSustainability, tab: "sustainability" },
    { label: dict.navCareers, tab: "careers" },
    { label: dict.navBlog, tab: "blog" },
    { label: dict.navPortal, tab: "portal" }
  ];

  return (
    <footer id="global-footer" className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-12 px-4 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 border-b border-zinc-800 pb-12">
          
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded bg-indigo-500 mr-2 flex items-center justify-center text-white text-xs font-bold font-mono">I</div>
              <span className="text-white hover:text-indigo-400 font-bold tracking-tight uppercase text-md">Integra Mfg</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-4">
              Providing Tier-1 automated metallurgy and cyber-physical engineering solutions for critical aviation, nuclear power, and marine heavy transportation nodes.
            </p>
            <div className="flex space-x-3 text-[10px] font-mono tracking-wider">
              <span className="flex items-center text-emerald-400 uppercase gap-1">
                <Shield className="h-3 w-3" /> ISO 9001
              </span>
              <span className="flex items-center text-emerald-400 uppercase gap-1">
                <Shield className="h-3 w-3" /> AS9100D
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-zinc-200 uppercase mb-4">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {links.map((lnk, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(lnk.tab)}
                  className="text-left text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5 cursor-pointer"
                >
                  <ArrowUpRight className="h-3 w-3 opacity-50" />
                  {lnk.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-zinc-200 uppercase mb-4">Global Offices</h4>
            <div className="space-y-3 text-xs">
              {EST_LOCATIONS.map((loc, idx) => (
                <div key={idx} className="border-l-2 border-zinc-700 pl-3">
                  <span className="text-zinc-200 uppercase font-bold text-[10px] leading-none block">{loc.city}</span>
                  <span className="text-zinc-500 block text-[10px] my-0.5 leading-none">{loc.role}</span>
                  <span className="text-[11px] block text-zinc-400">{loc.phone}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-zinc-200 uppercase mb-4">Newsletter & Subscriptions</h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Stay updated with physical engineering advancements, case summaries, audit filings, and raw material index forecasts.
            </p>
            {subscribed ? (
              <div className="rounded-lg bg-emerald-950/40 border border-emerald-900/60 p-3 text-xs text-emerald-400 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Successfully added code parameters to newsletter core roster. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineering-procure@firm.com"
                  className="bg-zinc-800 border border-zinc-700 px-3 py-1.5 text-xs text-zinc-200 rounded-lg max-w-[190px] w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Integra Global Manufacturing Inc. All global fabrication rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-mono">
            <span className="hover:text-zinc-300 cursor-pointer">Security Cleared Tier 1</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">ITAR Registered</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
