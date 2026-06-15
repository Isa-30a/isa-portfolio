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
      title: "Frontend Engineer with Full-Stack Reach",
      description:
        "Frontend Developer and recent Computer Systems Engineering graduate with a strong focus on Next.js, React, Vue, and TypeScript. Passionate about building intuitive, accessible, and user-centered digital experiences that solve real-world problems and create meaningful impact for users.",
      primaryAction: "View work",
      secondaryAction: "Open resume",
      tertiaryAction: "Contact",
      cards: [
        {
          title: "Frontend Engineer",
          description:
            "Building with React, Next.js, and modern web technologies.",
        },
        {
          title: "Full-Stack Thinking",
          description: "Comfortable working across the stack — from UI to API.",
        },
        {
          title: "Always Learning",
          description: "Exploring new tools and improving my craft every day.",
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
      title: "Ingeniera Frontend con Alcance Full-Stack",
      description:
        "Frontend Developer recién graduada especializada en Next.js, React, Vue y TypeScript. Apasionada por crear experiencias digitales intuitivas, accesibles y centradas en el usuario, transformando problemas reales en soluciones que generan impacto.",
      primaryAction: "Ver trabajo",
      secondaryAction: "Abrir CV",
      tertiaryAction: "Contacto",
      cards: [
        {
          title: "Ingeniera Frontend",
          description:
            "Construyendo con React, Next.js y tecnologías modernas.",
        },
        {
          title: "Pensamiento Full-Stack",
          description: "Cómoda trabajando en todo el stack — del UI a la API.",
        },
        {
          title: "Siempre Aprendiendo",
          description: "Explorando nuevas herramientas y mejorando cada día.",
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
