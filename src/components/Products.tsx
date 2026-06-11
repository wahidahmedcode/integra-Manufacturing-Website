import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { MOCK_PRODUCTS } from "../data";
import { Product } from "../types";
import { Search, SlidersHorizontal, ArrowRight, X, Cpu, FileDown, Layers, HelpCircle, AlertCircle, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Products: React.FC = () => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // AI Recommender states
  const [aiInput, setAiInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");

  const categories = ["All", "Aerospace", "Energy Systems", "Industrial Components"];

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Call Gemini to get product recommendations based on metallurgical environment
  const handleGetAiRecommendation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    setAiLoading(true);
    setAiResult("");

    try {
      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `As an aerospace/industrial metallurgy engineer, recommend the best material specifications or allied components for this custom project/environment: "${aiInput}". 
              If any of our catalog products seem relevant (Titanium Spars, Copper Core Windings, Double-Helix Gears, Hydraulic Monoblock, Cobalt-Chromium Rotors), highlight them. Provide precise hardening indices, tolerances, and DIN/ASTM standards.`
            }
          ]
        })
      });

      if (res.ok) {
        const data = await res.json();
        setAiResult(data.content);
      } else {
        setAiResult("Metallurgical simulation failed. Please ensure environment parameters conform to certified standards.");
      }
    } catch (err) {
      console.error(err);
      setAiResult("Service unavailable. Check local network channels.");
    } finally {
      setAiLoading(false);
    }
  };

  const downloadDatasheet = (prod: Product) => {
    // Simulated PDF download message
    alert(`[DATASHEET GENERATION]
Product ID: ${prod.id}
Specification Norm: EN 10204 3.1 Certified
File: ${prod.name.replace(/\s+/g, "_")}_technical_specification_datasheet_v2.pdf

Preparing mill chemical composition tracking & structural testing profiles.
The file has been successfully packaged into your client portal logs.`);
  };

  return (
    <div id="view-products" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Technical Catalog</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Industrial Product Registry</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
            Search, filter, and review components designed for structural rigidity and high thermal resistance, featuring complete AS9102 aerospace testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Side: Directory Filters & Cards */}
          <div className="lg:col-span-8">
            
            {/* Search & Tabs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-xs">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter by titanium, gear, core, pressure..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-zinc-50 text-zinc-650 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards List */}
            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 p-12 text-center bg-white dark:bg-zinc-900/50">
                <Layers className="h-10 w-10 text-zinc-400 mx-auto mb-4 stroke-[1.5]" />
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-300 block mb-1">No matching products resolved.</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Try clearing filter conditions or adjusting search phrases.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img src={prod.imageUrl} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                      <span className="absolute top-3 left-3 px-2 py-1 text-[9px] font-mono uppercase font-bold text-white bg-indigo-600 rounded">
                        {prod.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] font-mono text-indigo-500 font-bold block mb-1">{prod.id}</span>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                        {prod.description}
                      </p>

                      <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-500">Yield limit:</span>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">{prod.specifications["Yield Strength"] || prod.specifications["Thermal Limits"] || "Standard"}</span>
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-950 px-6 py-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-between">
                      <button
                        onClick={() => downloadDatasheet(prod)}
                        className="text-[10px] font-mono uppercase font-bold text-zinc-500 hover:text-indigo-500 flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileDown className="h-4 w-4" />
                        <span>PDF Datasheet</span>
                      </button>

                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="text-[10px] font-mono uppercase font-bold text-indigo-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: AI Material Recommender Widget */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-linear-to-b from-zinc-900 to-black text-white shadow-xl relative overflow-hidden">
              {/* Highlight background lines */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold block leading-none">Smart Assistant</span>
                    <h3 className="text-sm font-bold text-zinc-100 uppercase">AI Metallurgical Advisor</h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  Input target conditions (thermals, pressure indices, corrosive acids) and our server-side model recommends ideal metal grades, processing methods, and compliance directives.
                </p>

                <form onSubmit={handleGetAiRecommendation} className="space-y-3">
                  <textarea
                    rows={3}
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="We need a 50mm heavy structural pin to tolerate 900°C exposure in continuous sulfuric acid wash environments..."
                    className="w-full p-3 text-xs bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={aiLoading}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg disabled:bg-zinc-800 disabled:text-zinc-500 rounded-lg font-bold text-xs uppercase transition-all tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {aiLoading ? (
                      <>
                        <div className="h-3.5 w-3.5 border-2 border-zinc-400 border-t-zinc-100 rounded-full animate-spin" />
                        <span>Analyzing Alloys...</span>
                      </>
                    ) : (
                      <>
                        <span>Recommend Metallurgy</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>

                {/* AI Outputs */}
                <AnimatePresence>
                  {aiResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 border-t border-zinc-800 pt-5 text-xs text-zinc-300 leading-relaxed overflow-hidden"
                    >
                      <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-[11px] prose prose-invert max-h-[300px] overflow-y-auto">
                        <span className="text-[10px] uppercase font-bold text-indigo-400 block mb-2">● Advisor Recommendation Logs</span>
                        <div className="whitespace-pre-line">{aiResult}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* General FAQs */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 shadow-xs">
              <span className="text-[10px] font-mono text-zinc-450 uppercase font-bold tracking-widest block mb-4">Procurement QA</span>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200 mb-1">What is the Minimum Order Quantity?</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                    MOQ depends tightly on material. Standard structural steel has a 10-piece threshold, while custom single-crystal turbine blades require titanium tooling runs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-200 mb-1">How can we audit heat forge trials?</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                    Log chemical indices by accessing the customer ERP Portal using your provided project order identifier keys.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* OVERLAY SPECIFICATIONS DIALOG POPUP */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 pointer-events-auto" onClick={() => setSelectedProduct(null)} />
            
            {/* Content modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative z-20 pointer-events-auto text-zinc-900 dark:text-zinc-50 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-300 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex gap-4 items-center mb-6">
                <span className="bg-indigo-100 dark:bg-zinc-950 p-2.5 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Cpu className="h-6 w-6" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400">{selectedProduct.id}</span>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white leading-none">{selectedProduct.name}</h3>
                </div>
              </div>

              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 mb-6" />

              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Mechanical Profile</h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Technical Specification Matrix</h4>
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden font-mono text-xs mb-6">
                {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (
                  <div
                    key={key}
                    className={`flex justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 last:border-0 ${
                      idx % 2 === 0 ? "bg-zinc-50/50 dark:bg-zinc-950/20" : ""
                    }`}
                  >
                    <span className="text-zinc-500">{key}</span>
                    <span className="font-bold text-zinc-900 dark:text-white">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-150 dark:border-zinc-800 justify-end">
                <button
                  onClick={() => {
                    downloadDatasheet(selectedProduct);
                  }}
                  className="px-4 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Spec Datasheet</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    const el = document.getElementById("quote-material-input") as HTMLInputElement;
                    if (el) el.value = selectedProduct.name;
                  }}
                  className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Inquire Spec Forging</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
