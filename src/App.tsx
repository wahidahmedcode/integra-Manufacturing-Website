/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Quality } from "./components/Quality";
import { Sustainability } from "./components/Sustainability";
import { Careers } from "./components/Careers";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Portal } from "./components/Portal";
import { LiveChat } from "./components/LiveChat";
import { motion, AnimatePresence } from "motion/react";

function MainAppContent() {
  const { activeTab } = useApp();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "products":
        return <Products />;
      case "services":
        return <Services />;
      case "process":
        return <Process />;
      case "quality":
        return <Quality />;
      case "sustainability":
        return <Sustainability />;
      case "careers":
        return <Careers />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "portal":
        return <Portal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Dynamic Header */}
      <Header />

      {/* Main Container with smooth fade animations */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <Footer />

      {/* Floating Collapsible AI Support Chat */}
      <LiveChat />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
