export interface NavLink {
  title: string;
  href: string;
  badge?: string;
  description?: string;
}

// 1. "Design Ideas" 2-Column Exact Livspace List
export const DESIGN_IDEAS_COL1: NavLink[] = [
  { title: "Modular Kitchen Designs", href: "/modular-kitchens" },
  { title: "Wardrobe Designs", href: "/aluminium-wardrobes" },
  { title: "Bathroom Designs", href: "/12mm-glass-partitions" },
  { title: "Master Bedroom Designs", href: "/interior-designing#bedroom" },
  { title: "Living Room Designs", href: "/interior-designing#living" },
  { title: "Pooja Room Designs", href: "/profile-pooja-doors-20mm" },
  { title: "TV Unit Designs", href: "/interior-designing#tv-unit" },
  { title: "False Ceiling Designs", href: "/interior-designing#ceiling" },
  { title: "Kids Bedroom Designs", href: "/interior-designing#kids" },
  { title: "Balcony Designs", href: "/glass-railings" },
  { title: "Dining Room Designs", href: "/slim-profile-partitions" },
  { title: "Foyer Designs", href: "/interior-designing#foyer" },
  { title: "Homes By Sky Tech", href: "/projects" },
  { title: "Home Office Designs", href: "/office-aluminium-partitions" },
];

export const DESIGN_IDEAS_COL2: NavLink[] = [
  { title: "Guest Bedroom Designs", href: "/interior-designing#guest" },
  { title: "Window Designs", href: "/aluminium-windows" },
  { title: "Flooring Designs", href: "/execution-works" },
  { title: "Wall Decor Designs", href: "/hpl-panelling" },
  { title: "Wall Paint Designs", href: "/execution-works#paint" },
  { title: "Home Wallpaper Designs", href: "/interior-designing#wallpaper" },
  { title: "Tile Designs", href: "/facade-elevation" },
  { title: "Study Room Designs", href: "/slim-profile-partitions" },
  { title: "Kitchen Sinks", href: "/modular-kitchens#hardware" },
  { title: "Space Saving Designs", href: "/telescopic-partitions-16x45" },
  { title: "Door Designs", href: "/profile-doors-45mm" },
  { title: "Staircase Designs", href: "/glass-railings" },
  { title: "Crockery Units", href: "/profile-cupboards" },
  { title: "Home Bar Designs", href: "/interior-designing#bar" },
];

// 2. "Services" 2-Column Clean List
export const SERVICES_COL1: NavLink[] = [
  { title: "Aluminium Windows", href: "/aluminium-windows" },
  { title: "Domal Windows Series", href: "/aluminium-domal-windows" },
  { title: "Aluminium Sliding Windows", href: "/aluminium-sliding-windows" },
  { title: "Aluminium Casement Windows", href: "/aluminium-casement-windows" },
  { title: "45mm Profile Doors", href: "/profile-doors-45mm" },
  { title: "Slim Profile Doors", href: "/slim-profile-doors" },
  { title: "Telescopic Partitions 16x45", href: "/telescopic-partitions-16x45" },
  { title: "Mosquito Sliding Systems", href: "/aluminium-mosquito-sliding-doors" },
];

export const SERVICES_COL2: NavLink[] = [
  { title: "uPVC Windows & Doors", href: "/upvc-windows" },
  { title: "12mm Toughened Glass Partitions", href: "/12mm-glass-partitions" },
  { title: "Office Frameless Glass Doors", href: "/glass-doors-office" },
  { title: "Structural Glazing", href: "/structural-glazing" },
  { title: "ACP Cladding Work", href: "/acp-cladding" },
  { title: "HPL Exterior Panelling", href: "/hpl-panelling" },
  { title: "Glass Railings & Balustrades", href: "/glass-railings" },
  { title: "Turnkey Interior Execution", href: "/execution-works" },
];

// 3. "More" Dropdown Clean List
export const MORE_DROPDOWN_LINKS: NavLink[] = [
  { title: "About Sky Tech Windows", href: "/about-us" },
  { title: "Wholesale & B2B Enquiries", href: "/wholesale-aluminium-iron-products" },
  { title: "3D Visualization & Walkthroughs", href: "/3d-visualization" },
  { title: "Hayathnagar Fabrication Workshop", href: "/contact-us#workshop" },
  { title: "Get Instant Quote & Estimate", href: "/contact-us" },
  { title: "Contact Us & Site Measurements", href: "/contact-us" },
];

// 4. Tier 2 "Offerings" Dropdown Data (Matching Image 3)
export interface OfferingCard {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

export const EXPLORE_OFFERINGS: OfferingCard[] = [
  {
    title: "Modular Interiors",
    subtitle: "Kitchens, wardrobes and storage",
    href: "/modular-kitchens",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "Full Home Interiors",
    subtitle: "End-to-end home interiors",
    href: "/interior-designing",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "Luxury interiors",
    subtitle: "Homes that redefine elegance",
    href: "/architectural-designing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=240&q=80",
  },
  {
    title: "Value Interiors",
    subtitle: "Quality interiors at affordable prices",
    href: "/execution-works",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=240&q=80",
  },
];

export const KITCHEN_OFFERINGS = {
  main: [
    { title: "Know Your Kitchen", href: "/modular-kitchens" },
    { title: "Kitchen Price Estimate", href: "/contact-us" },
  ],
  components: [
    { title: "Cabinets", href: "/modular-kitchens" },
    { title: "Handles", href: "/modular-kitchens" },
    { title: "Finishes", href: "/modular-kitchens" },
  ],
};

export const WARDROBE_OFFERINGS = {
  main: [
    { title: "Know Your Wardrobe", href: "/aluminium-wardrobes" },
    { title: "Wardrobe Price Estimate", href: "/contact-us" },
  ],
  components: [
    { title: "Cabinets", href: "/aluminium-wardrobes" },
    { title: "Handles", href: "/aluminium-wardrobes" },
    { title: "Finishes", href: "/aluminium-wardrobes" },
  ],
};

// 5. Tier 2 "Price Calculators" Dropdown Data (Matching Image 4)
export const PRICE_CALCULATOR_LINKS: NavLink[] = [
  { title: "Home Interior Price Calculator", href: "/contact-us" },
  { title: "Kitchen Price Calculator", href: "/contact-us" },
  { title: "Wardrobe Price Calculator", href: "/contact-us" },
];
