export interface DesignItem {
  id: string;
  title: string;
  image: string;
  size: string;
  specs: string;
  category: string;
  priceEstimate?: string;
}

export interface TrendingDesign {
  id: string;
  title: string;
  image: string;
  tag: string;
  specs: string;
}

export interface DesignCatalog {
  slug: string;
  title: string;
  shortTitle: string;
  totalResults: string;
  descriptionHeading: string;
  description: string;
  expandedDescription: string;
  startingPrice: string;
  startingEmi: string;
  heroFeaturedImage: string;
  trendingHeadline: string;
  trendingSubheadline: string;
  trendingDesigns: TrendingDesign[];
  filterCategories: string[];
  designs: DesignItem[];
  faqs: { question: string; answer: string }[];
}

export const CATALOGS: Record<string, DesignCatalog> = {
  "modular-kitchens": {
    slug: "modular-kitchens",
    title: "Modular Kitchen Designs",
    shortTitle: "Modular Kitchens",
    totalResults: "1,420+",
    descriptionHeading: "What are Modular Kitchens?",
    description:
      "Modular Kitchen Designs are a seamless fusion of functionality and style, crafted to enhance modern Indian cooking spaces. Engineered at our Hayathnagar fabrication facility, each kitchen features 100% genuine 710 BWP (Boiling Water Proof) marine plywood, anti-termite HDHMR cores, and world-class German soft-close fittings.",
    expandedDescription:
      "From compact L-shaped layouts for city apartments to expansive island and parallel counter setups for luxury villas in Jubilee Hills and Kokapet, our factory-direct manufacturing eliminates middlemen costs. Every design includes precision laser site calibration, heat-and-stain-resistant quartz countertops, and a 10-year structural warranty.",
    startingPrice: "₹1.8 Lakh*",
    startingEmi: "₹3,150/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Kitchen Designs",
    trendingSubheadline:
      "Design ideas chosen by Hyderabad homeowners in October, 2026",
    trendingDesigns: [
      {
        id: "trend-1",
        title: "Modern Scandinavian Kitchen in Pastel Blue & Frost White",
        image:
          "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80",
        tag: "Most Popular in Kokapet",
        specs: "Acrylic Gloss • Blum Servo-Drive • Quartz Top",
      },
      {
        id: "trend-2",
        title: "Minimalist Handleless Warm Wood & Concrete Finish",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        tag: "Gachibowli Top Choice",
        specs: "J-Pull Profile • Anti-Fingerprint Laminate",
      },
      {
        id: "trend-3",
        title: "Grand Island Kitchen in Statuario Marble & Champagne Gold",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        tag: "Luxury Jubilee Hills Villa",
        specs: "Integrated Breakfast Bar • Tall Pantry Unit",
      },
    ],
    filterCategories: [
      "All Designs",
      "L-Shaped",
      "U-Shaped",
      "Parallel / Island",
      "Straight Line",
      "Acrylic Finish",
      "PU Lacquer",
    ],
    designs: [
      {
        id: "k-1",
        title: "Modern Open Kitchen in Warm Walnut & Frost White",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        size: "Size: 15x12 feet",
        specs: "710 BWP Marine Ply • Handleless Gola Profile • Kesseböhmer Pullouts",
        category: "L-Shaped",
        priceEstimate: "₹2.4 Lakhs",
      },
      {
        id: "k-2",
        title: "Classic U-Shaped Kitchen in Sage Grey & Mint with Corner Carousel",
        image:
          "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x12 feet",
        specs: "PU Matte Finish • Magic Corner Shelves • Chimney Duct Concealment",
        category: "U-Shaped",
        priceEstimate: "₹2.8 Lakhs",
      },
      {
        id: "k-3",
        title: "Modern L-Shaped Kitchen in Royal Blue with Brass Knurled Handles",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        size: "Size: 14x12 feet",
        specs: "High Gloss Acrylic • Fluted Glass Overhead Cabinets • Spice Racks",
        category: "L-Shaped",
        priceEstimate: "₹2.6 Lakhs",
      },
      {
        id: "k-4",
        title: "Contemporary Island Kitchen in Yellow & Black Matte Backsplash",
        image:
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x10 feet",
        specs: "Anti-Scratch Acrylic • Built-In Microwave Cavity • LED Strips",
        category: "Parallel / Island",
        priceEstimate: "₹2.1 Lakhs",
      },
      {
        id: "k-5",
        title: "Luxury Island Kitchen in Walnut with Quartz Breakfast Counter",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        size: "Size: 16x14 feet",
        specs: "Under-Counter Storage • Wine Rack Inset • Blum Tandembox Drawers",
        category: "Parallel / Island",
        priceEstimate: "₹3.8 Lakhs",
      },
      {
        id: "k-6",
        title: "Modern Open Kitchen in Cappuccino with Breakfast Peninsula",
        image:
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        size: "Size: 16x14 feet",
        specs: "Warm Cappuccino Acrylic • Soft Close Blum Hinges • Recessed Profiles",
        category: "Parallel / Island",
        priceEstimate: "₹3.2 Lakhs",
      },
      {
        id: "k-7",
        title: "Contemporary U-Shaped Kitchen in Olive Green with Built-in Ovens",
        image:
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
        size: "Size: 16x14 feet",
        specs: "Olive Green Matte PU • Dual Height Counters • Deep Wicker Baskets",
        category: "U-Shaped",
        priceEstimate: "₹3.4 Lakhs",
      },
      {
        id: "k-8",
        title: "Minimalist Straight Line Kitchen in Pure White for 2BHK Apartments",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x8 feet",
        specs: "Compact Space Saving • Rolling Shutter Appliance Garage • Quartz Sink",
        category: "Straight Line",
        priceEstimate: "₹1.8 Lakhs",
      },
      {
        id: "k-9",
        title: "Dual-Tone Parallel Kitchen in Charcoal Grey & Natural Birch",
        image:
          "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
        size: "Size: 14x9 feet",
        specs: "Double Prep Counters • Pull-out Pantry Larder • Heavy Duty Sliders",
        category: "Parallel / Island",
        priceEstimate: "₹2.5 Lakhs",
      },
      {
        id: "k-10",
        title: "High-Gloss Acrylic Kitchen in Burgundy & Champagne with Profile Glass",
        image:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
        size: "Size: 13x11 feet",
        specs: "2mm Edge Banding • Aluminium Profile Shutter Frames • Motion Sensor Lights",
        category: "Acrylic Finish",
        priceEstimate: "₹2.9 Lakhs",
      },
      {
        id: "k-11",
        title: "Italian Style Handleless Kitchen in Cashmere & Terrazzo Inset",
        image:
          "https://images.unsplash.com/photo-1502005229762-ee152da915ba?auto=format&fit=crop&w=800&q=80",
        size: "Size: 15x11 feet",
        specs: "Velvet Touch PU • 100% BWP Marine Plywood • Integrated Dishwasher",
        category: "PU Lacquer",
        priceEstimate: "₹3.6 Lakhs",
      },
      {
        id: "k-12",
        title: "Industrial Modern Kitchen with Matte Black Hardware & Fluted Glass",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        size: "Size: 14x13 feet",
        specs: "Anodized Black Handles • Fluted Overhead Displays • Granular Quartz",
        category: "L-Shaped",
        priceEstimate: "₹3.1 Lakhs",
      },
      {
        id: "k-13",
        title: "Contemporary Minimalist Kitchen with Warm Wooden Breakfast Bar",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        size: "Size: 15x13 feet",
        specs: "Seamless Quartz Edge • Blum Soft-Close Hinges • Spice Bottle Pull-Out",
        category: "Parallel / Island",
        priceEstimate: "₹2.7 Lakhs",
      },
      {
        id: "k-14",
        title: "Modern European Kitchen in Dove Grey with Fluted Wall Panelling",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
        size: "Size: 13x10 feet",
        specs: "Moisture Resistant HDHMR • Hidden Cutlery Trays • Stainless Steel Sink",
        category: "L-Shaped",
        priceEstimate: "₹2.3 Lakhs",
      },
    ],
    faqs: [
      {
        question: "What core materials are used for Sky Tech modular kitchens in Hyderabad?",
        answer:
          "We construct all wet-zone carcasses exclusively in 100% genuine IS:710 Boiling Water Proof (BWP) marine plywood to guarantee zero water swelling in humid conditions. Overhead dry units utilize high-density HDHMR boards for perfect screw-holding strength.",
      },
      {
        question: "How long does fabrication and installation take?",
        answer:
          "Precision CNC cutting and edge-banding takes 12–15 business days at our Hayathnagar fabrication facility. On-site modular assembly and countertop installation is completed within 3 to 5 days with zero on-site sawdust or mess.",
      },
      {
        question: "Can I customize the kitchen layout according to my Hyderabad apartment floor plan?",
        answer:
          "Yes. Every single Sky Tech modular kitchen is custom-engineered to your exact room dimensions. Our technician conducts a millimeter-accurate laser survey to draft a tailored 3D CAD design.",
      },
    ],
  },

  "aluminium-wardrobes": {
    slug: "aluminium-wardrobes",
    title: "Wardrobe Designs & Storage Systems",
    shortTitle: "Wardrobes",
    totalResults: "980+",
    descriptionHeading: "What are Modern Modular & Aluminium Wardrobes?",
    description:
      "Our wardrobe collections combine sleek European slim aluminium profiles, tinted/fluted toughened glass, and factory-engineered modular cabinetry. Say goodbye to swollen wooden sliding doors that stick or wobble—our heavy-duty bottom-roller tracks deliver silent, frictionless glide.",
    expandedDescription:
      "Whether you desire a grand walk-in dressing suite with automated sensor LED hanging rails or compact floor-to-ceiling sliding wardrobes with full-length vanity mirrors, our Hyderabad facility custom-fabricates every unit with precision 2mm edge banding and German Blum soft-close hinges.",
    startingPrice: "₹75,000*",
    startingEmi: "₹1,850/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Wardrobe Designs",
    trendingSubheadline:
      "Architectural storage solutions chosen by Hyderabad homeowners in October, 2026",
    trendingDesigns: [
      {
        id: "trend-w1",
        title: "Floor-to-Ceiling Tinted Glass Wardrobe with Black Slim Profile",
        image:
          "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        tag: "Banjara Hills Favorite",
        specs: "Grey Tint Glass • Warm LED Strip • Concealed Pivots",
      },
      {
        id: "trend-w2",
        title: "Walk-In Master Wardrobe with Integrated Jewellery Vanity Island",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        tag: "Luxury Villa Choice",
        specs: "Velvet Drawers • Dual Hanging • Glass Top Island",
      },
      {
        id: "trend-w3",
        title: "Minimalist 3-Door Sliding Wardrobe with Fluted Acoustic Panels",
        image:
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
        tag: "High Rise Kokapet Apartments",
        specs: "Silent Sliding Track • Anti-Collision Buffers",
      },
    ],
    filterCategories: [
      "All Designs",
      "Sliding Door",
      "Hinged Door",
      "Walk-In Wardrobes",
      "Glass Profile",
      "With Loft",
      "Built-in Vanity",
    ],
    designs: [
      {
        id: "w-1",
        title: "Modern 4-Door Glass Profile Wardrobe with Champagne Trim",
        image:
          "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x9 feet",
        specs: "Bronze Tint Toughened Glass • Anodized Aluminium Frame • Sensor LED",
        category: "Glass Profile",
        priceEstimate: "₹1.4 Lakhs",
      },
      {
        id: "w-2",
        title: "Contemporary Minimalist 3-Door Sliding Wardrobe in Ash White",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x9 feet",
        specs: "Heavy Duty Synchronized Track • Full Loft • Anti-Wobble Rollers",
        category: "Sliding Door",
        priceEstimate: "₹95,000",
      },
      {
        id: "w-3",
        title: "Luxury Walk-In Closet with Open Shelving & Dedicated Shoe Display",
        image:
          "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x10 feet",
        specs: "710 BWP Plywood • Velvet Lined Trays • Integrated Accent Downlights",
        category: "Walk-In Wardrobes",
        priceEstimate: "₹2.2 Lakhs",
      },
      {
        id: "w-4",
        title: "Floor-to-Ceiling Fluted Glass Wardrobe with Sleek Black Profile",
        image:
          "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
        size: "Size: 9x9 feet",
        specs: "Mori Fluted Toughened Glass • Blum Soft Close • Telescopic Tie Pull",
        category: "Glass Profile",
        priceEstimate: "₹1.6 Lakhs",
      },
      {
        id: "w-5",
        title: "Master Bedroom Upholstered & Wood Grain Wardrobe with Vanity Table",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        size: "Size: 11x9 feet",
        specs: "Integrated Backlit Mirror • Drawers with Digital Lock • Soft Hinge",
        category: "Built-in Vanity",
        priceEstimate: "₹1.3 Lakhs",
      },
      {
        id: "w-6",
        title: "Scandinavian Open Concept Wardrobe with Modular Storage Bins",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x8 feet",
        specs: "Natural Oak Finish • Heavy Load Hanging Rods • Adjustable Shelves",
        category: "Hinged Door",
        priceEstimate: "₹85,000",
      },
      {
        id: "w-7",
        title: "Ultra-Sleek Smoked Mirror Sliding Wardrobe with Concealed Edge Grip",
        image:
          "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x9.5 feet",
        specs: "Belgian Smoked Mirror • Zero Vibration Dampers • Full Height Loft",
        category: "Sliding Door",
        priceEstimate: "₹1.5 Lakhs",
      },
      {
        id: "w-8",
        title: "Classic Walnut Veneer 4-Door Wardrobe with Brushed Brass Handles",
        image:
          "https://images.unsplash.com/photo-1540518614846-7ede433c4ef3?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x9 feet",
        specs: "Natural Walnut Finish • 165° Wide Opening Hinges • Secret Locker",
        category: "Hinged Door",
        priceEstimate: "₹1.1 Lakhs",
      },
      {
        id: "w-9",
        title: "Custom Dressing Suite with Central Glass Top Jewellery Counter",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        size: "Size: 14x12 feet",
        specs: "Modular Island • Multi-Level Accessory Dividers • Full Perimeter LED",
        category: "Walk-In Wardrobes",
        priceEstimate: "₹2.6 Lakhs",
      },
      {
        id: "w-10",
        title: "Telescopic 3-Track Slim Glass Wardrobe for Master Suites",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x9 feet",
        specs: "Overlapping Synchronized Slide • 10-Year Track Guarantee • Grey Poly",
        category: "Sliding Door",
        priceEstimate: "₹1.8 Lakhs",
      },
      {
        id: "w-11",
        title: "High Gloss White Acrylic Wardrobe with Rose Gold Groove Profile",
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
        size: "Size: 9x9 feet",
        specs: "Anti-Yellowing UV Coat • Soft Pull Drawers • Saree Hanging Rails",
        category: "Hinged Door",
        priceEstimate: "₹1.2 Lakhs",
      },
      {
        id: "w-12",
        title: "Smart Ergonomic Wardrobe with Pull-Down Clothes Lift & Trouser Rack",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x9 feet",
        specs: "Hydraulic Clothes Hanger Lift • Stainless Steel Trouser Organizer",
        category: "With Loft",
        priceEstimate: "₹1.35 Lakhs",
      },
    ],
    faqs: [
      {
        question: "Why choose aluminium profile glass wardrobes over standard wooden doors?",
        answer:
          "Aluminium profile glass doors never warp, bow, or get stuck over time like heavy wooden doors. The lightweight aerospace-grade frame paired with Saint-Gobain toughened safety glass provides luxury European aesthetics with effortless gliding.",
      },
      {
        question: "Are internal partitions customizable for Indian clothing needs?",
        answer:
          "Absolutely. We design dedicated organizers for sarees, heavy traditional wear, shoe collections, watches, and jewellery, including digital locking safe boxes.",
      },
    ],
  },

  "aluminium-windows": {
    slug: "aluminium-windows",
    title: "Aluminium & Domal Window Systems",
    shortTitle: "Windows & Facades",
    totalResults: "750+",
    descriptionHeading: "High Performance Architectural Window Systems",
    description:
      "Sky Tech Windows specializes in European Domal 27mm & 45mm series aluminium windows, heavy-duty sliding patio systems, and acoustic casement glazing. Fabricated with virgin 6063-T6 alloy at our Hyderabad Khalsa hub, our windows deliver superior thermal insulation, water tightness, and acoustic dampening.",
    expandedDescription:
      "Engineered specifically for Hyderabad's weather—from torrential monsoon rains to harsh summer heat—our systems feature EPDM gasket compression seals, multi-point locking security, and integrated high-grade stainless steel mosquito mesh sliders.",
    startingPrice: "₹450 / sq.ft*",
    startingEmi: "₹1,400/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Window Systems",
    trendingSubheadline:
      "Acoustic & architectural systems installed across Hyderabad luxury homes",
    trendingDesigns: [
      {
        id: "trend-win1",
        title: "Domal 27mm 3-Track Sliding Window with Integrated Mosquito Mesh",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        tag: "Most Popular in Hyderabad",
        specs: "EPDM Gaskets • 6mm Toughened Glass • Stainless Steel Mesh",
      },
      {
        id: "trend-win2",
        title: "Floor-to-Ceiling Panoramic Slim Profile Balcony Slider",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
        tag: "High-Rise Kokapet Towers",
        specs: "Zero Sill Flush Track • Multi-Point Security Locks",
      },
      {
        id: "trend-win3",
        title: "Heavy-Duty Acoustic Casement Window with Double Glazing (DGU)",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
        tag: "Road Noise Cancellation",
        specs: "35dB Sound Reduction • Friction Stay Hinges • Dual Beading",
      },
    ],
    filterCategories: [
      "All Designs",
      "Domal Series",
      "Sliding Windows",
      "Casement Windows",
      "Tilt & Turn",
      "Balcony Sliding Doors",
      "Acoustic DGU",
    ],
    designs: [
      {
        id: "win-1",
        title: "Domal 27mm 3-Track Sliding Window with Stainless Mesh",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        size: "Size: 6x5 feet",
        specs: "Virgin Aluminium • Interlock Sealing • Anti-Lift Blocks",
        category: "Domal Series",
        priceEstimate: "₹18,500",
      },
      {
        id: "win-2",
        title: "Panoramic 4-Panel Sliding Glass Door for Living Balcony",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x8 feet",
        specs: "Heavy Weight Carrying Rollers • 8mm Saint-Gobain Toughened",
        category: "Balcony Sliding Doors",
        priceEstimate: "₹48,000",
      },
      {
        id: "win-3",
        title: "Acoustic Double Glazed (DGU) Casement Window in Charcoal Black",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
        size: "Size: 5x4 feet",
        specs: "5mm + 12A + 5mm Argon Filled Glass • 38dB Noise Reduction",
        category: "Acoustic DGU",
        priceEstimate: "₹22,000",
      },
      {
        id: "win-4",
        title: "Ultra-Slim Sightline Minimalist Sliding Window System",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x8 feet",
        specs: "18mm Central Interlock • Concealed Outer Frame In Wall",
        category: "Sliding Windows",
        priceEstimate: "₹52,000",
      },
      {
        id: "win-5",
        title: "Modern Villa Casement Window with Integrated Grille Inset",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
        size: "Size: 5x5 feet",
        specs: "Architectural Powder Coat 80 Microns • Child Safety Latches",
        category: "Casement Windows",
        priceEstimate: "₹16,500",
      },
      {
        id: "win-6",
        title: "European Tilt & Turn Acoustic Window for Master Bedroom",
        image:
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
        size: "Size: 4x5 feet",
        specs: "Dual Axis Roto Hardware • Micro-Ventilation Draft Mode",
        category: "Tilt & Turn",
        priceEstimate: "₹24,000",
      },
      {
        id: "win-7",
        title: "Corner Glass Sliding System for Panoramic Balconies",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        size: "Size: 10x10 feet L-Shape",
        specs: "Pillared or Pillarless 90° Joint • Weatherproof Compression Seal",
        category: "Sliding Windows",
        priceEstimate: "₹65,000",
      },
      {
        id: "win-8",
        title: "High-Rise Villa Architectural Bay Window with Integrated Bench",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x6 feet",
        specs: "Heavy Structural Steel Sub-Frame • Low-E Tint Heat Rejection",
        category: "Domal Series",
        priceEstimate: "₹34,000",
      },
    ],
    faqs: [
      {
        question: "What is the difference between ordinary aluminium and European Domal series?",
        answer:
          "Standard aluminium profiles use thin commercial gauges with sharp screws that rattle or leak. The Domal series uses engineered Italian dies with thick 1.5mm–2.0mm structural walls, precision hydraulic corner crimping, and dual EPDM rubber gaskets that completely seal against water and wind.",
      },
      {
        question: "Do you supply mosquito mesh tracks?",
        answer:
          "Yes. All our 3-track sliding series feature a dedicated third channel fitted with 304-grade stainless steel wire mesh or pleated retractable screens to keep mosquitoes and insects out while allowing 100% natural ventilation.",
      },
    ],
  },

  "12mm-glass-partitions": {
    slug: "12mm-glass-partitions",
    title: "12mm Toughened Glass Partitions & Shower Enclosures",
    shortTitle: "Glass Partitions",
    totalResults: "620+",
    descriptionHeading: "Architectural Glass Enclosures & Partitions",
    description:
      "Transform bathrooms and modern office spaces with frameless 12mm Saint-Gobain toughened safety glass partitions. Featuring Grade 304 stainless steel and solid brass hardware in matte black, brushed gold, and satin chrome finishes.",
    expandedDescription:
      "Every partition is custom-tempered to withstand thermal shock and high impact. Installed with mold-resistant silicone beading and magnetic water-tight door gaskets for leakproof luxury bathrooms across Hyderabad.",
    startingPrice: "₹420 / sq.ft*",
    startingEmi: "₹1,200/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Glass Partitions",
    trendingSubheadline:
      "Frameless & slim-fluted glass installations in premium Hyderabad properties",
    trendingDesigns: [
      {
        id: "trend-g1",
        title: "Frameless Walk-In Shower Partition with Matte Black Stabilizer Bar",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        tag: "Modern Master Bathrooms",
        specs: "10mm / 12mm Saint-Gobain Toughened • Anti-Limescale Coating",
      },
      {
        id: "trend-g2",
        title: "Corner L-Shaped Shower Enclosure with Soft Close Pivot Door",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
        tag: "Luxury Villa En-Suite",
        specs: "Brass Hinges • Magnetic Splash Seals • Floor Retainer",
      },
      {
        id: "trend-g3",
        title: "Acoustic Glass Office Cabin Partition with Black Aluminium Framework",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        tag: "Hitec City Commercial",
        specs: "12mm Acoustic Interlayer • Concealed Floor Spring Door",
      },
    ],
    filterCategories: [
      "All Designs",
      "Shower Cubicles",
      "Walk-In Partitions",
      "Sliding Glass Doors",
      "Office Partitions",
      "Fluted Privacy Glass",
    ],
    designs: [
      {
        id: "g-1",
        title: "Minimalist Frameless Walk-In Shower Glass Screen",
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        size: "Size: 6.5x3.5 feet",
        specs: "12mm Toughened • SS304 Wall Clamps • Clear Shield Nano Coating",
        category: "Walk-In Partitions",
        priceEstimate: "₹16,000",
      },
      {
        id: "g-2",
        title: "L-Shaped Corner Glass Shower Enclosure with Brushed Gold Hardware",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
        size: "Size: 4x4x6.5 feet",
        specs: "Solid Brass Hinges • Magnetic Leakproof Beading • Towel Bar Grip",
        category: "Shower Cubicles",
        priceEstimate: "₹32,000",
      },
      {
        id: "g-3",
        title: "Modern Minimalist White Marble Bathroom Glass Partition",
        image:
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
        size: "Size: 7x4 feet",
        specs: "Recessed U-Channel • Seamless Floor Transition • Polish Beveled Edge",
        category: "Walk-In Partitions",
        priceEstimate: "₹19,000",
      },
      {
        id: "g-4",
        title: "Industrial Black Grid Shower Partition with Tempered Safety Glass",
        image:
          "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        size: "Size: 6.5x4 feet",
        specs: "Ceramic Frit Printed Black Grid • Heavy Gauge Aluminium Trim",
        category: "Shower Cubicles",
        priceEstimate: "₹24,000",
      },
      {
        id: "g-5",
        title: "Commercial Office Glass Cabin Partitions with Frameless Pivot Doors",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        size: "Size: 20x9 feet",
        specs: "Dorma Floor Spring • Glass-to-Glass Silicone Joint • Privacy Frosting",
        category: "Office Partitions",
        priceEstimate: "₹55,000",
      },
      {
        id: "g-6",
        title: "Executive Conference Room Acoustic Double Glass Partition",
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        size: "Size: 24x9 feet",
        specs: "Double Toughened Glass • Sound Reduction Rating 42dB • Black Profile",
        category: "Office Partitions",
        priceEstimate: "₹85,000",
      },
      {
        id: "g-7",
        title: "Fluted Toughened Privacy Glass Partition for Living & Dining Separation",
        image:
          "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x8.5 feet",
        specs: "Mori Fluted Profile • Slim 20mm Champagne Frame • Floor Pivot",
        category: "Fluted Privacy Glass",
        priceEstimate: "₹38,000",
      },
      {
        id: "g-8",
        title: "Sliding Glass Shower Door with Top Roller Hanging Track",
        image:
          "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
        size: "Size: 5x6.5 feet",
        specs: "Solid Stainless Steel Tubular Rail • Anti-Jump Wheel Guides",
        category: "Sliding Glass Doors",
        priceEstimate: "₹26,000",
      },
    ],
    faqs: [
      {
        question: "Is 12mm glass safe for high-traffic shower partitions?",
        answer:
          "Yes. We exclusively use certified Saint-Gobain toughened safety glass which is 5 times stronger than annealed glass. In the extremely rare event of breakage, it crumbles into small blunt granules preventing injury.",
      },
      {
        question: "How do you prevent water leakage in frameless showers?",
        answer:
          "We install specialized translucent magnetic door seals, PVC bottom sweep gaskets with deflector fins, and low-profile aluminium water dams along the threshold to keep water contained inside.",
      },
    ],
  },

  "interior-designing": {
    slug: "interior-designing",
    title: "Full Home & Living Interior Designs",
    shortTitle: "Full Home Interiors",
    totalResults: "1,850+",
    descriptionHeading: "End-to-End Turnkey Interior Execution in Hyderabad",
    description:
      "From architectural false ceilings and bespoke TV entertainment consoles to bedroom panelling and foyer entries, Sky Tech delivers turnkey home interiors with factory-finished perfection and zero subcontractor delays.",
    expandedDescription:
      "Backed by in-house 3D CAD engineers and direct factory joinery, our full-home packages cover 1 BHK, 2 BHK, 3 BHK, 4 BHK apartments and sprawling duplex villas across Hyderabad.",
    startingPrice: "₹4.5 Lakhs*",
    startingEmi: "₹7,800/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Living & Bedroom Designs",
    trendingSubheadline:
      "Contemporary luxury concepts curated for modern Hyderabad residences",
    trendingDesigns: [
      {
        id: "trend-i1",
        title: "Fluted Marble TV Unit with Floating Console & Concealed Ambient LED",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        tag: "Top Living Room Style",
        specs: "Statuary Marble Slab • Charcoal Fluted Panels • Blum Drawer Runners",
      },
      {
        id: "trend-i2",
        title: "Master Bedroom with Full-Height Fabric Panelling & Pendant Sconces",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        tag: "Most Loved Master Bedroom",
        specs: "Acoustic Velvet Headboard • Warm 3000K Lighting • Floating Nightstands",
      },
      {
        id: "trend-i3",
        title: "Open Plan Living & Dining Partition with Integrated Bar Counter",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        tag: "Villa Special",
        specs: "Brass Inset Details • Tinted Glass Shelves • Bar Stool Inset",
      },
    ],
    filterCategories: [
      "All Designs",
      "Living Rooms",
      "Master Bedrooms",
      "TV Units",
      "False Ceilings",
      "Pooja Rooms",
      "Dining Areas",
    ],
    designs: [
      {
        id: "i-1",
        title: "Contemporary Minimalist Living Room with Fluted Accent Wall",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        size: "Size: 18x14 feet",
        specs: "Charcoal Charcoal Louvers • Backlit Display Shelves • Cove Ceiling",
        category: "Living Rooms",
        priceEstimate: "₹1.8 Lakhs",
      },
      {
        id: "i-2",
        title: "Hotel Luxury Master Bedroom with Headboard Acoustic Panelling",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        size: "Size: 16x13 feet",
        specs: "Custom King Bed • Floating Bedside Units • Integrated Wardrobe",
        category: "Master Bedrooms",
        priceEstimate: "₹2.2 Lakhs",
      },
      {
        id: "i-3",
        title: "Architectural Gypsum False Ceiling with Magnetic Track Lights",
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        size: "Size: 22x16 feet",
        specs: "Saint-Gobain Gyproc Sheets • 48V Magnetic Track • Dimmable COB",
        category: "False Ceilings",
        priceEstimate: "₹85,000",
      },
      {
        id: "i-4",
        title: "Modern Floating TV Entertainment Unit with Stone Veneer Backdrop",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x9 feet",
        specs: "Wire Concealment Conduit • Soundbar Niche • Matte PU Finish",
        category: "TV Units",
        priceEstimate: "₹75,000",
      },
      {
        id: "i-5",
        title: "Grand Entrance Foyer with Accent Mirror & Console Storage",
        image:
          "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
        size: "Size: 8x6 feet",
        specs: "Shoe Storage with Air Vents • Key Holder Inset • Warm Spotlights",
        category: "Living Rooms",
        priceEstimate: "₹55,000",
      },
      {
        id: "i-6",
        title: "Modern Dining Room with Fluted Glass Divider & Crockery Unit",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        size: "Size: 14x12 feet",
        specs: "Push-to-Open Glass Shutters • Wine Glass Hanger • LED Backlit",
        category: "Dining Areas",
        priceEstimate: "₹1.1 Lakhs",
      },
      {
        id: "i-7",
        title: "Traditional-Meets-Modern CNC Cut Pooja Mandir with Profile Glass Door",
        image:
          "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
        size: "Size: 6x8 feet",
        specs: "Corian Backlit Jali • Brass Bell Insets • Deep Storage Drawers",
        category: "Pooja Rooms",
        priceEstimate: "₹95,000",
      },
      {
        id: "i-8",
        title: "Scandinavian Guest Bedroom with Built-In Study Desk & Wardrobe",
        image:
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        size: "Size: 12x11 feet",
        specs: "Multi-Functional Study Table • Book Rack • Ergonomic Cable Routing",
        category: "Master Bedrooms",
        priceEstimate: "₹1.4 Lakhs",
      },
    ],
    faqs: [
      {
        question: "How does Sky Tech manage full-home interiors?",
        answer:
          "We assign a dedicated project engineer who oversees everything from 3D CAD approvals and factory fabrication in Hayathnagar to on-site assembly, painting, and deep cleaning.",
      },
      {
        question: "Do you offer EMIs or milestone-based payments?",
        answer:
          "Yes. We support milestone-based payments tied directly to verifiable delivery stages (Design signoff, Factory fabrication inspection, Site delivery, Handover), as well as flexible EMI plans starting at ₹3,300/month.",
      },
    ],
  },

  "glass-railings": {
    slug: "glass-railings",
    title: "Glass Railings & Balustrade Systems",
    shortTitle: "Glass Railings",
    totalResults: "450+",
    descriptionHeading: "Frameless Glass Railings for Balconies & Staircases",
    description:
      "Engineered with heavy-duty structural aluminium base shoe channels and 12mm–15mm PVB laminated toughened glass. Engineered to withstand high wind loads for high-rise towers in Hyderabad.",
    expandedDescription:
      "Available with continuous slim aluminium top rails or 100% frameless glass profiles with point-fixed stainless steel spigots for uninterrupted panoramic city views.",
    startingPrice: "₹650 / sq.ft*",
    startingEmi: "₹1,100/month",
    heroFeaturedImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    trendingHeadline: "Top Trending Railing Designs",
    trendingSubheadline:
      "Balcony & staircase installations engineered for high-rise safety",
    trendingDesigns: [
      {
        id: "trend-r1",
        title: "Continuous Aluminium Base Shoe Frameless Balcony Railing",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        tag: "Kokapet High Rise Towers",
        specs: "15mm Laminated Glass • Anodized Base Channel • Zero View Obstruction",
      },
      {
        id: "trend-r2",
        title: "Floating Internal Staircase Glass Railing with Wood Handrail",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
        tag: "Duplex Villa Trend",
        specs: "Side Mount SS Standoffs • Teakwood Top Cap • Seamless Edges",
      },
      {
        id: "trend-r3",
        title: "Heavy-Duty Duplex Spigot Balustrade in Matte Black SS316",
        image:
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
        tag: "Villa Balconies",
        specs: "Core Drilled Spigots • 12mm SentryGlas • High Wind Tested",
      },
    ],
    filterCategories: [
      "All Designs",
      "Balcony Railings",
      "Staircase Railings",
      "Base Shoe Profile",
      "Spigot Mounted",
      "Terrace Glass",
    ],
    designs: [
      {
        id: "r-1",
        title: "Continuous Aluminium Base Channel Frameless Balcony Glass",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        size: "Size: 18 Rft Length",
        specs: "Heavy Structural Base • EPDM Pressure Blocks • 12mm Toughened",
        category: "Balcony Railings",
        priceEstimate: "₹24,000",
      },
      {
        id: "r-2",
        title: "Duplex Villa Floating Glass Staircase Railing with Round Spigots",
        image:
          "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
        size: "Size: 25 Rft Staircase",
        specs: "SS 304 Solid Spigots • Polished Radius Corners • Teak Handrail",
        category: "Staircase Railings",
        priceEstimate: "₹36,000",
      },
      {
        id: "r-3",
        title: "Terrace Deck Frameless Railing with Slim Aluminium Top Cap",
        image:
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
        size: "Size: 30 Rft Deck",
        specs: "15mm PVB Laminated • Drainage Weep Holes • Rust Resistant",
        category: "Terrace Glass",
        priceEstimate: "₹42,000",
      },
      {
        id: "r-4",
        title: "Side-Mounted Standoff Glass Balustrade for Minimalist Villas",
        image:
          "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
        size: "Size: 15 Rft",
        specs: "50mm Solid SS Discs • Heavy Anchor Bolts • Clean Geometric Lines",
        category: "Balcony Railings",
        priceEstimate: "₹21,000",
      },
    ],
    faqs: [
      {
        question: "Can frameless glass railings withstand Hyderabad monsoon winds?",
        answer:
          "Yes. Our base shoe profiles and 12mm–15mm laminated glass panels are certified to exceed IS standard wind load requirements up to the 40th floor.",
      },
    ],
  },
};

