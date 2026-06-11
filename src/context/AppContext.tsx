import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, IoTTelemetry, QuoteRequest, CustomerOrder } from "../types";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  telemetry: IoTTelemetry | null;
  quotes: QuoteRequest[];
  orders: CustomerOrder[];
  fetchQuotesAndOrders: () => Promise<void>;
  addQuote: (quote: Partial<QuoteRequest>) => Promise<QuoteRequest | null>;
  addOrder: (order: Partial<CustomerOrder>) => Promise<CustomerOrder | null>;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [darkMode, setDarkMode] = useState<boolean>(true); // Default to a gorgeous dark industrial theme
  const [activeTab, setActiveTab] = useState<string>("home");
  const [telemetry, setTelemetry] = useState<IoTTelemetry | null>(null);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Sync with theme selector
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch quotes and orders
  const fetchQuotesAndOrders = async () => {
    try {
      const qRes = await fetch("/api/erp/quotes");
      const oRes = await fetch("/api/erp/orders");
      if (qRes.ok && oRes.ok) {
        const qData = await qRes.json();
        const oData = await oRes.json();
        setQuotes(qData);
        setOrders(oData);
      }
    } catch (err) {
      console.error("Error fetching ERP data:", err);
    }
  };

  // Poll telemetry index from express
  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const res = await fetch("/api/erp/telemetry");
        if (res.ok) {
          const data = await res.json();
          setTelemetry(data);
        }
      } catch (err) {
        console.error("Telemetry fetch error:", err);
      }
    };

    fetchTelemetry();
    fetchQuotesAndOrders();

    const interval = setInterval(fetchTelemetry, 4000); // Poll every 4s to simulate live telemetry updating
    return () => clearInterval(interval);
  }, []);

  const addQuote = async (quoteData: Partial<QuoteRequest>): Promise<QuoteRequest | null> => {
    setLoading(true);
    try {
      const res = await fetch("/api/erp/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteData)
      });
      if (res.ok) {
        const newQuote = await res.json();
        setQuotes(prev => [newQuote, ...prev]);
        return newQuote;
      }
    } catch (err) {
      console.error("Error adding quote:", err);
    } finally {
      setLoading(false);
    }
    return null;
  };

  const addOrder = async (orderData: Partial<CustomerOrder>): Promise<CustomerOrder | null> => {
    setLoading(true);
    try {
      const res = await fetch("/api/erp/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });
      if (res.ok) {
        const newOrder = await res.json();
        setOrders(prev => [newOrder, ...prev]);
        return newOrder;
      }
    } catch (err) {
      console.error("Error adding order:", err);
    } finally {
      setLoading(false);
    }
    return null;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        darkMode,
        setDarkMode,
        activeTab,
        setActiveTab,
        telemetry,
        quotes,
        orders,
        fetchQuotesAndOrders,
        addQuote,
        addOrder,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
};
