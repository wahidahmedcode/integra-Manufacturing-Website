import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Standard health check endpoint for Kubernetes liveness and readiness probes
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// Memory database for ERP portal
interface QuoteRequest {
  id: string;
  clientName: string;
  email: string;
  industry: string;
  material: string;
  quantity: number;
  tolerance: string;
  notes: string;
  status: "Pending" | "Reviewing" | "Quoted";
  aiAnalysis?: string;
  createdAt: string;
}

interface Order {
  id: string;
  productName: string;
  category: string;
  quantity: number;
  status: "Processing" | "Quality Inspection" | "In Transit" | "Delivered";
  milestones: string[];
  lastUpdate: string;
}

const mockQuotes: QuoteRequest[] = [
  {
    id: "Q-9081",
    clientName: "Sarasota Aerospace Corp",
    email: "engineering@sarasota-aero.com",
    industry: "Aerospace",
    material: "Titanium Alloy Grade 5",
    quantity: 250,
    tolerance: "± 0.005 mm",
    notes: "Requires ultrasonic testing and full chemical composition report.",
    status: "Quoted",
    aiAnalysis: "### Engineering Quoting Analysis\n- **Precision Factor**: ± 0.005 mm tolerance dictates high-precision CNC 5-axis milling.\n- **Raw Material Estimate**: Grade 5 Titanium is premium $(\\$45\\text{--}\\$65/\\text{kg})$. Total estimated raw feedstock is $5,400.\n- **Machining/Sinking Cost**: Machining tough titanium at high tolerances requires specialized carbide tools. Tool wear adds a $2,200 surcharge.\n- **Quality Inspections**: Mandatory ultrasonic testing, coordinate measuring machine (CMM) reports.\n- **Lead Time**: 4-6 weeks for initial batch production.",
    createdAt: "2026-06-10"
  },
  {
    id: "Q-9082",
    clientName: "Hanson Construction Logistics",
    email: "procure@hansonlogistics.net",
    industry: "Construction",
    material: "Structural Steel ASTM A36",
    quantity: 1500,
    tolerance: "± 0.5 mm",
    notes: "Welded frame support sections for warehouse structures.",
    status: "Pending",
    createdAt: "2026-06-11"
  }
];

const mockOrders: Order[] = [
  {
    id: "ORD-40292",
    productName: "Precision Heavy-Duty Gear Shafts (150mm)",
    category: "Industrial Components",
    quantity: 500,
    status: "In Transit",
    milestones: [
      "Order Received - Completed June 01",
      "Steel Sourcing & Forging - Completed June 03",
      "CNC Grinding & Heat Treatment - Completed June 06",
      "Ultrasonic Cracking Test - Checked OK June 08",
      "Dispatched from Hamburg Port - June 09"
    ],
    lastUpdate: "In transit on container ship MS Bremen. Expected arrival: June 18."
  },
  {
    id: "ORD-40293",
    productName: "High-Efficiency Core Windings (Model T4)",
    category: "Energy Systems",
    quantity: 200,
    status: "Processing",
    milestones: [
      "Order Received - Completed June 08",
      "Precision Winding Sourcing - Active June 10"
    ],
    lastUpdate: "Automated stator winding phase is 64% complete at Automation Cell A-3."
  }
];

// Helper to interact with Gemini
async function runGeminiPrompt(prompt: string, fallbackResponse: string): Promise<string> {
  const ai = getGeminiClient();
  if (!ai) {
    return fallbackResponse;
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });
    return response.text || fallbackResponse;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return `[Local Analysis Mode] ${fallbackResponse}`;
  }
}

// ENDPOINTS

