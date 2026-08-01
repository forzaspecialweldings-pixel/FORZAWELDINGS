// Centralized, strictly-typed business content for Forza Special Welding LLC.
// Single source of truth consumed by server components — no hand-duplicated markup per item.

export interface BusinessInfo {
  readonly name: string;
  readonly contactName: string;
  readonly phoneDisplay: string;
  readonly phoneHref: string;
  readonly address: string;
  readonly instagramUsername: string;
  readonly instagramUrl: string;
}

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export type IconName =
  | "i-menu" | "i-close" | "i-arrow" | "i-phone" | "i-sms" | "i-pin" | "i-insta"
  | "i-shield" | "i-tag" | "i-spark" | "i-flame" | "i-dot-flame" | "i-beam" | "i-plate"
  | "i-ring" | "i-wheel" | "i-truss" | "i-table" | "i-gear" | "i-anchor" | "i-modify"
  | "i-custom" | "i-ruler" | "i-layers" | "i-check-badge" | "i-biz" | "i-hardhat"
  | "i-crane" | "i-workshop" | "i-briefcase" | "i-home" | "i-factory" | "i-star" | "i-camera";

export interface Service {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
}

export interface WhyItem {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
}

export interface AboutAttribute {
  readonly icon: IconName;
  readonly label: string;
}

export interface ProjectPhoto {
  readonly kind?: "image";
  readonly src: string;
  readonly alt: string;
}

export interface ProjectVideo {
  readonly kind: "video";
  readonly src: string;
  readonly poster: string;
  readonly alt: string;
}

export type ProjectMedia = ProjectPhoto | ProjectVideo;

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly cover: ProjectPhoto;
  readonly gallery: readonly ProjectMedia[];
}

export interface ProcessStep {
  readonly idx: string;
  readonly title: string;
  readonly text: string;
}

export interface ClientType {
  readonly icon: IconName;
  readonly label: string;
}

export interface ServiceAreaCity {
  readonly name: string;
  readonly x: number;
  readonly y: number;
  readonly labelX: number;
  readonly labelY: number;
  readonly anchor: "start" | "middle" | "end";
}

export interface ServiceAreaBase {
  readonly name: string;
  readonly x: number;
  readonly y: number;
}

export const businessInfo: BusinessInfo = {
  name: "Forza Special Welding LLC",
  contactName: "Diego Rojas",
  phoneDisplay: "(657) 610-8935",
  phoneHref: "+16576108935",
  address: "6771 N FM Shop 107, Mansfield, TX",
  instagramUsername: "@forzaspecialweldings",
  instagramUrl: "https://www.instagram.com/forzaspecialweldings/",
};

export const navLinks: readonly NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
];

export const services: readonly Service[] = [
  { icon: "i-spark", title: "Custom Metal Fabrication", text: "Made-to-order metal pieces and structures designed around the specific requirements of each customer." },
  { icon: "i-flame", title: "MIG Welding", text: "Efficient and durable welding solutions for fabrication, repairs, and structural applications." },
  { icon: "i-dot-flame", title: "TIG Welding", text: "Precise, clean welding for projects that require detailed work and high-quality finishes." },
  { icon: "i-beam", title: "Steel Welding", text: "Professional fabrication and repair of steel structures, components, and custom projects." },
  { icon: "i-plate", title: "Aluminum Welding", text: "Specialized aluminum welding for lightweight, resistant, and corrosion-conscious applications." },
  { icon: "i-ring", title: "Bronze Welding", text: "Bronze fabrication and repair work with careful attention to precision and final appearance." },
  { icon: "i-wheel", title: "Trailer Repairs", text: "Repair and modification of metal trailer components and structures." },
  { icon: "i-truss", title: "Structural Fabrication & Repair", text: "Fabrication, reinforcement, modification, and repair of metal structures." },
  { icon: "i-table", title: "Metal Tables & Furniture", text: "Custom metal tables, furniture components, supports, frames, and functional decorative pieces." },
  { icon: "i-gear", title: "Industrial Parts", text: "Fabrication and repair of metal parts for workshops, businesses, contractors, and industrial customers." },
  { icon: "i-anchor", title: "Boat & Marine Metal Work", text: "Metal fabrication, modification, and repair services backed by experience working on boats." },
  { icon: "i-modify", title: "Custom Metal Modifications", text: "Unique modifications and special metal projects developed from an idea, reference, or specific need." },
];

export const whyChooseUs: readonly WhyItem[] = [
  { icon: "i-custom", title: "Custom-Built Solutions", text: "Every project is planned and fabricated according to the customer’s needs." },
  { icon: "i-ruler", title: "Precision & Quality", text: "Careful workmanship focused on strong construction and professional finishes." },
  { icon: "i-layers", title: "Residential to Industrial", text: "Solutions for homeowners, businesses, contractors, workshops, and industrial customers." },
  { icon: "i-shield", title: "Fully Insured", text: "Professional service backed by responsible business practices." },
  { icon: "i-tag", title: "Free Estimates", text: "Customers can contact us to discuss their project and request an estimate." },
];

