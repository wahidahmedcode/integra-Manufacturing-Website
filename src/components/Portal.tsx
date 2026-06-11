import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Activity, ShieldAlert, Truck, Package, Clock, ClipboardList, Send, ToggleLeft, Layers, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

export const Portal: React.FC = () => {
  const { language, telemetry, orders, addOrder, loading } = useApp();

  const [newOrderName, setNewOrderName] = useState("");
  const [newOrderCategory, setNewOrderCategory] = useState("Industrial Components");
  const [newOrderQty, setNewOrderQty] = useState("500");

  const [addSuccess, setAddSuccess] = useState(false);

  const handleAddNewOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOrderName || !newOrderQty) return;

    const res = await addOrder({
      productName: newOrderName,
      category: newOrderCategory,
      quantity: parseInt(newOrderQty) || 1
    });

    if (res) {
      setNewOrderName("");
      setAddSuccess(true);
      setTimeout(() => setAddSuccess(false), 3000);
    }
  };

  return (
    <div id="view-portal" className="transition-colors duration-250 bg-slate-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head */}
        <div className="border-b border-zinc-250 dark:border-zinc-900 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase bg-indigo-50 dark:bg-zinc-950 px-2.5 py-1 rounded text-indigo-600 dark:text-indigo-400 font-bold border border-zinc-200 dark:border-zinc-800">
              MES Client Portal Logs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white mt-3 uppercase font-semibold">Customer ERP & Factory IoT Desk</h2>
          </div>
          
          <div className="flex gap-2 items-center text-xs text-zinc-500 font-mono">
            <RefreshCw className="h-4 w-4 text-emerald-500 animate-spin-slow" />
            <span>Updated: {telemetry ? telemetry.timestamp : "Polling MES..."}</span>
          </div>
        </div>

        {/* Overview Stats badging */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-850 p-5 bg-white dark:bg-zinc-900/85">
            <span className="text-[9px] font-mono uppercase text-zinc-500 block leading-none mb-1">Overall Equipment Effectiveness (OEE)</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white block mt-2">
              {telemetry ? `${telemetry.oee}%` : "84.2%"}
            </span>
            <span className="text-[9px] font-mono text-emerald-500 mt-2 block font-bold">● Operations normal threshold</span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-850 p-5 bg-white dark:bg-zinc-900/85">
            <span className="text-[9px] font-mono uppercase text-zinc-500 block leading-none mb-1 font-mono">Operations Power Draw</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-955 dark:text-white block mt-2">
              {telemetry ? `${telemetry.power} MWh` : "420.4 MWh"}
            </span>
            <span className="text-[9px] font-mono text-indigo-400 mt-2 block font-bold">100% Hydro-Grid Powered</span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-850 p-5 bg-white dark:bg-zinc-900/85">
            <span className="text-[9px] font-mono uppercase text-zinc-550 block leading-none mb-1">Water Recycling Index</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-955 dark:text-white block mt-2">
              {telemetry ? `${telemetry.recycle}%` : "94.2%"}
            </span>
            <span className="text-[9px] font-mono text-emerald-500 mt-2 block font-bold">Closed-Loop cooling filter active</span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-805 p-5 bg-white dark:bg-zinc-900/85">
            <span className="text-[9px] font-mono uppercase text-zinc-500 block leading-none mb-1 font-mono">Finished Crate Throughput</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white block mt-2">
              {telemetry ? `${telemetry.throughput} Units/hr` : "124 Units/hr"}
            </span>
            <span className="text-[9px] font-mono text-indigo-400 mt-2 block font-bold">VCI Vacuum Packing line Active</span>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Active machines telemetry and Logistics */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* IoT Machines logs */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-zinc-150 dark:border-zinc-800 pb-4 mb-4">
                <Activity className="h-5 w-5 text-indigo-500 shrink-0" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">Live Machine Telemetry</h3>
              </div>

              <div className="space-y-4">
                {telemetry && telemetry.machines ? (
                  telemetry.machines.map((m, idx) => (
                    <div key={idx} className="rounded-xl border border-zinc-150 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-950 flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs font-mono">
                      <div>
                        <span className="text-zinc-900 dark:text-zinc-100 font-bold block">{m.name}</span>
                        <span className="text-[9px] uppercase tracking-wide text-zinc-500">Operation Station</span>
                      </div>

                      <div className="flex gap-4">
                        {Object.entries(m.metrics).map(([k, v]) => (
                          <div key={k} className="px-2.5 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 uppercase font-mono text-[10px]">
                            <span className="text-zinc-500">{k}:</span>
                            <span className="font-bold text-zinc-900 dark:text-zinc-200 ml-1.5">{v}</span>
                          </div>
                        ))}
                      </div>

                      <span className="px-2.5 py-1.5 rounded-full text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold uppercase block text-center">
                        {m.status}
                      </span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-zinc-400 italic block">Polling active machine sensor feeds...</span>
                )}
              </div>
            </div>

            {/* Logistics Order Pipelines */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-zinc-150 dark:border-zinc-800 pb-4 mb-4">
                <Truck className="h-5 w-5 text-indigo-500 shrink-0" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">Active Cargo Shipments & Milestones</h3>
              </div>

              <div className="space-y-8 mt-6">
                {orders.map((ord) => (
                  <div key={ord.id} className="border-l border-zinc-200 dark:border-zinc-800 pl-6 relative">
                    {/* Anchor Circle */}
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 bg-indigo-500 rounded-full" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">{ord.id} • {ord.category}</span>
                        <h4 className="text-sm font-bold text-zinc-950 dark:text-white">{ord.productName}</h4>
                      </div>
                      <span className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded-full ${
                        ord.status === "In Transit" 
                          ? "bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400"
                          : "bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400"
                      }`}>
                        {ord.status}
                      </span>
                    </div>

                    <div className="rounded-xl border border-zinc-150 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-950 mb-4 text-xs font-medium text-zinc-650 dark:text-zinc-400 leading-relaxed font-mono">
                      <span className="text-[10px] uppercase font-bold text-indigo-400 block mb-1">Logistics Update:</span>
                      {ord.lastUpdate}
                    </div>

                    {/* Milestones stepper */}
                    <div className="text-[10px] font-mono text-zinc-400 space-y-1 block pl-2 border-l border-zinc-100 dark:border-zinc-850">
                      {ord.milestones.map((m, idx) => (
                        <span key={idx} className="block">• {m}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Sourcing order placement form */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs sticky top-24">
              <div className="flex items-center gap-2 border-b border-zinc-150 dark:border-zinc-800 pb-4 mb-4">
                <ClipboardList className="h-5 w-5 text-indigo-500 shrink-0" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-100">Submit Custom Batch Order</h3>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                Settle technical dimension constraints inside the quoter pane before compiling a dynamic production build parameters pipeline here.
              </p>

              {addSuccess && (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-3.5 mb-4 text-xs font-medium font-mono text-center block">
                  ✓ Custom order logged under active queue registers
                </div>
              )}

              <form onSubmit={handleAddNewOrder} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Product Description</label>
                  <input
                    type="text"
                    required
                    value={newOrderName}
                    onChange={(e) => setNewOrderName(e.target.value)}
                    placeholder="E.g. Double-Helix Gear Axles Unit Q4"
                    className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-mono text-zinc-500 block mb-1">Sourcing Category</label>
                  <select
                    value={newOrderCategory}
                    onChange={(e) => setNewOrderCategory(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none"
                  >
                    <option value="Industrial Components">Industrial Components</option>
                    <option value="Aerospace">Aerospace Structural</option>
                    <option value="Energy Systems">Energy Systems</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-mono text-zinc-50s block mb-1">Target Volume Quantity</label>
                  <input
                    type="number"
                    required
                    value={newOrderQty}
                    onChange={(e) => setNewOrderQty(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-indigo-640 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 disabled:bg-zinc-800 text-white font-bold text-xs uppercase rounded-lg shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Order to Factory MES</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
