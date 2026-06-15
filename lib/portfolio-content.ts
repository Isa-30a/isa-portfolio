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
      title:
        "I design calm, clear portfolio experiences that feel easy to read.",
      description:
        "Isabella is a frontend engineer focused on simple layouts, readable content, and a portfolio that gets out of the way of the work.",
      primaryAction: "View work",
      secondaryAction: "Open resume",
      tertiaryAction: "Contact",
      cards: [
        {
          title: "Readable",
          description: "Content first, with a quieter visual system",
        },
        { title: "Direct", description: "Less ceremony, fewer moving parts" },
        {
          title: "Practical",
          description: "Resume, projects, and contact in one pass",
        },
      ],
    },
    resume: {
      eyebrow: "Resume",
      title: "Resume",
      description: "",
      downloadLabel: "Download PDF",
      profileLabel: "Profiles",
      educationLabel: "Education",
      languagesLabel: "Languages",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      description: "",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and languages",
      description: "",
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience",
      description: "",
    },
    contact: {
      eyebrow: "Contact",
      title: "Reach out",
      description: "",
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
        {
          title: "Legible",
          description: "Contenido primero y sistema visual contenido",
        },
        {
          title: "Directo",
          description: "Menos ruido, menos capas, menos fricción",
        },
        {
          title: "Práctico",
          description: "CV, proyectos y contacto en una sola vista",
        },
      ],
    },
    resume: {
      eyebrow: "CV",
      title: "CV",
      description: "",
      downloadLabel: "Descargar PDF",
      profileLabel: "Perfiles",
      educationLabel: "Educación",
      languagesLabel: "Idiomas",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos",
      description: "",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas y lenguajes",
      description: "",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Experiencia",
      description: "",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Escríbeme",
      description: "",
      email: "Correo",
      github: "GitHub",
      resume: "CV",
    },
  },
} satisfies Record<Locale, LocaleContent>
