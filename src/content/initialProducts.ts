export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  specs: string;
  dimensions: string;
  image: string;
  status: "In Stock" | "Made to Order" | "Fast Track (15 Days)";
  warranty: string;
  description: string;
  features: string[];
  createdAt: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "st-win-01",
    title: "European Domal 45mm Acoustic Sliding Windows",
    category: "Aluminium Windows",
    price: "₹650 – ₹950 / sq.ft",
    specs: "6063-T6 Virgin Aluminium, Double Glazed 5mm+12A+5mm DGU, EPDM Gaskets",
    dimensions: "Custom fabricated up to 10ft height × 16ft width",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    status: "Made to Order",
    warranty: "10 Years Factory Warranty",
    description: "Heavy-duty European Domal sliding system engineered for maximum acoustic insulation (up to 38dB noise dampening) and cyclone-rated wind load tolerance.",
    features: ["Acoustic Double Glazing", "Multi-Point Italian Locking", "Concealed Stainless Steel Rollers", "Zero Air-Leakage Brush Seals"],
    createdAt: "2026-10-15",
  },
  {
    id: "st-win-02",
    title: "Minimalist Slim Profile Casement Windows",
    category: "Aluminium Windows",
    price: "₹520 – ₹780 / sq.ft",
    specs: "30mm Ultra-Slim Sightline, German Friction Stays, Powder Coated AkzoNobel",
    dimensions: "Custom sizes from 2ft × 3ft to 5ft × 7ft single sash",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80",
    status: "Fast Track (15 Days)",
    warranty: "10 Years Warranty",
    description: "Architectural slim casement windows maximizing daylight intake and ventilation while maintaining sleek, contemporary exterior aesthetics.",
    features: ["90-Degree Easy Clean Openings", "Integrated Thermal Barrier", "Double Weather EPDM Stripping"],
    createdAt: "2026-10-18",
  },
  {
    id: "st-door-01",
    title: "45mm Heavy Profile Concealed Pivot Glass Doors",
    category: "Profile Doors",
    price: "₹18,500 – ₹32,000 / leaf",
    specs: "Heavy Gauge Anodized Aluminium, German Dorma Floor Spring, 10mm Toughened Glass",
    dimensions: "Width up to 4.5ft × Height up to 10.5ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    status: "Made to Order",
    warranty: "10 Years Warranty",
    description: "Grand entrance and living partition pivot doors with concealed hydraulic hinges, integrated magnetic mortise locks, and sleek architectural handle bars.",
    features: ["Hydraulic Soft-Close", "Zero Track Flooring", "Dual-Sided Architectural Pull Handle"],
    createdAt: "2026-10-20",
  },
  {
    id: "st-part-01",
    title: "Telescopic 16x45 Sliding Glass Partitions",
    category: "Partitions & Glazing",
    price: "₹480 – ₹720 / sq.ft",
    specs: "16mm Profile Sightline, Top-Hung Heavy Bearing Tracks, 8mm Toughened Fluted Glass",
    dimensions: "3-Track, 4-Track, 6-Track synchronized telescopic spans",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    status: "Fast Track (15 Days)",
    warranty: "8 Years Warranty",
    description: "Space-saving synchronized sliding partitions allowing 75% opening clearance. Ideal for kitchen dividers, home offices, and living room zoning.",
    features: ["Synchronized Dual Sliding", "No Bottom Floor Rail Obstruction", "Fluted / Tinted Glass Options"],
    createdAt: "2026-10-22",
  },
  {
    id: "st-part-02",
    title: "12mm Toughened Frameless Office Glass Partitions",
    category: "Partitions & Glazing",
    price: "₹380 – ₹550 / sq.ft",
    specs: "Saint-Gobain 12mm Toughened Glass, Matt Black U-Channel Base & Header",
    dimensions: "Heights up to 11ft with acoustic dry-joint polycarbonate seals",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    status: "In Stock",
    warranty: "10 Years Warranty",
    description: "Sleek frameless acoustic partitions for corporate offices, conference rooms, and executive cabins across Hyderabad IT corridors.",
    features: ["36dB Acoustic Rating", "Frosted Film / Smart Glass Compatible", "Zero-Clearance Patch Fittings"],
    createdAt: "2026-10-24",
  },
  {
    id: "st-kit-01",
    title: "Luxury 710 BWP Marine Ply Modular Kitchen",
    category: "Modular Kitchens",
    price: "From ₹2.25 Lakhs",
    specs: "100% Genuine 710 Marine Grade Plywood, Blum Tandembox Hardware, Quartz Countertop",
    dimensions: "L-Shape, Parallel, U-Shape & Island Custom Layouts",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    status: "Made to Order",
    warranty: "10 Years Hyderabad Factory Warranty",
    description: "Moisture-resistant modular kitchen engineered to withstand high humidity and Indian cooking heat. Includes lifetime warranty soft-close drawers.",
    features: ["Boiling Water Proof Core", "Anti-Termite Treatment", "German Blum Soft-Close", "Concealed LED Under-Cabinet Lights"],
    createdAt: "2026-10-25",
  },
  {
    id: "st-ward-01",
    title: "Floor-to-Ceiling Slim Profile Wardrobe",
    category: "Wardrobes",
    price: "From ₹1,150 / sq.ft",
    specs: "Anodized Black Aluminium Profiles, Soft-Close Dampers, Motion-Sensor LED Strips",
    dimensions: "Custom height up to 10ft, 2-door to 6-door modules",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80",
    status: "Made to Order",
    warranty: "10 Years Warranty",
    description: "Luxury Italian-style walk-in or sliding wardrobe with tinted grey glass, integrated jewelry drawers, and heavy-duty concealed glide tracks.",
    features: ["Domal Slim Stile Profile", "Soft-Close Air Dampers", "Sensor LED Illumination", "Lockable Velvet Organizers"],
    createdAt: "2026-10-26",
  },
  {
    id: "st-rail-01",
    title: "Continuous Base Shoe Frameless Balcony Glass Railing",
    category: "Glass Railings",
    price: "₹850 – ₹1,250 / rft",
    specs: "Heavy Aluminum Base Shoe Channel, 12mm+1.52PVB+12mm Laminated Glass, SS 304 Handrail",
    dimensions: "1000mm to 1200mm balcony height compliant with IS wind norms",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    status: "Fast Track (15 Days)",
    warranty: "10 Years Warranty",
    description: "High-wind load rated frameless glass railing with continuous structural aluminum bottom profile and optional concealed drainage weep holes.",
    features: ["Cyclone-Grade Wind Resistance", "Seamless Edge-to-Edge Clarity", "Integrated LED Mood Lighting Base"],
    createdAt: "2026-10-27",
  },
  {
    id: "st-fac-01",
    title: "Structural Glazing & ACP Exterior Cladding Systems",
    category: "Facade & Cladding",
    price: "₹380 – ₹620 / sq.ft",
    specs: "Alloy 6063 T6 Sub-Structure, 4mm FR Grade Aluminium Composite Panels, Structural Silicone",
    dimensions: "Multi-story elevations, commercial showrooms and modern villa exteriors",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    status: "Made to Order",
    warranty: "15 Years Surface Warranty",
    description: "Complete building envelope facade cladding with PVDF fluorocarbon exterior coating resistant to UV fading, heat, and Hyderabad monsoon moisture.",
    features: ["Fire Retardant Core", "Anti-Fading PVDF Finish", "Laser Aligned Subframe"],
    createdAt: "2026-10-28",
  },
];

