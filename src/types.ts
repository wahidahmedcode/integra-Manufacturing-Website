export type Language = "en" | "de" | "ja" | "es";

export interface PageTranslations {
  navHome: string;
  navAbout: string;
  navProducts: string;
  navServices: string;
  navProcess: string;
  navQuality: string;
  navSustainability: string;
  navCareers: string;
  navBlog: string;
  navContact: string;
  navPortal: string;
  requestQuote: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  heroCTA: string;
  statsTitle: string;
  statsTagline: string;
  yearsExperience: string;
  factoriesCount: string;
  globalPresence: string;
  workforceCount: string;
  industriesTitle: string;
  industriesSubtitle: string; 
}

export type LocaleDictionary = Record<Language, PageTranslations & Record<string, string>>;

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: Record<string, string>;
  datasheetUrl?: string;
  imageUrl: string;
  relatedIds: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  workflow: string[];
}

export interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  telemetryMetric: string;
  iconName: string;
  inputs: string[];
  outputs: string[];
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: "Insight" | "Case Study" | "Company News";
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface IoTTelemetry {
  oee: number;
  throughput: number;
  power: number;
  recycle: number;
  timestamp: string;
  machines: Array<{
    name: string;
    status: string;
    metrics: Record<string, string | number>;
  }>;
}

export interface QuoteRequest {
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

export interface CustomerOrder {
  id: string;
  productName: string;
  category: string;
  quantity: number;
  status: "Processing" | "Quality Inspection" | "In Transit" | "Delivered";
  milestones: string[];
  lastUpdate: string;
}
