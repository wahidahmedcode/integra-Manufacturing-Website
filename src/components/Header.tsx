import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { LOCALIZATION } from "../data";
import { Sun, Moon, Languages, Menu, X, Landmark, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Header: React.FC = () => {
  const { language, setLanguage, darkMode, setDarkMode, activeTab, setActiveTab } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const dict = LOCALIZATION[language];

  const navItems = [
    { id: "home", label: dict.navHome },
    { id: "about", label: dict.navAbout },
    { id: "products", label: dict.navProducts },
    { id: "services", label: dict.navServices },
    { id: "process", label: dict.navProcess },
    { id: "quality", label: dict.navQuality },
    { id: "sustainability", label: dict.navSustainability },
    { id: "careers", label: dict.navCareers },
    { id: "blog", label: dict.navBlog },
    { id: "contact", label: dict.navContact },
    { id: "portal", label: dict.navPortal }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const currentLanguageLabel = {
    en: "English (EN)",
    de: "Deutsch (DE)",
    ja: "日本語 (JA)",
    es: "Español (ES)"
  }[language];

  return (
    <nav id="global-header" className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300 border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-950/90 text-zinc-900 dark:text-zinc-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab("home")}>
            <div className="relative mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white dark:bg-indigo-500">
              <Cpu className="h-6 w-6 stroke-[2]" />
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">i</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white uppercase leading-none block">Integra</span>
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono block">Global Manufacturing</span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-250 cursor-pointer ${
                  activeTab === item.id
                    ? "bg-zinc-100 text-indigo-600 dark:bg-zinc-800 dark:text-indigo-400"
                    : "text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-indigo-400 dark:hover:bg-zinc-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* UTILITIES */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Multi-language Selector */}
            <div className="relative">
              <button
                id="btn-language"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                <Languages className="h-4 w-4" />
                <span className="font-semibold">{language.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-2 w-48 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl z-20 overflow-hidden"
                    >
                      {(["en", "de", "ja", "es"] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-medium cursor-pointer transition-colors block ${
                            language === lang
                              ? "bg-indigo-50 text-indigo-600 dark:bg-zinc-800 dark:text-indigo-400"
                              : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                          }`}
                        >
                          {lang === "en" && "English (EN)"}
                          {lang === "de" && "Deutsch (DE)"}
                          {lang === "ja" && "日本語 (JA)"}
                          {lang === "es" && "Español (ES)"}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode toggle */}
            <button
              id="btn-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-indigo-600" />}
            </button>

            {/* CTA */}
            <button
              id="btn-nav-quote"
              onClick={() => handleNavClick("contact")}
              className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {dict.requestQuote}
            </button>
          </div>

          {/* MOBILE BURGER */}
          <div className="xl:hidden flex items-center space-x-2">
            {/* Light/Dark Toggle (Visible on Mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Lang Button */}
            <button
              onClick={() => {
                const order: ("en" | "de" | "ja" | "es")[] = ["en", "de", "ja", "es"];
                const nextIdx = (order.indexOf(language) + 1) % order.length;
                setLanguage(order[nextIdx]);
              }}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold"
            >
              {language.toUpperCase()}
            </button>

            {/* Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-3 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider block ${
                    activeTab === item.id
                      ? "bg-indigo-50 text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400"
                      : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 px-4">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase py-3 rounded-lg block"
                >
                  {dict.requestQuote}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