export const aboutAttributes: readonly AboutAttribute[] = [
  { icon: "i-custom", label: "Custom Solutions" },
  { icon: "i-ruler", label: "High-Quality Finishes" },
  { icon: "i-check-badge", label: "Reliable Craftsmanship" },
  { icon: "i-layers", label: "Built for Durability" },
];

export const projects: readonly Project[] = [
  {
    slug: "custom-metal-cup-holder",
    title: "Custom Metal Cup Holder",
    category: "Custom Fabrication",
    description: "A custom-fabricated metal cup holder designed to fit securely over a furniture armrest, combining functionality, strength, and a refined finish.",
    cover: {
      src: "/projects/cup-holder-installed.webp",
      alt: "Custom brass cup holder mounted on a leather chair armrest",
    },
    gallery: [
      {
        src: "/projects/cup-holder-installed.webp",
        alt: "Custom brass cup holder mounted on a leather chair armrest",
      },
      {
        src: "/projects/cup-holder-workshop.webp",
        alt: "Custom cup holder fabricated in the Forza Special Welding shop",
      },
    ],
  },
  {
    slug: "architectural-brass-steel-metalwork",
    title: "Custom Architectural Metalwork",
    category: "Custom Metal Modifications",
    description: "Bronze and brass vanities, shelving, and steel-framed glass doors fabricated and installed for a high-end residential interior, from raw sheet metal to finished install.",
    cover: {
      src: "/projects/brass-shelving-installed.webp",
      alt: "Installed brass shelving unit with marble backsplash",
    },
    gallery: [
      {
        src: "/projects/brass-shelving-installed.webp",
        alt: "Installed brass shelving unit with marble backsplash",
      },
      {
        src: "/projects/brass-vanity-marble-top.webp",
        alt: "Custom brass-framed vanity with marble countertop",
      },
      {
        src: "/projects/bronze-glass-shower-door.webp",
        alt: "Bronze-framed glass shower door installation",
      },
      {
        src: "/projects/steel-glass-doors-interior.webp",
        alt: "Custom steel-framed glass doors in a wood-paneled interior",
      },
      {
        src: "/projects/brass-oval-basin-fabrication.webp",
        alt: "Brass oval basin being fabricated in the workshop",
      },
      {
        src: "/projects/steel-frame-fabrication.webp",
        alt: "Steel furniture frames in fabrication at the shop",
      },
      {
        src: "/projects/marble-brass-counter-aerial.webp",
        alt: "Brass fixtures over a marble countertop, aerial view",
      },
      {
        src: "/projects/brass-vanity-mirror.webp",
        alt: "Dark wood vanity with brass accents and mirror",
      },
      {
        src: "/projects/steel-glass-shower-marble.webp",
        alt: "Steel-framed glass shower enclosure in a marble bathroom",
      },
      {
        src: "/projects/bronze-panels-raw-material.webp",
        alt: "Raw bronze panels staged in the workshop before fabrication",
      },
      {
        src: "/projects/steel-beam-fabrication.webp",
        alt: "Steel beam being fabricated and clamped on the shop table",
      },
      {
        src: "/projects/steel-arched-doors-bookshelf-room.webp",
        alt: "Arched steel-framed glass doors opening into a room with built-in bookshelves",
      },
      {
        src: "/projects/ambient-lighting-marble-room.webp",
        alt: "Room with ambient brass accent lighting and marble panels under construction",
      },
      {
        kind: "video",
        src: "/projects/brass-frame-fabrication-process.mp4",
        poster: "/projects/brass-frame-fabrication-poster.webp",
        alt: "Fabricating a custom brass frame in the workshop",
      },
    ],
  },
  {
    slug: "mobile-service-fabrication-trailers",
    title: "Mobile Service & Fabrication Trailers",
    category: "Custom Fabrication",
    description: "Custom-built aluminum trailers and mobile units fabricated in-house, from bare frame to fully outfitted mobile workstations.",
    cover: {
      src: "/projects/trailer-fleet-lineup.webp",
      alt: "Row of custom aluminum trailer frames in the workshop",
    },
    gallery: [
      {
        src: "/projects/trailer-fleet-lineup.webp",
        alt: "Row of custom aluminum trailer frames in the workshop",
      },
      {
        src: "/projects/trailer-tow-vehicle.webp",
        alt: "Custom trailer hitched to a tow vehicle",
      },
      {
        src: "/projects/trailer-mobile-unit-interior.webp",
        alt: "Interior of a custom-fabricated mobile service trailer",
      },
      {
        src: "/projects/trailer-stainless-interior.webp",
        alt: "Stainless steel tool storage inside a custom trailer",
      },
      {
        src: "/projects/trailer-stainless-aerial.webp",
        alt: "Aerial view of a stainless steel equipment trailer",
      },
      {
        src: "/projects/trailer-cabinet-fabrication.webp",
        alt: "Custom cabinetry fabricated for a mobile trailer build",
      },
      {
        src: "/projects/trailer-service-body-black.webp",
        alt: "Finished black service body trailer on a shop lift",
      },
      {
        src: "/projects/trailer-aluminum-weld-detail.webp",
        alt: "Close-up of a precision aluminum weld seam on a trailer panel",
      },
      {
        src: "/projects/trailer-outfitted-bay-interior.webp",
        alt: "Fully outfitted mobile trailer bay with tool storage and equipment",
      },
      {
        kind: "video",
        src: "/projects/trailer-interior-walkthrough.mp4",
        poster: "/projects/trailer-interior-walkthrough-poster.webp",
        alt: "Walkthrough of a fully outfitted stainless steel trailer interior",
      },
    ],
  },
  {
    slug: "marine-boat-metal-fabrication",
    title: "Marine & Boat Metal Fabrication",
    category: "Boat & Marine Work",
    description: "Aluminum fabrication and repair for boats, including hull structures, engine compartments, propeller shafts, and custom marine components.",
    cover: {
      src: "/projects/boat-hull-workshop.webp",
      alt: "Boat suspended on stands in the workshop for repair",
    },
    gallery: [
      {
        src: "/projects/boat-hull-workshop.webp",
        alt: "Boat suspended on stands in the workshop for repair",
      },
      {
        src: "/projects/boat-hull-fabrication.webp",
        alt: "Boat hull structure during fabrication work",
      },
      {
        src: "/projects/boat-engine-bay-aluminum.webp",
        alt: "Aluminum engine bay fabrication on a boat, aerial view",
      },
      {
        src: "/projects/boat-engine-frame-weld.webp",
        alt: "Welded aluminum frame in a boat engine compartment",
      },
      {
        src: "/projects/boat-shaft-repair.webp",
        alt: "Boat propeller shaft repair in progress",
      },
      {
        src: "/projects/boat-propeller-repair.webp",
        alt: "Boat propellers ready for repair",
      },
      {
        src: "/projects/boat-slide-installation.webp",
        alt: "Pontoon boat with custom slide attachment in the workshop",
      },
    ],
  },
  {
    slug: "custom-bank-vault-door",
    title: "Custom Bank Vault Door",
    category: "Custom Metal Modifications",
    description: "A heavy-gauge steel vault door fabricated from scratch, riveted panel construction with a functional spoked locking wheel.",
    cover: {
      src: "/projects/vault-door-custom.webp",
      alt: "Custom fabricated steel bank vault door with spoked locking wheel",
    },
    gallery: [
      {
        src: "/projects/vault-door-custom.webp",
        alt: "Custom fabricated steel bank vault door with spoked locking wheel",
      },
    ],
  },
];