export const PRODUCT_CATEGORIES = [
  "All Categories",
  "Aluminium Windows",
  "Profile Doors",
  "Partitions & Glazing",
  "Modular Kitchens",
  "Wardrobes",
  "Glass Railings",
  "Facade & Cladding",
] as const;

export interface LeadInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  locality: string;
  propertyType: string;
  productInterest: string;
  budget: string;
  status: "New" | "Contacted" | "Measurement Scheduled" | "In Fabrication" | "Completed";
  createdAt: string;
  notes: string;
}

export const INITIAL_LEADS: LeadInquiry[] = [
  {
    id: "lead-101",
    name: "Rajesh Varma",
    phone: "+91 98490 12345",
    email: "rajesh.varma@example.com",
    locality: "Jubilee Hills, Road No 36",
    propertyType: "Independent Villa (4,500 sq.ft)",
    productInterest: "European Domal Windows + Balcony Glass Railings",
    budget: "₹8.5 Lakhs",
    status: "Measurement Scheduled",
    createdAt: "2026-10-30",
    notes: "Site visit confirmed for Sunday 11 AM. Laser survey required for 14 large balcony openings.",
  },
  {
    id: "lead-102",
    name: "Dr. Srinivas Rao",
    phone: "+91 99887 65432",
    email: "srinivas.rao@example.com",
    locality: "Kokapet (Near Golden Mile)",
    propertyType: "3 BHK Apartment (2,100 sq.ft)",
    productInterest: "Modular Kitchen (710 BWP) + Master Wardrobe",
    budget: "₹4.2 Lakhs",
    status: "New",
    createdAt: "2026-10-31",
    notes: "Requested quote for L-shaped kitchen with quartz countertop and soft-close Blum lift-ups.",
  },
  {
    id: "lead-103",
    name: "Ananya Reddy",
    phone: "+91 94401 98765",
    email: "ananya.r@example.com",
    locality: "Financial District / Gachibowli",
    propertyType: "4 BHK Duplex (3,200 sq.ft)",
    productInterest: "Telescopic 16x45 Partitions + Slim Profile Doors",
    budget: "₹5.8 Lakhs",
    status: "In Fabrication",
    createdAt: "2026-10-27",
    notes: "Measurements verified. Fabrication underway at Hayathnagar unit. Delivery scheduled for 10th Nov.",
  },
  {
    id: "lead-104",
    name: "Vikram Malhotra",
    phone: "+91 98765 43210",
    email: "vikram@techhub.in",
    locality: "Hitec City / Madhapur",
    propertyType: "Commercial Office Studio (3,800 sq.ft)",
    productInterest: "12mm Toughened Frameless Glass Partitions",
    budget: "₹3.5 Lakhs",
    status: "Completed",
    createdAt: "2026-10-21",
    notes: "120 running feet partitions handed over with soundproofing test passed. Client extremely satisfied.",
  },
];
