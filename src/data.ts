import { LocaleDictionary, Product, ServiceDetail, ProcessStep, JobListing, BlogPost } from "./types";

export const LOCALIZATION: LocaleDictionary = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navServices: "Services",
    navProcess: "Process",
    navQuality: "Quality & QA",
    navSustainability: "Sustainability",
    navCareers: "Careers",
    navBlog: "Insights",
    navContact: "Contact & Quote",
    navPortal: "ERP Portal",
    requestQuote: "Request Quote",

    heroBadge: "Global Industrial Operations • Since 1991",
    heroHeading: "Precision Engineering. Automated Fabrication. Global Scale.",
    heroSub: "Combining metallurgy expertise, state-of-the-art robotic assembly, and server-managed smart supply chains to construct the futures of transportation, energy, and aerospace.",
    heroCTA: "Configure Custom Spec",
    
    statsTitle: "Enterprise Scope",
    statsTagline: "Authorized, certified, and operating at unprecedented operational accuracy across 4 continents.",
    yearsExperience: "Years Engineering Excellence",
    factoriesCount: "Smart Automated Factories",
    globalPresence: "Global Logistics Hubs",
    workforceCount: "Engineers & Technicians",

    industriesTitle: "Sectors We Empower",
    industriesSubtitle: "Providing physical parts and mechanical sub-assemblies tested to withstand extreme environments.",

    aboutTitle: "Engineering with Pure Integrity",
    aboutSub: "Integra Global Manufacturing is an allied tier-1 supplier powering essential industries worldwide.",
    aboutHistory: "Founded in 1991 in Hamburg as a precision machining firm, Integra has scaled into a global giant with 5 massive automated facilities. We combine rigorous material science, heavy robotic forging, and absolute quality inspection workflows to deliver world-class infrastructure.",
    missionTitle: "Our Purpose",
    missionDesc: "To advance human capabilities by manufacturing critical equipment with micro-level precision, zero-waste principles, and absolute predictability.",
    visionTitle: "Our Horizon",
    visionDesc: "Transforming bulk metallurgy into a fully digitalized, carbon-balanced, cyber-physical automation loop by 2035.",

    portalHeading: "Customer ERP & Factory IoT Center",
    portalIntro: "Secure client portal synced directly to our active Manufacturing Execution System (MES). Input blueprints, monitor machine OEE telemetry, and track active intermodal shipments in real-time.",
    liveIoT: "MES Machine IoT Telemetry (Live Raw Data)",
    activeOrders: "Active Logistics & Order Pipeline"
  },
  de: {
    navHome: "Startseite",
    navAbout: "Über uns",
    navProducts: "Produkte",
    navServices: "Dienstleistungen",
    navProcess: "Ablauf",
    navQuality: "Qualität & QS",
    navSustainability: "Nachhaltigkeit",
    navCareers: "Karriere",
    navBlog: "Blog",
    navContact: "Kontakt & Angebot",
    navPortal: "ERP-Portal",
    requestQuote: "Angebot anfordern",

    heroBadge: "Globale Industrieanlagen • Seit 1991",
    heroHeading: "Präzisionswerkzeuge. Automatisierte Fertigung. Globaler Maßstab.",
    heroSub: "Kombination aus metallurgischem Fachwissen, modernster Robotermontage und servergesteuerten Lieferketten für die Mobilität und Energie von morgen.",
    heroCTA: "Spezifikationen anfordern",

    statsTitle: "Unternehmensreichweite",
    statsTagline: "Zertifiziert, auditiert und mit beispielloser betrieblicher Präzision auf 4 Kontinenten tätig.",
    yearsExperience: "Jahre exzellente Technik",
    factoriesCount: "Intelligente Fabriken",
    globalPresence: "Globale Logistik-Zentren",
    workforceCount: "Ingenieure und Techniker",

    industriesTitle: "Branchen, die wir stärken",
    industriesSubtitle: "Bereitstellung physischer Baugruppen, die für extreme Belastungen zertifiziert sind.",

    aboutTitle: "Engineering mit absoluter Integrität",
    aboutSub: "Integra Global Manufacturing ist ein weltweit führender Tier-1-Zulieferer für Schlüsselindustrien.",
    aboutHistory: "Gegründet 1991 in Hamburg als Präzisionsmaschinenfabrik, ist Integra heute ein globaler Konzern mit 5 vollautomatisierten Werken. Wir kombinieren anspruchsvolle Werkstofftechnik und schwere Roboterschmieden.",
    missionTitle: "Unsere Mission",
    missionDesc: "Die menschlichen Fähigkeiten durch die Herstellung kritischer Baugruppen mit Mikrometer-Präzision und Nachhaltigkeit zu steigern.",
    visionTitle: "Unsere Vision",
    visionDesc: "Die Transformation der Primärmetallurgie in einen vollständig digitalisierten, kohlenstoffneutralen, cyber-physischen Regelkreis bis 2035.",

    portalHeading: "Kunden-ERP & Fabrik-IoT-Zentrum",
    portalIntro: "Gesichertes Kundenportal, das direkt mit unserem Manufacturing Execution System (MES) synchronisiert ist. Überwachen Sie IoT-Maschinendaten und intermodale Transporte live.",
    liveIoT: "MES-Maschinen-IoT-Telemetrie (Live-Rohdaten)",
    activeOrders: "Aktive Transport- & Bestellpipeline"
  },
  ja: {
    navHome: "ホーム",
    navAbout: "会社概要",
    navProducts: "製品一覧",
    navServices: "事業内容",
    navProcess: "製造工程",
    navQuality: "品質・認証",
    navSustainability: "サステナビリティ",
    navCareers: "採用情報",
    navBlog: "技術ニュース",
    navContact: "お問い合わせ",
    navPortal: "ERPポータル",
    requestQuote: "お見積り依頼",

    heroBadge: "グローバル・インダストリアル・オペレーションズ • 1991年創業",
    heroHeading: "精密工学。オートメーション。グローバルスケール。",
    heroSub: "冶金学の高い技術力、最先端のロボットアセンブリ、そしてスマートサプライチェーンを組み合わせ、航空宇宙、輸送、エネルギーの未来を築きます。",
    heroCTA: "カスタム仕様を設計する",

    statsTitle: "企業規模と実力",
    statsTagline: "4大陸にまたがる卓越した運用精度。高度な国際規格をすべてクリアしたファシリティを稼働させています。",
    yearsExperience: "エンジニアリング実績年数",
    factoriesCount: "スマート・オートファクトリー",
    globalPresence: "グローバル流通センター",
    workforceCount: "専任技術者・エンジニア",

    industriesTitle: "支援している主要セクター",
    industriesSubtitle: "極限環境に耐え抜くようテスト・評価された物理コンポーネントの提供。",

    aboutTitle: "純粋な誠実さを貫く設計工学",
    aboutSub: "インテグラ・グローバル・マニュファクチャリングは、世界中の基幹産業を支える一次サプライヤーです。",
    aboutHistory: "1991年にハンブルクで精密機械加工会社として立ち上がったインテグラは、現在5つのスマート大規模組立拠点を構える絶対的企業へ成長を遂げました。金属材料工学とロボット鍛造技術、厳格な監査プロセスを統合しています。",
    missionTitle: "企業使命",
    missionDesc: "ミクロンレベルの驚異的な精度と持続不可能な無駄を生じさせないクローズドループ製造により、人間社会の発展に貢献する。",
    visionTitle: "革新への展望",
    visionDesc: "2035年までにバルク冶金を完全デジタル化させ、二酸化炭素非排出かつ自立型のサイバーフィジカル製造サイクルを創る。",

    portalHeading: "顧客用ERP・スマート工場IoTセンター",
    portalIntro: "工場内の製造実行システム（MES）とシームレスな通信を行うセキュア顧客ポータル。部品設計図の送信、リアルタイムでの生産装置の電力やOEEの検証、コンテナ追跡が可能。",
    liveIoT: "スマート機械群の稼働テレメトリー (ライブ計測)",
    activeOrders: "流通コンテナ・物流輸送の現状"
  },
  es: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navProducts: "Productos",
    navServices: "Servicios",
    navProcess: "Procesos",
    navQuality: "Calidad e ISO",
    navSustainability: "Sostenibilidad",
    navCareers: "Carreras",
    navBlog: "Noticias",
    navContact: "Contacto y Cotización",
    navPortal: "Portal ERP",
    requestQuote: "Solicitar Cotización",

    heroBadge: "Operaciones Industriales Globales • Desde 1991",
    heroHeading: "Ingeniería de Precisión. Fabricación Robotizada. Escala Global.",
    heroSub: "Fusiones avanzadas de metalurgia, montaje robotizado automatizado y logística administrada por servidores para consolidar el porvenir de la energía y aviación.",
    heroCTA: "Configurar Cotización",

    statsTitle: "Alcance Corporativo",
    statsTagline: "Operaciones de alto nivel y consistencia estructural certificada presentes en 4 continentes.",
    yearsExperience: "Años de Excelencia de Gestión",
    factoriesCount: "Fábricas Inteligentes de Alta Gama",
    globalPresence: "Centros Logísticos de Interconexión",
    workforceCount: "Ingenieros y Operadores Certificados",

    industriesTitle: "Sectores que Potenciamos",
    industriesSubtitle: "Suministro de componentes mecánicos forjados certificados para tolerar esfuerzos térmicos críticos.",

    aboutTitle: "Ingeniería Fabricada con Integridad",
    aboutSub: "Integra Global Manufacturing es un socio estratégico tier-1 que optimiza sistemas industriales básicos.",
    aboutHistory: "Establecida en 1991 en Hamburgo como un taller de herramental de alta precisión, Integra ha escalado a un grupo global dinámico con cinco complejos de automatización completa. Aplicamos ciencias de materiales rigurosas.",
    missionTitle: "Misión",
    missionDesc: "Facilitar el avance industrial mediante componentes forjados con precisión extrema de tolerancia micrométrica y sustentabilidad certificada.",
    visionTitle: "Visión",
    visionDesc: "Evolucionar la manufactura pesada a un ecosistema cibernético completamente digital y descarbonizado para 2035.",

    portalHeading: "Portal ERP Corporativo e IoT de Planta",
    portalIntro: "Ecosistema sincronizado en tiempo real con nuestro MES operacional. Supervise la eficiencia de producción (OEE), telemetría de máquinas y embarques marítimos en curso.",
    liveIoT: "Telemetría de Planta MES e IoT (Flujo de Datos)",
    activeOrders: "Estatus de Embarques Logísticos e Inventario"
  }
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "PRD-201",
    name: "AeroForge-X Titanium Spars",
    category: "Aerospace",
    description: "Multi-axis hot-isostatic-pressed Titanium Grade 5 structures tailored for extreme load-bearing aircraft wing configurations and structural frames.",
    specifications: {
      "Yield Strength": "880 MPa",
      "Density": "4.43 g/cm³",
      "Tolerance Precision": "± 0.005 mm",
      "Sourcing Certificate": "EN 9100 / AS9100D",
      "Standard Compliance": "ASTM B348 / ISO 5832"
    },
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    relatedIds: ["PRD-203", "PRD-204"]
  },
  {
    id: "PRD-202",
    name: "High-Efficiency Core Windings (T4)",
    category: "Energy Systems",
    description: "Vacuum-brazed pure oxygen-free copper core windings optimized for mega-scale electrical transmission stators and nuclear core cooling sub-turbines.",
    specifications: {
      "Thermal Limits": "Up to 650°C",
      "Copper Purity": "99.99% OFC",
      "Insulation Standard": "Class H IEC 60085",
      "Efficiency Index": "98.9% nominal",
      "Operational Lifespan": "400,000 hrs MTBF"
    },
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    relatedIds: ["PRD-205"]
  },
  {
    id: "PRD-203",
    name: "Double-Helix Industrial Gear Assemblies",
    category: "Industrial Components",
    description: "Carburized-hardened helical gear systems boasting specialized tooth mesh configurations for mining machinery and heavy propulsion motors.",
    specifications: {
      "Hardening Depth": "2.2 mm effective case",
      "Tooth Surface Finish": "Ra 0.4 µm",
      "Surface Hardness": "60-62 HRC",
      "Max Input Torque": "45,000 N•m",
      "Lubrication System": "Forced-circulation oil spray"
    },
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    relatedIds: ["PRD-201", "PRD-204"]
  },
  {
    id: "PRD-204",
    name: "Integrated Hydraulic Manifold Modules",
    category: "Industrial Components",
    description: "Monoblock aircraft-grade Aluminum 7075-T6 hydraulic actuators including pre-assembled cartridge valves and dual-pressure internal galleries.",
    specifications: {
      "Max Operating Pressure": "420 Bar",
      "Flow Dynamic Rating": "320 L/min",
      "Internal Leakage Limit": "< 0.1 cm³/min at 315 Bar",
      "Inlet Ports": "SAE-24 flange layout",
      "Fluid Range": "ISO VG 32 to 68 mineral oils"
    },
    imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600",
    relatedIds: ["PRD-201", "PRD-203"]
  },
  {
    id: "PRD-205",
    name: "Cobalt-Chromium Turbine Blade Rotors",
    category: "Aerospace",
    description: "Single-crystal turbine components characterized by superior creep resistance and thermal-barrier coatings designed for combined-cycle thermal nodes.",
    specifications: {
      "Material Variant": "Co-Cr Alloy Haynes 188",
      "Thermal Barrier": "Yttria-Stabilized Zirconia (YSZ)",
      "Tensile Threshold": "940 MPa at 980°C",
      "Aerodynamic Flow Coeff": "0.942 index",
      "Balance Precision": "G0.4 ISO 21940 standard"
    },
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
    relatedIds: ["PRD-202"]
  }
];

