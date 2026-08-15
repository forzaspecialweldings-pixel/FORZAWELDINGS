"use client";

// Lightweight EN/ES language system: a client context (LanguageProvider), a
// `useLanguage()` hook, and the UI copy dictionary. Data-driven content in
// `model/data.ts` stays the single English source of truth; `esOverrides`
// below carries only the translated fields, applied by index via
// `useLocalizedList`.

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "forza-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: typeof ui.en;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function toggleLang() {
    setLang(lang === "en" ? "es" : "en");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Zips a base (English) list from model/data.ts with an ordered list of ES overrides. */
export function useLocalizedList<T, E extends Partial<T>>(base: readonly T[], esOverrides: readonly E[]): readonly T[] {
  const { lang } = useLanguage();
  if (lang === "en") return base;
  return base.map((item, i) => ({ ...item, ...esOverrides[i] }));
}

// ---------------------------------------------------------------------------
// UI copy (static chrome text, per component)
// ---------------------------------------------------------------------------

export const ui = {
  en: {
    header: {
      brandAria: "Forza Special Welding LLC — home",
      estimate: "Get a Free Estimate",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langAria: "Language selector",
    },
    hero: {
      eyebrow: "Mansfield, TX — Dallas–Fort Worth Area",
      titleLine1: "Built with Precision.",
      titleEm: "Made to Last.",
      desc: "Custom metal fabrication, professional welding, and reliable repairs for residential, commercial, and industrial projects across the Dallas–Fort Worth area.",
      ctaPrimary: "Request a Free Estimate",
      ctaGhost: "View Our Work",
      indicatorInsured: "Fully Insured",
      indicatorEstimates: "Free Estimates",
      indicatorFab: "Custom Fabrication",
      scroll: "Scroll",
    },
    about: {
      sheetLabel: "About Forza",
      title: "Metalwork Built Around Your Project",
      p1: "Forza Special Welding LLC specializes in custom metal fabrication, welding, and structural metal repair for residential, commercial, and industrial clients.",
      p2: "Every project is developed according to the customer’s needs, combining durability, precision, functionality, and a high-quality finish.",
    },
    services: {
      sheetLabel: "Services",
      title: "Our Welding & Fabrication Services",
      text: "From one-of-a-kind custom pieces to structural repairs, we provide dependable metalworking solutions tailored to each project.",
    },
    whyChooseUs: {
      sheetLabel: "Why Choose Us",
      title: "Why Choose Forza Special Welding?",
    },
    featuredWork: {
      sheetLabel: "Featured Work",
      title: "Featured Work",
      text: "A look at custom fabrication and metalwork created to solve real customer needs.",
      tagCompleted: "Completed Project",
      viewDetail: "View Project Detail",
      openAria: (title: string) => `Open project detail: ${title}`,
      closeAria: "Close project detail",
      startSimilar: "Start a Similar Project",
    },
    workProcess: {
      sheetLabel: "Work Process",
      title: "From Your Idea to a Finished Metal Project",
    },
    whoWeServe: {
      sheetLabel: "Who We Serve",
      title: "Who We Serve",
    },
    serviceArea: {
      sheetLabel: "Service Area",
      title: "Serving Mansfield and the DFW Area",
      text: "Forza Special Welding LLC is based in Mansfield, Texas, and serves customers throughout the Dallas–Fort Worth area depending on the scope and location of each project.",
      noteLabel: "Note:",
      noteText: "Additional DFW-area locations may be available depending on the project.",
      svgAria: "Diagram of Forza Special Welding service area, centered on Mansfield, Texas with nearby DFW-area cities",
      base: "MANSFIELD",
      baseSub: "BASE OF OPERATIONS",
      disclaimer: "Diagram for reference only — not to scale",
    },
    cta: {
      title: "Have a Metal Project in Mind?",
      text: "Tell us what you need. Whether it is a custom fabrication, structural repair, trailer modification, or a special metal project, contact us to discuss the details.",
      call: "Call",
      text_: "Send a Text Message",
      estimate: "Request a Free Estimate",
    },
    contact: {
      sheetLabel: "Contact",
      title: "Contact Forza Special Welding",
    },
    contactInfo: {
      contact: "Contact",
      phone: "Phone",
      address: "Address",
      instagram: "Instagram",
      altPrompt: "Prefer not to fill out a form? Reach us directly:",
      callNow: "Call Now",
      textNow: "Text Now",
    },
    contactForm: {
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      projectType: "Project Type",
      selectOption: "Select an option",
      projectLocation: "Project Location",
      locationPlaceholder: "City or job site, e.g. Arlington, TX",
      projectDescription: "Project Description",
      descriptionPlaceholder: "Tell us about the fabrication, repair, or modification you need.",
      preferredContact: "Preferred Contact Method",
      submit: "Send Project Details",
      sentStatus: (name: string) => `Your messaging app should now be open with these details, ready to send to ${name}.`,
      noteBefore: "Prefer to reach out directly? Call or text",
      noteMiddle: "or send photos via",
      instagram: "Instagram",
      projectTypes: {
        "Custom Fabrication": "Custom Fabrication",
        "Welding Repair": "Welding Repair",
        "Structural Repair": "Structural Repair",
        "Trailer Repair": "Trailer Repair",
        "Metal Furniture": "Metal Furniture",
        "Industrial Part": "Industrial Part",
        "Boat / Marine Work": "Boat / Marine Work",
        Other: "Other",
      } as Record<string, string>,
      preferredContactChoices: {
        "Phone Call": "Phone Call",
        "Text Message": "Text Message",
      } as Record<string, string>,
      errors: {
        name: "Enter your full name.",
        phone: "Enter a valid phone number.",
        email: "Enter a valid email address.",
        projectType: "Select a project type.",
        description: "Describe your project.",
      },
      sms: {
        inquiryFrom: "New project inquiry from",
        phone: "Phone",
        email: "Email",
        type: "Type",
        location: "Location",
        preferredContact: "Preferred contact",
        details: "Details",
      },
    },
    footer: {
      tagline: "Custom metal fabrication, welding, and repairs built with precision and made to last.",
      servicesTitle: "Services",
      serviceFab: "Custom Fabrication",
      serviceWeld: "MIG & TIG Welding",
      serviceStructural: "Structural Repair",
      serviceTrailer: "Trailer Repairs",
      navigateTitle: "Navigate",
      contactTitle: "Contact",
      rights: (year: number) => `© ${year} Forza Special Welding LLC. All rights reserved.`,
    },
    floating: {
      smsAria: "Send a text message to Forza Special Welding",
      callAria: "Call Forza Special Welding",
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      serviceArea: "Service Area",
      contact: "Contact",
    },
  },
  es: {
    header: {
      brandAria: "Forza Special Welding LLC — inicio",
      estimate: "Presupuesto Gratis",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      langAria: "Selector de idioma",
    },
    hero: {
      eyebrow: "Mansfield, TX — Área de Dallas–Fort Worth",
      titleLine1: "Construido con Precisión.",
      titleEm: "Hecho para Durar.",
      desc: "Fabricación de metal a medida, soldadura profesional y reparaciones confiables para proyectos residenciales, comerciales e industriales en toda el área de Dallas–Fort Worth.",
      ctaPrimary: "Solicitar Presupuesto Gratis",
      ctaGhost: "Ver Nuestro Trabajo",
      indicatorInsured: "Totalmente Asegurados",
      indicatorEstimates: "Presupuestos Gratis",
      indicatorFab: "Fabricación Personalizada",
      scroll: "Desliza",
    },
    about: {
      sheetLabel: "Acerca de Forza",
      title: "Trabajos en Metal Hechos a la Medida de tu Proyecto",
      p1: "Forza Special Welding LLC se especializa en fabricación de metal a medida, soldadura y reparación estructural de metal para clientes residenciales, comerciales e industriales.",
      p2: "Cada proyecto se desarrolla según las necesidades del cliente, combinando durabilidad, precisión, funcionalidad y un acabado de alta calidad.",
    },
    services: {
      sheetLabel: "Servicios",
      title: "Nuestros Servicios de Soldadura y Fabricación",
      text: "Desde piezas personalizadas únicas hasta reparaciones estructurales, ofrecemos soluciones de metalistería confiables adaptadas a cada proyecto.",
    },
    whyChooseUs: {
      sheetLabel: "Por Qué Elegirnos",
      title: "¿Por Qué Elegir a Forza Special Welding?",
    },
    featuredWork: {
      sheetLabel: "Trabajos Destacados",
      title: "Trabajos Destacados",
      text: "Un vistazo a la fabricación personalizada y los trabajos en metal creados para resolver necesidades reales de nuestros clientes.",
      tagCompleted: "Proyecto Terminado",
      viewDetail: "Ver Detalle del Proyecto",
      openAria: (title: string) => `Abrir detalle del proyecto: ${title}`,
      closeAria: "Cerrar detalle del proyecto",
      startSimilar: "Iniciar un Proyecto Similar",
    },
    workProcess: {
      sheetLabel: "Proceso de Trabajo",
      title: "De tu Idea a un Proyecto de Metal Terminado",
    },
    whoWeServe: {
      sheetLabel: "A Quién Servimos",
      title: "A Quién Servimos",
    },
    serviceArea: {
      sheetLabel: "Área de Servicio",
      title: "Sirviendo a Mansfield y el Área de DFW",
      text: "Forza Special Welding LLC tiene su base en Mansfield, Texas, y atiende a clientes en toda el área de Dallas–Fort Worth según el alcance y la ubicación de cada proyecto.",
      noteLabel: "Nota:",
      noteText: "Puede haber otras ubicaciones disponibles en el área de DFW según el proyecto.",
      svgAria: "Diagrama del área de servicio de Forza Special Welding, centrado en Mansfield, Texas, con ciudades cercanas del área de DFW",
      base: "MANSFIELD",
      baseSub: "BASE DE OPERACIONES",
      disclaimer: "Diagrama solo de referencia — no está a escala",
    },
    cta: {
      title: "¿Tienes un Proyecto en Metal en Mente?",
      text: "Cuéntanos lo que necesitas. Ya sea una fabricación personalizada, una reparación estructural, una modificación de remolque o un proyecto especial en metal, contáctanos para conversar los detalles.",
      call: "Llamar",
      text_: "Enviar un Mensaje de Texto",
      estimate: "Solicitar Presupuesto Gratis",
    },
    contact: {
      sheetLabel: "Contacto",
      title: "Contacta a Forza Special Welding",
    },
    contactInfo: {
      contact: "Contacto",
      phone: "Teléfono",
      address: "Dirección",
      instagram: "Instagram",
      altPrompt: "¿Prefieres no llenar un formulario? Contáctanos directamente:",
      callNow: "Llamar Ahora",
      textNow: "Enviar Mensaje",
    },
    contactForm: {
      fullName: "Nombre Completo",
      phoneNumber: "Número de Teléfono",
      emailAddress: "Correo Electrónico",
      projectType: "Tipo de Proyecto",
      selectOption: "Selecciona una opción",
      projectLocation: "Ubicación del Proyecto",
      locationPlaceholder: "Ciudad o lugar de trabajo, ej. Arlington, TX",
      projectDescription: "Descripción del Proyecto",
      descriptionPlaceholder: "Cuéntanos sobre la fabricación, reparación o modificación que necesitas.",
      preferredContact: "Método de Contacto Preferido",
      submit: "Enviar Detalles del Proyecto",
      sentStatus: (name: string) => `Tu aplicación de mensajes debería estar abierta con estos detalles, lista para enviar a ${name}.`,
      noteBefore: "¿Prefieres contactarnos directamente? Llama o envía un mensaje de texto al",
      noteMiddle: "o envía fotos por",
      instagram: "Instagram",
      projectTypes: {
        "Custom Fabrication": "Fabricación Personalizada",
        "Welding Repair": "Reparación de Soldadura",
        "Structural Repair": "Reparación Estructural",
        "Trailer Repair": "Reparación de Remolques",
        "Metal Furniture": "Muebles de Metal",
        "Industrial Part": "Pieza Industrial",
        "Boat / Marine Work": "Trabajo en Botes / Marino",
        Other: "Otro",
      } as Record<string, string>,
      preferredContactChoices: {
        "Phone Call": "Llamada Telefónica",
        "Text Message": "Mensaje de Texto",
      } as Record<string, string>,
      errors: {
        name: "Ingresa tu nombre completo.",
        phone: "Ingresa un número de teléfono válido.",
        email: "Ingresa un correo electrónico válido.",
        projectType: "Selecciona un tipo de proyecto.",
        description: "Describe tu proyecto.",
      },
      sms: {
        inquiryFrom: "Nueva solicitud de proyecto de",
        phone: "Teléfono",
        email: "Correo",
        type: "Tipo",
        location: "Ubicación",
        preferredContact: "Contacto preferido",
        details: "Detalles",
      },
    },
    footer: {
      tagline: "Fabricación de metal a medida, soldadura y reparaciones hechas con precisión y para durar.",
      servicesTitle: "Servicios",
      serviceFab: "Fabricación Personalizada",
      serviceWeld: "Soldadura MIG y TIG",
      serviceStructural: "Reparación Estructural",
      serviceTrailer: "Reparación de Remolques",
      navigateTitle: "Navegación",
      contactTitle: "Contacto",
      rights: (year: number) => `© ${year} Forza Special Welding LLC. Todos los derechos reservados.`,
    },
    floating: {
      smsAria: "Enviar un mensaje de texto a Forza Special Welding",
      callAria: "Llamar a Forza Special Welding",
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      serviceArea: "Área de Servicio",
      contact: "Contacto",
    },
  },
};