// Aliases mapping so every single link from the Header and navigation works seamlessly!
const SLUG_ALIASES: Record<string, string> = {
  // Kitchen variations
  "kitchen-designs": "modular-kitchens",
  "modular-kitchen": "modular-kitchens",
  "modular-kitchens": "modular-kitchens",
  "kitchen-sinks": "modular-kitchens",

  // Wardrobe variations
  "wardrobe-designs": "aluminium-wardrobes",
  "wardrobes": "aluminium-wardrobes",
  "aluminium-wardrobes": "aluminium-wardrobes",
  "profile-cupboards": "aluminium-wardrobes",

  // Window variations
  "window-designs": "aluminium-windows",
  "aluminium-windows": "aluminium-windows",
  "aluminium-domal-windows": "aluminium-windows",
  "aluminium-sliding-windows": "aluminium-windows",
  "aluminium-casement-windows": "aluminium-windows",
  "upvc-windows": "aluminium-windows",
  "aluminium-mosquito-sliding-doors": "aluminium-windows",

  // Glass Partitions & Bathrooms
  "bathroom-designs": "12mm-glass-partitions",
  "12mm-glass-partitions": "12mm-glass-partitions",
  "glass-doors-office": "12mm-glass-partitions",
  "office-aluminium-partitions": "12mm-glass-partitions",
  "slim-profile-partitions": "12mm-glass-partitions",
  "telescopic-partitions-16x45": "12mm-glass-partitions",

  // Interior Designing
  "interior-designing": "interior-designing",
  "master-bedroom-designs": "interior-designing",
  "living-room-designs": "interior-designing",
  "tv-unit-designs": "interior-designing",
  "false-ceiling-designs": "interior-designing",
  "kids-bedroom-designs": "interior-designing",
  "guest-bedroom-designs": "interior-designing",
  "dining-room-designs": "interior-designing",
  "foyer-designs": "interior-designing",
  "full-home-interiors": "interior-designing",
  "architectural-designing": "interior-designing",

  // Railings
  "glass-railings": "glass-railings",
  "balcony-designs": "glass-railings",
  "staircase-designs": "glass-railings",

  // Doors
  "door-designs": "aluminium-windows",
  "profile-doors-45mm": "aluminium-windows",
  "slim-profile-doors": "aluminium-windows",
  "profile-pooja-doors-20mm": "interior-designing",

  // Execution & Cladding
  "execution-works": "interior-designing",
  "structural-glazing": "aluminium-windows",
  "acp-cladding": "aluminium-windows",
  "hpl-panelling": "interior-designing",
  "facade-elevation": "aluminium-windows",
};

export function getDesignCatalog(rawSlug: string): DesignCatalog {
  const normalized = rawSlug.toLowerCase().trim();
  const canonicalKey = SLUG_ALIASES[normalized] || normalized;
  return CATALOGS[canonicalKey] || CATALOGS["modular-kitchens"];
}