export const MOCK_SERVICES: ServiceDetail[] = [
  {
    id: "svc-1",
    title: "Custom Fabrication & Forging",
    icon: "Hammer",
    shortDesc: "Comprehensive metallurgical forming with massive hydraulic pressing and drop forging capacity.",
    longDesc: "Integra operates high-capacity metal-forming infrastructure capable of handling high-duty nickel alloys, cobalt-chrome, structural aluminum, and carbon plates. Our 12,000-ton hydraulic forging presses consolidate core crystal arrays to maximize stress endurance indices for heavy structural elements.",
    deliverables: [
      "Custom carbon-alloy forges up to 25 tons",
      "Hot and cold metallurgical sheet drawing",
      "Post-forge normalization and hardening heat treatments",
      "Full grain-structure microanalysis reports"
    ],
    workflow: [
      "Slab heating inside gas-fired pre-chambers",
      "Hydraulic deformation shaping",
      "Thermal annealing profiles",
      "Acoustic cracking detection"
    ]
  },
  {
    id: "svc-2",
    title: "OEM / ODM Product Design & Prototyping",
    icon: "DraftingCompass",
    shortDesc: "Collaborative design-to-spec pipeline from raw 3D CAD files to tested mechanical assemblies.",
    longDesc: "Our global engineering stations provide rapid material selection prototyping, finite element analysis (FEA), and flow dynamic simulation profiles. We translate concepts directly into physical, CNC-machined trial sets backed by absolute standards validation before scaling up to industrial volume.",
    deliverables: [
      "SolidWorks & AutoCAD direct layout mapping",
      "FEA structural stress load simulation modules",
      "Additive rapid metal prototyping (Direct Metal Laser Sintering)",
      "First Article Inspections (FAI) with AS9102 reports"
    ],
    workflow: [
      "Technical boundary formulation with client",
      "Mesh load optimization simulation",
      "Laser sintering prototyping",
      "Stress benchmark validation"
    ]
  },
  {
    id: "svc-3",
    title: "Cyber-Physical QA & Testing Labs",
    icon: "ShieldCheck",
    shortDesc: "End-to-end inspection backed by ISO certification standards, non-destructive testing, and CMM scans.",
    longDesc: "Every material batch leaving Integra undergoes intense quality screenings. Our testing centers deploy 3D Laser Coordinate Measuring Machines (CMMs), X-ray micro-tomography, ultrasonic fracture scanners, and wet spectroscopy to assure absolute metallurgy purity and zero mechanical cracks.",
    deliverables: [
      "Coordinate Measuring Machine (CMM) reports to ±0.001mm accuracy",
      "Non-Destructive Testing (NDT) via radiography and ultrasound",
      "Hardness testing (Vickers, Rockwell indices)",
      "Mill Material Test Statements (MTR EN 10204 3.1)"
    ],
    workflow: [
      "Continuous geometric scan mapping",
      "Density structural checks",
      "Spectrometric metal verification",
      "Documentation database record logging"
    ]
  }
];