// 1. Live Chat Assistant
app.post("/api/gemini/chat", async (req, res) => {
  const { messages } = req.body;
  const lastMessage = messages?.[messages.length - 1]?.content || "";

  const systemPrompt = `You are a professional industrial fabrication, manufacturing process, and supply chain consultant representing "Integra Global Manufacturing". 
Guidelines:
- Provide highly detailed, authoritative responses about metallurgy, custom machining, lead times, QA certifications, and global shipping.
- Your answers must be elegant, factual, and informative.
- Keep responses concise (under 200 words) and list exact options or standards where useful (e.g., ISO, ASTM, DIN).`;

  const fullPrompt = `${systemPrompt}\n\nConversation history:\n${(messages || []).map((m: any) => `${m.role === "user" ? "User" : "Integra AI"}: ${m.content}`).join("\n")}\n\nGenerate the next expert response:`;

  const localFallback = `Our manufacturing team at Integra supports custom material fabrication including aluminum grades, stainless steels (304, 316), titanium alloys, and high-performance polycarbonates. For high-precision requirements, we achieve tolerances down to ±0.005mm. Ready to proceed? Let's formulate a detailed custom quote!`;

  const responseText = await runGeminiPrompt(fullPrompt, localFallback);
  res.json({ content: responseText });
});

// 2. Automated Smart Fabrication Quoter
app.post("/api/gemini/quote", async (req, res) => {
  const { material, quantity, tolerance, notes, industry } = req.body;

  const quotePrompt = `Analyze the following industrial fabrication request as an expert manufacturing engineer and generate a professional technical quote review:
  - Industry: ${industry}
  - Material: ${material}
  - Order Quantity: ${quantity}
  - Precision Tolerance: ${tolerance}
  - Special Instructions/Notes: ${notes}

  Structure your answer in markdown:
  ### Engineering Quoting Analysis
  - **Sourcing & Materials**: (Detailed analysis of feedstock availability, global MOQ indices under today's supply chain conditions)
  - **Production Strategy**: (Which fabrication lines to use - CNC milling, forging, extrusion, robotic assembly)
  - **Quality Testing Recommendations**: (Essential tests, e.g. CMM coordinates, liquid penetrant testing, carbon analysis)
  - **Estimated Pricing Index & Logistics**: (Estimated raw material costs, processing surcharges, and setup costs)
  - **Lead Time Forecast**: (Estimated completion, prototyping phases, container slotting duration)

  Keep the response rich in industrial engineering terms and highly structured.`;

  const localFallback = `### Engineering Quoting Analysis
- **Sourcing & Materials**: Sourcing for "${material}" at ${quantity} units is active via our primary regional warehouses. Bulk discounts apply.
- **Production Strategy**: Tolerances of "${tolerance}" are highly achievable using automated multi-axis milling or extrusion forming.
- **Quality Testing Recommendations**: Standard ISO 9001:2015 inspection with mechanical stress testing is highly advised.
- **Estimated Pricing Index & Logistics**: Material configuration: Unit Setup rate: $45.00/pc. Setup overhead: $350. Bulk transportation discount applied.
- **Lead Time Forecast**: Estimated raw feedstock lead time: 8-12 business days. Batch production: 14 business days. Delivery target: 3 weeks.`;

  const analysis = await runGeminiPrompt(quotePrompt, localFallback);
  res.json({ analysis });
});

// 3. Get all Quote requests
app.get("/api/erp/quotes", (req, res) => {
  res.json(mockQuotes);
});