// ---------------------------------------------------------------------------
// ES overrides for data-driven lists in model/data.ts (same order/length).
// ---------------------------------------------------------------------------

export const esOverrides = {
  services: [
    { title: "Fabricación de Metal a Medida", text: "Piezas y estructuras de metal hechas a pedido, diseñadas según los requisitos específicos de cada cliente." },
    { title: "Soldadura MIG", text: "Soluciones de soldadura eficientes y duraderas para fabricación, reparaciones y aplicaciones estructurales." },
    { title: "Soldadura TIG", text: "Soldadura precisa y limpia para proyectos que requieren trabajo detallado y acabados de alta calidad." },
    { title: "Soldadura de Acero", text: "Fabricación y reparación profesional de estructuras, componentes y proyectos personalizados de acero." },
    { title: "Soldadura de Aluminio", text: "Soldadura de aluminio especializada para aplicaciones ligeras, resistentes y con cuidado ante la corrosión." },
    { title: "Soldadura de Bronce", text: "Fabricación y reparación en bronce con especial atención a la precisión y al acabado final." },
    { title: "Reparación de Remolques", text: "Reparación y modificación de componentes y estructuras metálicas de remolques." },
    { title: "Fabricación y Reparación Estructural", text: "Fabricación, refuerzo, modificación y reparación de estructuras metálicas." },
    { title: "Mesas y Muebles de Metal", text: "Mesas, componentes de muebles, soportes, marcos y piezas decorativas funcionales personalizadas en metal." },
    { title: "Piezas Industriales", text: "Fabricación y reparación de piezas de metal para talleres, negocios, contratistas y clientes industriales." },
    { title: "Trabajo en Metal para Botes y Uso Marino", text: "Servicios de fabricación, modificación y reparación de metal respaldados por experiencia trabajando en botes." },
    { title: "Modificaciones Personalizadas en Metal", text: "Modificaciones únicas y proyectos especiales en metal desarrollados a partir de una idea, referencia o necesidad específica." },
  ],
  whyChooseUs: [
    { title: "Soluciones Hechas a la Medida", text: "Cada proyecto se planea y fabrica según las necesidades del cliente." },
    { title: "Precisión y Calidad", text: "Trabajo cuidadoso enfocado en una construcción sólida y acabados profesionales." },
    { title: "De lo Residencial a lo Industrial", text: "Soluciones para propietarios, negocios, contratistas, talleres y clientes industriales." },
    { title: "Totalmente Asegurados", text: "Servicio profesional respaldado por prácticas comerciales responsables." },
    { title: "Presupuestos Gratis", text: "Los clientes pueden contactarnos para conversar sobre su proyecto y solicitar un presupuesto." },
  ],
  aboutAttributes: [
    { label: "Soluciones Personalizadas" },
    { label: "Acabados de Alta Calidad" },
    { label: "Trabajo Confiable y de Calidad" },
    { label: "Hecho para Durar" },
  ],
  projects: [
    { title: "Portavasos de Metal Personalizado", category: "Fabricación Personalizada", description: "Un portavasos de metal fabricado a medida, diseñado para sujetarse firmemente al brazo de un mueble, combinando funcionalidad, resistencia y un acabado refinado." },
    { title: "Trabajo en Metal Arquitectónico Personalizado", category: "Modificaciones Personalizadas en Metal", description: "Tocadores de bronce y latón, estanterías y puertas de vidrio con marco de acero fabricadas e instaladas para un interior residencial de alta gama, desde la lámina de metal en bruto hasta la instalación final." },
    { title: "Remolques Móviles de Servicio y Fabricación", category: "Fabricación Personalizada", description: "Remolques de aluminio y unidades móviles fabricados a la medida en nuestro taller, desde el chasis en bruto hasta estaciones de trabajo móviles completamente equipadas." },
    { title: "Fabricación de Metal Marino y para Botes", category: "Trabajo en Botes y Uso Marino", description: "Fabricación y reparación en aluminio para botes, incluyendo estructuras de casco, compartimentos de motor, ejes de hélice y componentes marinos personalizados." },
    { title: "Puerta de Bóveda Bancaria Personalizada", category: "Modificaciones Personalizadas en Metal", description: "Una puerta de bóveda de acero de calibre grueso fabricada desde cero, con construcción de paneles remachados y una rueda de bloqueo radial funcional." },
  ],
  workProcess: [
    { title: "Cuéntanos Sobre tu Proyecto", text: "Comparte tu idea, medidas, fotos o los requisitos de la reparación." },
    { title: "Revisión del Proyecto", text: "Revisamos el alcance, los materiales, los requisitos de diseño y el trabajo involucrado." },
    { title: "Fabricación o Reparación", text: "El proyecto se fabrica, suelda, modifica o repara con estricta atención a la calidad." },
    { title: "Inspección Final", text: "Se revisa el trabajo terminado para confirmar resistencia, funcionalidad y acabado." },
  ],
  clientTypes: [
    { label: "Negocios" },
    { label: "Contratistas" },
    { label: "Empresas de Construcción" },
    { label: "Talleres" },
    { label: "Clientes Comerciales" },
    { label: "Clientes Residenciales" },
    { label: "Clientes Industriales" },
    { label: "Clientes de Proyectos Personalizados" },
  ],
  navLinks: [
    { label: "Inicio" },
    { label: "Servicios" },
    { label: "Proyectos" },
    { label: "Área de Servicio" },
    { label: "Contacto" },
  ],
  footerServiceLinks: [
    { label: "Fabricación Personalizada" },
    { label: "Soldadura MIG y TIG" },
    { label: "Reparación Estructural" },
    { label: "Reparación de Remolques" },
  ],
};
