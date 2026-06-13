import type { Locale } from "./i18n"

type Project = {
  name: string
  category: string
  summary: string
  stack: string[]
}

type ExperienceItem = {
  title: string
  details: string[]
}

type LocaleContent = {
  nav: {
    projects: string
    playground: string
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
  currentFocus: {
    eyebrow: string
    title: string
    status: string
    cards: Array<{
      title: string
      description: string
    }>
    spotlightTitle: string
    spotlightDescription: string
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    items: Project[]
  }
  playground: {
    eyebrow: string
    title: string
    description: string
    tabs: {
      animations: string
      components: string
      ai: string
    }
    animationsTitle: string
    animationsDescription: string
    animationItems: string[]
    componentsTitle: string
    componentsDescription: string
    componentItems: string[]
    aiTitle: string
    aiDescription: string
    aiExample: string
  }
  skills: {
    eyebrow: string
    title: string
    items: string[]
  }
  experience: {
    eyebrow: string
    items: ExperienceItem[]
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
      playground: "Playground",
      experience: "Experience",
      contact: "Contact",
      localeLabel: "Español",
    },
    hero: {
      eyebrow: "Frontend engineer • AI products",
      title: "I build polished frontend experiences for AI-powered products.",
      description:
        "Isabella is a frontend engineer focused on developer experiences, sharp interfaces, and project showcases that make technical work easy to scan, easy to trust, and easy to remember.",
      primaryAction: "View projects",
      secondaryAction: "Playground",
      tertiaryAction: "Contact",
      cards: [
        {
          title: "Frontend",
          description: "Product UI, motion, and design systems",
        },
        {
          title: "AI",
          description: "Interfaces that make model behavior understandable",
        },
        {
          title: "Delivery",
          description: "Clear code, clear storytelling, clear outcomes",
        },
      ],
    },
    currentFocus: {
      eyebrow: "Current focus",
      title: "Fast, high-trust interfaces",
      status: "Available",
      cards: [
        {
          title: "Motion",
          description: "Subtle, intentional transitions that guide attention",
        },
        {
          title: "Systems",
          description: "Reusable patterns that keep pages consistent",
        },
        {
          title: "Clarity",
          description: "Recruiter-friendly content hierarchy",
        },
        {
          title: "Speed",
          description: "Responsive layouts that feel sharp on every screen",
        },
      ],
      spotlightTitle: "Built for hiring managers",
      spotlightDescription:
        "Crisp sections, visible outcomes, and a layout that makes the work easy to evaluate in under a minute.",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Featured projects with depth, not clutter.",
      description:
        "The cards below are structured for quick scanning: what it does, why it matters, and the stack behind it.",
      items: [
        {
          name: "Interview Architect",
          category: "AI system design coach",
          summary:
            "A guided practice flow that helps candidates rehearse architecture interviews with structured prompts, live notes, and shareable takeaways.",
          stack: ["Next.js", "TypeScript", "OpenCode", "Tailwind"],
        },
        {
          name: "Delivery U",
          category: "Food delivery app for university campuses",
          summary:
            "Delivery U is an application for delivering food inside a university campus. The project aimed to develop a mobile app to help students with mobility issues and provide income opportunities for others. I developed the front-end using Flutter and MaterialDesign and I was responsible for deploying the backend and the database in Docker.",
          stack: ["Flutter", "Firebase", "MaterialDesign"],
        },
        {
          name: "Web System for Business Internship Management",
          category: "Module for managing business internships at a university",
          summary:
            "The project aimed to improve the efficiency of handling internship agreements, offers, and commitment letters between the university and external companies. My contributions focused mainly on implementing the features for creating and approving commitment letters, internship offer listings, and some of the initial public-facing pages. I also collaborated with the team using GitHub Projects for task management and participated in joint decision-making regarding the design and direction of the project.",
          stack: ["Vue", "PrimeVue", "Typescript", "Tailwind"],
        },
      ],
    },
    playground: {
      eyebrow: "Playground",
      title: "A place to show taste, motion, and range.",
      description:
        "This section gives you room for interactive pieces that make the portfolio memorable beyond static case studies.",
      tabs: {
        animations: "Animations",
        components: "Components",
        ai: "AI demo",
      },
      animationsTitle: "Motion showcase",
      animationsDescription:
        "Use this tab for small interaction demos, hover states, or a scroll-linked sequence that signals frontend control.",
      animationItems: ["Hover depth", "Staggered reveal", "Micro-interactions"],
      componentsTitle: "Component gallery",
      componentsDescription:
        "Showcase a small system of cards, dialogs, badges, or sheets to prove you can build reusable UI with polish.",
      componentItems: [
        "Dialog flow",
        "Responsive sheet",
        "Data density",
        "Empty states",
      ],
      aiTitle: "AI interface concept",
      aiDescription:
        "Put a practical AI workflow here, such as prompt editing, answer synthesis, feedback generation, or a preview of model outputs wrapped in a trustworthy UI.",
      aiExample:
        "Example: turn a system design prompt into a guided prep session with outline generation, hints, and final feedback.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tech stack.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Flutter",
      ],
    },
    experience: {
      eyebrow: "Experience",
      items: [
        {
          title: "Intern at Vention",
          details: [
            "Served as Full Stack Developer, performing the following duties: developing and refactoring platform features into unified, reusable modules; authoring scope documents with sequence diagrams to define requirements before implementation; building solutions full-stack with React, Next.js, Ruby on Rails, and GraphQL; writing unit and end-to-end tests for critical user flows; and reviewing pull requests to uphold code quality, all within a Scrum workflow.",
            "Stood out for taking on critical, production-facing systems, navigating a steep learning curve while making sound architectural decisions and documenting her work with consistent rigor.",
          ],
        },
        {
          title: "Mobile Developer at Ples",
          details: [
            "I contributed by building a offline-first mobile app that served as a companion app for a Property Registry System for Colombian municipalities.",
            "It was built with Flutter and SQLite. It allowed people to save property records on low connectivity areas, and sync them back to the system once they had a stable connection to the internet.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Interested in working together?",
      description:
        "Swap in your real email, GitHub, and resume links here. This section is intentionally simple so the recruiter path stays obvious.",
      email: "Email",
      github: "GitHub",
      resume: "Resume",
    },
  },
  es: {
    nav: {
      projects: "Proyectos",
      playground: "Laboratorio",
      experience: "Experiencia",
      contact: "Contacto",
      localeLabel: "English",
    },
    hero: {
      eyebrow: "Ingeniera frontend • Productos de IA ",
      title:
        "Construyo experiencias frontend pulidas para productos impulsados por IA.",
      description:
        "Isabella es una ingeniera frontend enfocada en experiencias para desarrolladores, interfaces precisas y proyectos que hacen que el trabajo técnico sea fácil de leer, confiar y recordar.",
      primaryAction: "Ver proyectos",
      secondaryAction: "Laboratorio",
      tertiaryAction: "Contacto",
      cards: [
        {
          title: "Frontend",
          description: "IU de producto, motion y sistemas de diseño",
        },
        {
          title: "IA",
          description:
            "Interfaces que hacen comprensible el comportamiento del modelo",
        },
        {
          title: "Entrega",
          description: "Código claro, historia clara, resultados claros",
        },
      ],
    },
    currentFocus: {
      eyebrow: "Enfoque actual",
      title: "Interfaces rápidas y confiables",
      status: "Disponible",
      cards: [
        {
          title: "Motion",
          description:
            "Transiciones sutiles e intencionales que guían la atención",
        },
        {
          title: "Sistemas",
          description:
            "Patrones reutilizables que mantienen consistencia entre páginas",
        },
        {
          title: "Claridad",
          description: "Jerarquía de contenido pensada para reclutadores",
        },
        {
          title: "Velocidad",
          description:
            "Diseños responsivos que se sienten ágiles en cualquier pantalla",
        },
      ],
      spotlightTitle: "Construido para hiring managers",
      spotlightDescription:
        "Secciones claras, resultados visibles y una estructura que permite evaluar el trabajo en menos de un minuto.",
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos destacados con profundidad, no ruido.",
      description:
        "Las tarjetas de abajo están pensadas para escanear rápido: qué hace, por qué importa y qué stack lo respalda.",
      items: [
        {
          name: "Interview Architect",
          category: "Coach de diseño de sistemas con IA",
          summary:
            "Un flujo guiado de práctica que ayuda a candidatos a ensayar entrevistas de arquitectura con prompts estructurados, notas en vivo y resultados que se pueden compartir.",
          stack: ["Next.js", "TypeScript", "OpenCode", "Tailwind"],
        },
        {
          name: "Delivery U",
          category: "App de entrega de comida para campus universitarios",
          summary:
            "Delivery U es una aplicación para entregar comida dentro de un campus universitario. El proyecto buscaba desarrollar una app móvil para ayudar a estudiantes con dificultades de movilidad y generar oportunidades de ingreso para otras personas. Desarrollé el front-end con Flutter y MaterialDesign y también me encargué del despliegue del backend y la base de datos en Docker.",
          stack: ["Flutter", "Firebase", "MaterialDesign"],
        },
        {
          name: "Web System for Business Internship Management",
          category:
            "Módulo para gestionar prácticas empresariales en una universidad",
          summary:
            "El proyecto buscaba mejorar la eficiencia al manejar convenios, ofertas y cartas de compromiso entre la universidad y empresas externas. Mis aportes se enfocaron principalmente en implementar las funciones para crear y aprobar cartas de compromiso, listar ofertas de práctica y algunas de las páginas públicas iniciales. También colaboré con el equipo usando GitHub Projects para gestionar tareas y participé en decisiones conjuntas sobre el diseño y la dirección del proyecto.",
          stack: ["Vue", "PrimeVue", "Typescript", "Tailwind"],
        },
      ],
    },
    playground: {
      eyebrow: "Laboratorio",
      title: "Un lugar para mostrar criterio, motion y rango.",
      description:
        "Esta sección te da espacio para piezas interactivas que hagan el portafolio memorable más allá de los casos de estudio estáticos.",
      tabs: {
        animations: "Animaciones",
        components: "Componentes",
        ai: "Demo IA",
      },
      animationsTitle: "Muestra de motion",
      animationsDescription:
        "Usa esta pestaña para pequeñas demos de interacción, estados hover o una secuencia ligada al scroll que demuestre control del frontend.",
      animationItems: [
        "Profundidad al pasar el cursor",
        "Aparición escalonada",
        "Microinteracciones",
      ],
      componentsTitle: "Galería de componentes",
      componentsDescription:
        "Muestra un sistema pequeño de cards, diálogos, badges o sheets para demostrar que puedes construir UI reutilizable con pulido.",
      componentItems: [
        "Flujo de diálogo",
        "Sheet responsivo",
        "Densidad de datos",
        "Estados vacíos",
      ],
      aiTitle: "Concepto de interfaz IA",
      aiDescription:
        "Coloca aquí un flujo práctico de IA, como edición de prompts, síntesis de respuestas, generación de feedback o una vista previa de salidas del modelo envuelta en una UI confiable.",
      aiExample:
        "Ejemplo: convertir un prompt de diseño de sistemas en una sesión guiada de preparación con generación de esquema, pistas y feedback final.",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Stack técnico.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Flutter",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      items: [
        {
          title: "Intern at Vention",
          details: [
            "Trabajé como Full Stack Developer realizando las siguientes tareas: desarrollar y refactorizar funcionalidades de la plataforma en módulos unificados y reutilizables; redactar documentos de alcance con diagramas de secuencia para definir requisitos antes de implementar; construir soluciones full-stack con React, Next.js, Ruby on Rails y GraphQL; escribir pruebas unitarias y end-to-end para flujos críticos; y revisar pull requests para mantener la calidad del código, todo dentro de un flujo Scrum.",
            "Destacó por asumir sistemas críticos orientados a producción, navegar una curva de aprendizaje pronunciada y tomar decisiones arquitectónicas sólidas mientras documentaba su trabajo con rigor constante.",
          ],
        },
        {
          title: "Mobile Developer at Ples",
          details: [
            "Contribuí construyendo una app móvil offline-first que funcionaba como compañera de un sistema de registro de propiedades para municipios colombianos.",
            "Fue desarrollada con Flutter y SQLite. Permitía guardar registros de propiedades en zonas con poca conectividad y sincronizarlos luego con el sistema cuando existiera una conexión estable a internet.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Interesado en trabajar juntos?",
      description:
        "Sustituye aquí tu correo, GitHub y enlace al CV reales. Esta sección es intencionalmente simple para que la ruta del reclutador sea obvia.",
      email: "Correo",
      github: "GitHub",
      resume: "CV",
    },
  },
} satisfies Record<Locale, LocaleContent>