export const INDUSTRIES_SERVED = [
  { id: "aerospace", title: "Aerospace", icon: "PlaneTakeoff", desc: "Engine assemblies, Titanium main struts, flight-deck structures meeting AS9100D." },
  { id: "automotive", title: "Automotive", icon: "Car", desc: "Monoblock sub-frames, transmission gearing nodes, motor stator sheets, and safety cages." },
  { id: "energy", title: "Energy", icon: "Zap", desc: "Gas turbine rotors, wind alternator housing, hydraulic control manifolds." },
  { id: "healthcare", title: "Healthcare", icon: "HeartPulse", desc: "Implantable Grade 23 titanium bones, surgery-deck tools, centrifuges." },
  { id: "electronics", title: "Electronics", icon: "Cpu", desc: "Super-conductive circuit shields, high-heat sintered copper heat sinks." }
];

export const PRODUCTION_PROCESS: ProcessStep[] = [
  {
    id: 1,
    phase: "Material Ingestion",
    title: "Raw Feedstock Verification",
    description: "Slabs of certified steel, aluminum, and titanium are verified using optical emission spectroscopy before entering production storage.",
    telemetryMetric: "Material purity index: 99.98% OK",
    iconName: "FileCheck",
    inputs: ["Raw metallurgic ingots", "Mill certificates"],
    outputs: ["Bar stock sorted by thermal tolerance"]
  },
  {
    id: 2,
    phase: "Design & Cad Translation",
    title: "Robotic CAD Translation & Optimization",
    description: "Digital models are loaded directly into the Manufacturing Execution System (MES), optimizing CNC cutting toolpaths automatically.",
    telemetryMetric: "Toolpath compiler efficiency: 98.7%",
    iconName: "Monitor",
    inputs: ["3D CAD files", "Material hardness parameters"],
    outputs: ["G-code directives", "FEA stress profile database"]
  },
  {
    id: 3,
    phase: "High-Speed Machining",
    title: "Automated Multi-Axis CNC & Forging",
    description: "Rotors, blocks and spars are hollowed, sculpted or forge-pressed around computerized oil cooling channels.",
    telemetryMetric: "Cutting temperature limit: 62.4°C (Normal)",
    iconName: "Drill",
    inputs: ["Raw bar stock feed", "Cooling emulsion fluid"],
    outputs: ["Rough machined product sections"]
  },
  {
    id: 4,
    phase: "Quality Controls",
    title: "Ultrasonic NDT & Laser Coordinate Verification",
    description: "Pieces are mechanically measured by computerized probes and acoustically scanned for internal hairline fractures.",
    telemetryMetric: "Calibration rating: ±0.0008mm variance",
    iconName: "Shield",
    inputs: ["Machined component parts", "Laser specifications"],
    outputs: ["Inspected parts", "Mill Test Documentation"]
  },
  {
    id: 5,
    phase: "Distribution Prep",
    title: "VCI Protective Packing & Bulk Dispatch",
    description: "Components are coated with state-of-the-art Volatile Corrosion Inhibitor films, vacuum packed, and crated in durable heavy wood boxes.",
    telemetryMetric: "Packaging speed: 32 sec/crate",
    iconName: "Package",
    inputs: ["Finished mechanical sections", "Anti-humidity sleeves"],
    outputs: ["Sealed pallets with global tracking RFID tags"]
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: "blg-301",
    title: "The Shift to Carbon-Neutral Forging Cycles",
    category: "Insight",
    summary: "How modern high-induction forge systems are cutting electric draw indices by 42% while retaining crystal structural hardness.",
    content: "Global industrial operations are undergoing a quiet metallurgical transition. Traditional gas-fired rotary forge kilns are being decommissioned in favor of targeted electromagnetic induction cells. By heating steel blocks to 1,200°C via targeted coils instead of ambient furnaces, we eliminate heat bleed, lowering factory emissions metrics dramatically. Learn how Integra's facility in Nuremberg implemented smart coils to offset 12,500 metric tons of carbon annually.",
    author: "Dr. Elena Vance (Director of Materials)",
    date: "May 28, 2026",
    readTime: "6 min read",
    tags: ["Green Forging", "Material Science", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "blg-302",
    title: "CMM Metrology and Aerospace AS9102 Alignment",
    category: "Case Study",
    summary: "Achieving repeatable aircraft structural tolerances down to ±0.001mm inside high-vibration manufacturing environments.",
    content: "Aerospace structural tolerances have tightened. To satisfy regulatory guidelines (AS9102 Rev C), complex fuselage wing-attachment brackets must be verified using coordinate measuring machines with temperature-controlled laser scanners. This report provides a layout map detailing how isolation mounting foundations offset factory hum to ensure flawless micron metrology.",
    author: "Takahiro Sato (Principal QA Auditor)",
    date: "June 02, 2026",
    readTime: "8 min read",
    tags: ["Metrology", "AS9100", "Aerospace"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
  }
];

export const CAREER_LISTINGS: JobListing[] = [
  {
    id: "job-501",
    title: "Senior CNC Mechanical Design Engineer",
    department: "Engineering & Tooling",
    location: "Hamburg Global Foundry",
    type: "Full-Time",
    experience: "5+ Years",
    salary: "€82,000 - €96,000",
    description: "Design multi-axis cutting directives, calculate machine feed-rates, and execute CAD structures in SolidWorks for client orders.",
    responsibilities: [
      "Create robust G-code trajectories for complex aerospace titanium and nickel parts",
      "Perform thermal deformation and tool-wear simulation analysis",
      "Direct technical layout coordination with high-precision metallurgy client contacts"
    ],
    requirements: [
      "B.Sc. or M.Sc. in Mechanical/Metallurgic Engineering",
      "Fluent with EdgeCAD, SolidWorks, and toolpath compilations",
      "Deep familiarity with ISO 9001 and aerospace standards (EN 9100 / AS9100)"
    ]
  },
  {
    id: "job-502",
    title: "Senior Automation Systems Architect",
    department: "Smart Systems & MES Division",
    location: "Detroit Assembly Hub & Lab",
    type: "Full-Time",
    experience: "7+ Years",
    salary: "$120,000 - $145,000",
    description: "Develop the cyber-physical control architectures tying robotic assembly cells to central cloud execution hubs.",
    responsibilities: [
      "Design and maintain SCADA networks, PLC code blocks, and IoT gateway bridges",
      "Formulate custom API data streams translating real-time machine speed metrics into analytics displays",
      "Optimize robotic cycle loops to achieve maximum factory OEE rates"
    ],
    requirements: [
      "Proven expertise in Allen-Bradley / Siemens industrial automation suites",
      "Competency with Node.js/Python server integrations and MQTT protocols",
      "Experience deploying industrial-safe cybersecurity frameworks"
    ]
  }
];

export const EST_LOCATIONS = [
  { city: "Hamburg (Global Foundry)", country: "Germany", role: "Heavy Forging & Machining Center", phone: "+49 (40) 892-0192", address: "Gewerbepark Nord 42, 22113 Hamburg" },
  { city: "Detroit (Advanced Controls Hub)", country: "United States", role: "Robotics & Logistics Logistics Hub", phone: "+1 (313) 555-0182", address: "800 Industrial Blvd, Detroit MI 48226" },
  { city: "Tokyo (High-Precision Laboratory)", country: "Japan", role: "Ultrasonic NDT Quality Center", phone: "+81 (3) 5555-0391", address: "Otemachi Chiyoda-ku 2-1, Tokyo 100-0004" }
];
