export interface BusinessInfo {
  name: string;
  tagline: string;
  owner: string;
  mobile: string;
  businessPhone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: {
    street: string;
    colony: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  workingHours: string;
  serviceAreas: string[];
  capabilities: string[];
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "SKY TECH WINDOWS",
  tagline: "Precision Aluminium, uPVC, Glass & Architectural Interior Systems",
  owner: "Yousuf Shaik",
  mobile: "7396991224",
  businessPhone: "9494600741",
  email: "skytechaluminum@gmail.com",
  instagram: "https://instagram.com/skytechaluminium",
  instagramHandle: "@skytechaluminium",
  address: {
    street: "Shiridi Nagar Main Rd",
    colony: "Defence Colony",
    area: "Hayathnagar Khalsa",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "501505",
    full: "Shiridi Nagar Main Rd, Defence Colony, Hayathnagar Khalsa, Hyderabad, Telangana 501505",
  },
  workingHours: "Monday to Saturday: 9:00 AM – 8:00 PM | Sunday: By Appointment",
  serviceAreas: [
    "Hayathnagar",
    "LB Nagar",
    "Vanasthalipuram",
    "Uppal",
    "Kothapet",
    "Dilsukhnagar",
    "Gachibowli",
    "Hitec City",
    "Jubilee Hills",
    "Banjara Hills",
    "Secunderabad",
    "Greater Hyderabad",
  ],
  capabilities: [
    "Aluminium Windows & Domal Systems",
    "Slim Profile & 45mm Doors",
    "Telescopic & Acoustic Partitions",
    "uPVC Windows, Doors & Elevation",
    "12mm Toughened Glass & Office Doors",
    "Diamond Mirror & Crystal Glass Work",
    "Structural Glazing & Railings",
    "HPL Panelling & ACP Cladding",
    "Architectural & Interior Design",
    "Turnkey Execution & Supervision",
    "Wholesale Aluminium & Iron Enquiries",
  ],
};

export const CONTACT_LINKS = {
  phoneBusiness: `tel:+91${BUSINESS_INFO.businessPhone}`,
  phoneOwner: `tel:+91${BUSINESS_INFO.mobile}`,
  whatsapp: `https://wa.me/91${BUSINESS_INFO.mobile}?text=${encodeURIComponent(
    "Hello Sky Tech Windows, I would like to enquire about your aluminium / uPVC / glass / interior services for my project in Hyderabad."
  )}`,
  whatsappWholesale: `https://wa.me/91${BUSINESS_INFO.mobile}?text=${encodeURIComponent(
    "Hello Sky Tech Windows, I am interested in wholesale aluminium / iron profiles and bulk material enquiry."
  )}`,
  email: `mailto:${BUSINESS_INFO.email}`,
  maps: `https://maps.google.com/?q=${encodeURIComponent(
    "SKY TECH WINDOWS Shiridi Nagar Main Rd Defence Colony Hayathnagar Hyderabad 501505"
  )}`,
  instagram: BUSINESS_INFO.instagram,
};