export const workProcess: readonly ProcessStep[] = [
  { idx: "01", title: "Tell Us About Your Project", text: "Share your idea, measurements, photos, or repair requirements." },
  { idx: "02", title: "Project Review", text: "We review the scope, materials, design requirements, and work involved." },
  { idx: "03", title: "Fabrication or Repair", text: "The project is fabricated, welded, modified, or repaired with close attention to quality." },
  { idx: "04", title: "Final Inspection", text: "The completed work is reviewed to confirm strength, functionality, and finish." },
];

export const clientTypes: readonly ClientType[] = [
  { icon: "i-biz", label: "Businesses" },
  { icon: "i-hardhat", label: "Contractors" },
  { icon: "i-crane", label: "Construction Companies" },
  { icon: "i-workshop", label: "Workshops" },
  { icon: "i-briefcase", label: "Commercial Clients" },
  { icon: "i-home", label: "Residential Clients" },
  { icon: "i-factory", label: "Industrial Clients" },
  { icon: "i-star", label: "Custom Project Customers" },
];

// Abstract hub-and-spoke positions (illustrative only — not real coordinates).
export const serviceAreaBase: ServiceAreaBase = { name: "Mansfield", x: 200, y: 165 };

export const serviceAreaCities: readonly ServiceAreaCity[] = [
  { name: "Dallas", x: 200, y: 55, labelX: 200, labelY: 42, anchor: "middle" },
  { name: "Grand Prairie", x: 305, y: 90, labelX: 308, labelY: 78, anchor: "start" },
  { name: "Arlington", x: 330, y: 165, labelX: 333, labelY: 169, anchor: "start" },
  { name: "Burleson", x: 300, y: 240, labelX: 303, labelY: 255, anchor: "start" },
  { name: "Waxahachie", x: 205, y: 270, labelX: 205, labelY: 286, anchor: "middle" },
  { name: "Midlothian", x: 95, y: 245, labelX: 95, labelY: 261, anchor: "middle" },
  { name: "Fort Worth", x: 70, y: 150, labelX: 67, labelY: 138, anchor: "end" },
];

export const PROJECT_TYPE_CHOICES = [
  "Custom Fabrication",
  "Welding Repair",
  "Structural Repair",
  "Trailer Repair",
  "Metal Furniture",
  "Industrial Part",
  "Boat / Marine Work",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPE_CHOICES)[number];

export const PREFERRED_CONTACT_CHOICES = ["Phone Call", "Text Message"] as const;

export type PreferredContact = (typeof PREFERRED_CONTACT_CHOICES)[number];