// 4. Submit a new quote
app.post("/api/erp/quotes", async (req, res) => {
  const { clientName, email, industry, material, quantity, tolerance, notes } = req.body;
  if (!clientName || !email || !material || !quantity) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Generate automated AI Analysis in the background
  const quotePrompt = `Generate a concise 3-bullet engineer quote assessment for client "${clientName}" requesting:
  - Material: ${material}
  - Quantity: ${quantity}
  - Tolerance: ${tolerance}
  - Notes: ${notes}
  Keep the advice very professional and practical.`;

  const fallbackText = `### Engineering Quoting Analysis
- **Material Selection**: Sourced securely from certified high-grade metallurgy centers.
- **Tolerance Execution**: CNC machining configured to ensure exact specification tolerances of ${tolerance}.
- **Lead Time Schedule**: Typical production buffer: 14 business days. Scheduled for immediate dispatch upon blueprint sign-off.`;

  const aiAnalysis = await runGeminiPrompt(quotePrompt, fallbackText);

  const newQuote: QuoteRequest = {
    id: `Q-${Math.floor(1000 + Math.random() * 9000)}`,
    clientName,
    email,
    industry: industry || "General Industrial",
    material,
    quantity: parseInt(quantity) || 1,
    tolerance: tolerance || "Standard ±0.1mm",
    notes: notes || "",
    status: "Quoted",
    aiAnalysis,
    createdAt: new Date().toISOString().split("T")[0]
  };

  mockQuotes.unshift(newQuote);
  res.json(newQuote);
});

// 5. Get all Orders and Shipments for the Portal
app.get("/api/erp/orders", (req, res) => {
  res.json(mockOrders);
});

// 6. Submit a new live customer order
app.post("/api/erp/orders", (req, res) => {
  const { productName, category, quantity } = req.body;
  if (!productName || !quantity) {
    return res.status(400).json({ error: "Missing product name or quantity." });
  }

  const newOrder: Order = {
    id: `ORD-${Math.floor(40000 + Math.random() * 9999)}`,
    productName,
    category: category || "Machined Components",
    quantity: parseInt(quantity) || 1,
    status: "Processing",
    milestones: [
      `Order Received - Successfully recorded on ${new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}`,
      "Queue Placement - Statically slotted for feedstock delivery"
    ],
    lastUpdate: "Awaiting material release from standard storage silos."
  };

  mockOrders.unshift(newOrder);
  res.json(newOrder);
});

// 7. Simulated IoT telemetry parameters
app.get("/api/erp/telemetry", (req, res) => {
  // Let's generate a slightly changing sequence of industrial metrics to make the UI look alive
  const time = Date.now();
  const oee = parseFloat((82.5 + Math.sin(time / 10000) * 1.5).toFixed(1));
  const throughput = Math.floor(124 + Math.sin(time / 8000) * 6);
  const power = parseFloat((420 + Math.sin(time / 14000) * 12).toFixed(1));
  const recycle = parseFloat((94.2 + Math.cos(time / 15000) * 0.4).toFixed(1));

  const machineTelemetry = [
    {
      name: "CNC Milling Station A-1",
      status: "Operational",
      metrics: { RPM: Math.floor(12000 + Math.sin(time / 2000) * 150), Temp: parseFloat((62.4 + Math.sin(time / 3000) * 1.2).toFixed(1)), Efficiency: "94.2%" }
    },
    {
      name: "Robotic Assembly Cell B-3",
      status: "Operational",
      metrics: { Pressure: "4.8 Bar", Speed: "100%", CycleTime: "12.4s" }
    },
    {
      name: "Heavy Induction Forge P-9",
      status: "Cycle Active",
      metrics: { CoreTemp: `${Math.floor(1150 + Math.sin(time / 6000) * 15)}°C`, SafeLevel: "OK", Output: "Forge Ready" }
    },
    {
      name: "Ultrasonic NDT Quality Line Q-1",
      status: "Idle",
      metrics: { Calibrated: "Yes", Sensitivity: "0.01mm", System: "Online" }
    },
    {
      name: "Global Packing Station X-4",
      status: "Active",
      metrics: { Queue: Math.floor(12 + Math.sin(time / 5000) * 3), BoxCount: 849, AirFlow: "Standard" }
    }
  ];

  res.json({
    oee,
    throughput,
    power,
    recycle,
    machines: machineTelemetry,
    timestamp: new Date().toLocaleTimeString()
  });
});

// Vite Middleware integration for development / production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Integra Industrial Server] Full-Stack gateway operating on http://localhost:${PORT}`);
  });
}

startServer();
