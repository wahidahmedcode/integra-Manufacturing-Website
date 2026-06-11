import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { PRODUCTION_PROCESS } from "../data";
import { Database, Monitor, Drill, ShieldAlert, Package, Play, Activity, Cpu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Process: React.FC = () => {
  const { language } = useApp();
  const [selectedStepId, setSelectedStepId] = useState(1);
  
  // Simulation states
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStepId, setSimStepId] = useState(1);
  const [simLog, setSimLog] = useState<string[]>([]);
  const [gaugeValue, setGaugeValue] = useState(100);

  // Fluctuating values for plant floor sensors
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setGaugeValue((95 + Math.random() * 8));
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setSimStepId(1);
    setSelectedStepId(1);
    setSimLog([
      "MES System Online. Conveyor belt initialization initiated.",
      "Dispatching Titanium Bar stock Q9-A, Heat Number #1209B..."
    ]);

    const stepDuration = 2800;

    // Step 1 -> 2
    setTimeout(() => {
      setSimStepId(2);
      setSelectedStepId(2);
      setSimLog(prev => [
        ...prev,
        "Spectrometer verification completed successfully: 99.98% purity index verified.",
        "Passing raw specs, pushing G-code parameters directly to CNC Milling Station."
      ]);
    }, stepDuration);

    // Step 2 -> 3
    setTimeout(() => {
      setSimStepId(3);
      setSelectedStepId(3);
      setSimLog(prev => [
        ...prev,
        "G-code trajectory resolved perfectly. Auto-axis rotation parameters established.",
        "Beginning high-speed cooling CNC milling. Active fluid cooling is normal."
      ]);
    }, stepDuration * 2);

    // Step 3 -> 4
    setTimeout(() => {
      setSimStepId(4);
      setSelectedStepId(4);
      setSimLog(prev => [
        ...prev,
        "Milling finished. Surface temperature: 62.4°C. Pushing part down quality conveyor.",
        "Laser measuring probes deployed. Ultrasonic scanners hunting fracture micro-pores..."
      ]);
    }, stepDuration * 3);

    // Step 4 -> 5
    setTimeout(() => {
      setSimStepId(5);
      setSelectedStepId(5);
      setSimLog(prev => [
        ...prev,
        "Zero micro-cracks detected. Laser coordinates verify tolerance deviation is negligible (0.0004mm variance).",
        "Dispensing anti-corrosion VCI covers. Palletizing crate under tracking RFID ID: TRK-9801."
      ]);
    }, stepDuration * 4);

    // End simulation
    setTimeout(() => {
      setIsSimulating(false);
      setSimLog(prev => [
        ...prev,
        "Production cycle complete. Custom fabrication dispatched successfully to Cargo slot."
      ]);
    }, stepDuration * 5);
  };

  const activeStep = PRODUCTION_PROCESS.find((p) => p.id === selectedStepId) || PRODUCTION_PROCESS[0];

  const getStepIcon = (iconName: string, sizeClass = "h-5 w-5") => {
    switch (iconName) {
      case "FileCheck":
        return <Database className={sizeClass} />;
      case "Monitor":
        return <Monitor className={sizeClass} />;
      case "Drill":
        return <Drill className={sizeClass} />;
      case "Shield":
        return <ShieldAlert className={sizeClass} />;
      case "Package":
        return <Package className={sizeClass} />;
      default:
        return <Activity className={sizeClass} />;
    }
  };

  return (
    <div id="view-process" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2">Automated Plant Floor</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Interactive Production workflow</p>
          <p className="text-sm text-zinc-505 dark:text-zinc-400 mt-4">
            Interact with our computerized plant floor phases, or trigger the live MES cycle simulation to watch a raw metal billet become certified aerospace cargo blocks.
          </p>
        </div>

        {/* 1. HORIZONTAL STEP NAV BAR */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 h-0.5 w-full bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />
          
          <div className="flex justify-between relative z-10">
            {PRODUCTION_PROCESS.map((p) => {
              const Icon = p.id === 1 ? Database : p.id === 2 ? Monitor : p.id === 3 ? Drill : p.id === 4 ? ShieldAlert : Package;
              const isSimActive = isSimulating && simStepId === p.id;
              
              return (
                <button
                  key={p.id}
                  onClick={() => !isSimulating && setSelectedStepId(p.id)}
                  disabled={isSimulating}
                  className={`flex flex-col items-center group cursor-pointer ${isSimulating ? "cursor-not-allowed opacity-80" : ""}`}
                >
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                      selectedStepId === p.id 
                        ? "bg-indigo-600 border-2 border-indigo-400 scale-110 text-white shadow-md text-glow"
                        : "bg-white border text-zinc-500 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    } ${isSimActive ? "animate-pulse ring-4 ring-indigo-500/30" : ""}`}
                  >
                    {getStepIcon(p.iconName)}
                  </div>
                  <span className="hidden sm:block text-[9px] font-mono uppercase font-bold tracking-wider mt-2.5 text-zinc-500">
                    Step 0{p.id}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. THE SIMULATION OR DETAIL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Active step details */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase py-1 px-2.5 rounded bg-indigo-50 dark:bg-zinc-950 text-indigo-600 dark:text-indigo-400 border border-zinc-150 dark:border-zinc-800/80">
                  Phase: {activeStep.phase}
                </span>
                <span className="text-zinc-500 text-xs font-semibold">Step {activeStep.id} of 5</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white dark:text-zinc-100 mb-4">{activeStep.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* In/Out details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-4">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Sourcing Inputs</span>
                  <div className="space-y-1 block mt-2 font-semibold text-xs text-zinc-700 dark:text-zinc-300">
                    {activeStep.inputs.map((inp, idx) => (
                      <span key={idx} className="block">• {inp}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-4">
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Phase Products Target</span>
                  <div className="space-y-1 block mt-2 font-semibold text-xs text-zinc-700 dark:text-zinc-300">
                    {activeStep.outputs.map((out, idx) => (
                      <span key={idx} className="block">• {out}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-150 dark:border-zinc-800/80 pt-4 flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>Station Telemetry Indicator:</span>
              <span className="text-indigo-500 font-bold">{activeStep.telemetryMetric}</span>
            </div>

          </div>

          {/* Right panel: Live plant floor simulator */}
          <div className="lg:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-linear-to-b from-zinc-900 to-zinc-950 text-zinc-300 flex flex-col justify-between shadow-xl">
            
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-indigo-400" />
                  <span className="text-xs font-mono uppercase font-bold text-white tracking-widest leading-none">MES Simulator Core</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold ${isSimulating ? "bg-emerald-900 border border-emerald-500/20 text-emerald-400 animate-pulse" : "bg-zinc-800 border border-zinc-700 text-zinc-400"}`}>
                  {isSimulating ? "Simulation Active" : "Operational Idle"}
                </span>
              </div>

              {/* Live console logging */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-[10px] block h-48 overflow-y-auto mb-6">
                <span className="text-zinc-650 uppercase font-black block mb-2">SYSTEM CONSOLE LOGS</span>
                
                {simLog.length === 0 ? (
                  <span className="text-zinc-650 italic block mt-4">Awaiting simulation trigger command...</span>
                ) : (
                  <div className="space-y-2">
                    {simLog.map((log, idx) => (
                      <div key={idx} className="flex gap-1.5 align-top">
                        <span className="text-indigo-500 select-none">&gt;&gt;</span>
                        <p className="whitespace-pre-wrap leading-relaxed text-zinc-305">{log}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Simulated gauge indicators */}
            <div className="space-y-4">
              {isSimulating && (
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-between font-mono text-[11px]">
                  <span>CNC Cutting Temperature Scale:</span>
                  <span className="font-bold text-amber-500">{(gaugeValue).toFixed(2)}°C</span>
                </div>
              )}

              <button
                onClick={handleStartSimulation}
                disabled={isSimulating}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold text-xs uppercase rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="h-4 w-4" />
                <span>Initialize Production Cycle Simulation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
