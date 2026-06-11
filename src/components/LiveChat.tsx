import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { MessageCircle, X, Send, Bot, Terminal, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const LiveChat: React.FC = () => {
  const { language } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "model"; content: string }>>([
    {
      role: "model",
      content: "Welcome to Integra Sourcing Desk. I am your automated AI metallurgical advisor. Describe your environmental load profiles, desired material structures (grades, ASTM, density), or ask general catalog details."
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput.trim();
    setUserInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMsg }]
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { role: "model", content: data.content }]);
      } else {
        setMessages(prev => [...prev, { role: "model", content: "Apologies, the secure satellite telemetry channel is busy. Please try transmitting structural parameters shortly." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "model", content: "Connection lost. Please audit your local port links." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-chat-bubble" className="fixed bottom-6 right-6 z-50">
      
      {/* Toggler button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl flex items-center justify-center cursor-pointer transition-all"
        title="AI Sourcing Advisor Chat"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {/* Chat Windows panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col justify-between overflow-hidden text-xs text-zinc-800 dark:text-zinc-250 font-sans"
          >
            {/* Header */}
            <div className="bg-zinc-900 text-white p-4 flex items-center justify-between border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-indigo-400" />
                <div>
                  <h4 className="font-bold tracking-tight">Integra Sourcing Desk</h4>
                  <span className="text-[10px] font-mono text-zinc-500 block leading-none">● Automated Advisor Active</span>
                </div>
              </div>
              <Terminal className="h-4 w-4 text-zinc-500" />
            </div>

            {/* Conversation Logs */}
            <div className="p-4 block h-80 overflow-y-auto space-y-4 bg-zinc-50 dark:bg-zinc-950/40">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
                >
                  <div
                    className={`rounded-xl p-3 leading-relaxed text-[11px] font-medium ${
                      m.role === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 shadow-2xs"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className="rounded-xl p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 shadow-2xs italic flex items-center gap-1.5 font-mono text-[10px]">
                    <div className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce delay-150" />
                    <div className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce delay-300" />
                    <span>Analyzing metallurgy scales...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Inputs Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-150 dark:border-zinc-800 flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about Titanium Grade 5 vs 6061 Aluminum..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-zinc-800 dark:text-zinc-100"
                required
              />
              <button
                type="submit"
                disabled={loading || !userInput.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white p-2 rounded-lg cursor-pointer transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
