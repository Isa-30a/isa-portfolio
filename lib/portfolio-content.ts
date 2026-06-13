import type { Locale } from "./i18n"

type LocaleContent = {
  nav: {
    projects: string
    resume: string
    experience: string
    contact: string
    localeLabel: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    secondaryAction: string
    tertiaryAction: string
    cards: Array<{
      title: string
      description: string
    }>
  }
  resume: {
    eyebrow: string
    title: string
    description: string
    downloadLabel: string
    profileLabel: string
    educationLabel: string
    languagesLabel: string
  }
  projects: {
    eyebrow: string
    title: string
    description: string
  }
  skills: {
    eyebrow: string
    title: string
    description: string
  }
  experience: {
    eyebrow: string
    title: string
    description: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    email: string
    github: string
    resume: string
  }
}

export const portfolioContent = {
  en: {
    nav: {
      projects: "Projects",
      resume: "Resume",
      experience: "Experience",
      contact: "Contact",
      localeLabel: "Español",
    },
    hero: {
      eyebrow: "Frontend engineer",
      title: "I design calm, clear portfolio experiences that feel easy to read.",
      description:
        "Isabella is a frontend engineer focused on simple layouts, readable content, and a portfolio that gets out of the way of the work.",
      primaryAction: "View work",
      secondaryAction: "Open resume",
      tertiaryAction: "Contact",
      cards: [
        { title: "Readable", description: "Content first, with a quieter visual system" },
        { title: "Direct", description: "Less ceremony, fewer moving parts" },
        { title: "Practical", description: "Resume, projects, and contact in one pass" },
      ],
    },
    resume: {
      eyebrow: "Resume",
      title: "A living snapshot of the structured resume data.",
      description:
        "The page reads the local rxresu.me JSON and presents the same core information in a simpler web layout.",
      downloadLabel: "Download PDF",
      profileLabel: "Profiles",
      educationLabel: "Education",
      languagesLabel: "Languages",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects shown with only the useful detail.",
      description:
        "These cards come from the resume data and keep the structure compact enough to scan quickly.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and languages",
      description: "A compact list of the technologies already present in the resume JSON.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience from the resume data",
      description:
        "The same work history appears here with lighter presentation and fewer visual distractions.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Reach out",
      description: "Use the direct links below if you want the page to stay on one screen.",
      email: "Email",
      github: "GitHub",
      resume: "Resume",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      resume: "CV",
      experience: "Experiencia",
      contact: "Contacto",
      localeLabel: "English",
    },
    hero: {
      eyebrow: "Ingeniera frontend",
      title: "Diseño portafolios simples, claros y fáciles de leer.",
      description:
        "Isabella es una ingeniera frontend enfocada en estructuras limpias, contenido legible y un portafolio que no compita con el trabajo.",
      primaryAction: "Ver trabajo",
      secondaryAction: "Abrir CV",
      tertiaryAction: "Contacto",
      cards: [
        { title: "Legible", description: "Contenido primero y sistema visual contenido" },
        { title: "Directo", description: "Menos ruido, menos capas, menos fricción" },
        { title: "Práctico", description: "CV, proyectos y contacto en una sola vista" },
      ],
    },
    resume: {
      eyebrow: "CV",
      title: "Una vista breve de los datos del CV.",
      description:
        "La página lee el JSON local de rxresu.me y lo presenta en una composición más simple.",
      downloadLabel: "Descargar PDF",
      profileLabel: "Perfiles",
      educationLabel: "Educación",
      languagesLabel: "Idiomas",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos con sólo lo que sirve.",
      description:
        "Estas tarjetas salen del JSON del CV y mantienen la lectura rápida.",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas y lenguajes",
      description:
        "Un resumen compacto de las tecnologías que ya aparecen en el CV local.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia del CV",
      description:
        "La misma historia laboral, con una composición más sobria y directa.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Escríbeme",
      description:
        "Los enlaces directos mantienen la página útil incluso si no bajas el PDF.",
      email: "Correo",
      github: "GitHub",
      resume: "CV",
    },
  },
} satisfies Record<Locale, LocaleContent>
