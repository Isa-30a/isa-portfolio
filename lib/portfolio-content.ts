import type { Locale } from "./i18n"

type LocaleContent = {
  nav: {
    skills: string
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
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
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
      skills: "Skills",
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
          title: "User-Centered Development",
          description:
            "I build interfaces with a strong focus on usability, accessibility, and user experience.",
        },
        {
          title: "Modern Frontend",
          description:
            "Experienced with Next.js, React, Vue, and TypeScript to create performant web applications.",
        },
        {
          title: "Continuous Learning",
          description:
            "Constantly exploring new technologies, best practices, and frontend architecture patterns.",
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "I build digital experiences that put people first",
      paragraphs: [
        "I'm passionate about UI Development, where my main focus is on how users truly experience an application once they start interacting with it. I love creating interfaces that feel intuitive, seamless, and enjoyable using Next.js, React, Vue, and TypeScript.",
        "Beyond coding, I'm also interested in the design side of interfaces — exploring how layout, color, and micro-interactions can transform the way people connect with technology. I enjoy turning ideas into seamless experiences that solve real problems.",
        "For me, building products is not just about functionality, but about delivering experiences that users genuinely enjoy. I'm always learning new technologies to create applications that make a meaningful impact.",
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
      description: "Technologies I work with regularly",
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
      skills: "Habilidades",
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
          title: "Desarrollo Centrado en Usuario",
          description:
            "Construyo interfaces con un fuerte enfoque en usabilidad, accesibilidad y experiencia de usuario.",
        },
        {
          title: "Frontend Moderno",
          description:
            "Experiencia con Next.js, React, Vue y TypeScript para crear aplicaciones web eficientes.",
        },
        {
          title: "Aprendizaje Continuo",
          description:
            "Explorando constantemente nuevas tecnologías, buenas prácticas y patrones de arquitectura frontend.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Creo experiencias digitales que ponen a las personas primero",
      paragraphs: [
        "Me apasiona el Desarrollo de Interfaces, donde mi enfoque principal es cómo los usuarios realmente experimentan una aplicación al interactuar con ella. Me encanta crear interfaces intuitivas, fluidas y agradables con Next.js, React, Vue y TypeScript.",
        "Más allá del código, también me interesa el diseño de interfaces, cómo el layout, el color y las micro-interacciones pueden transformar la forma en que las personas se conectan con la tecnología. Disfruto convertir ideas en experiencias que resuelven problemas reales.",
        "Para mí, construir productos no se trata solo de funcionalidad, sino de ofrecer experiencias que los usuarios realmente disfruten. Siempre estoy aprendiendo nuevas tecnologías para crear aplicaciones que generen un impacto significativo.",
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
      description: "Tecnologías con las que trabajo regularmente",
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
