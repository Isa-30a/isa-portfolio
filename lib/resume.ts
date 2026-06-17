import resumeJson from "../public/resume-isabella-alvarado.json"
import type { Locale } from "./i18n"

type ResumeJson = {
  basics: {
    name: string
    email: string
    phone: string
  }
  sections: {
    profiles: {
      items: Array<{
        hidden: boolean
        network: string
        username: string
        website: {
          url: string
        }
      }>
    }
    experience: {
      items: Array<{
        hidden: boolean
        company: string
        position: string
        location: string
        period: string
        website: {
          url: string
        }
        description: string
      }>
    }
    education: {
      items: Array<{
        hidden: boolean
        school: string
        degree: string
        grade: string
        period: string
        website: {
          url: string
        }
        description: string
      }>
    }
    projects: {
      items: Array<{
        hidden: boolean
        name: string
        period: string
        website: {
          url: string
        }
        description: string
      }>
    }
    skills: {
      items: Array<{
        hidden: boolean
        name: string
      }>
    }
    languages: {
      items: Array<{
        hidden: boolean
        language: string
        fluency: string
      }>
    }
  }
}

export type ResumeData = {
  basics: ResumeJson["basics"]
  profiles: Array<{ network: string; username: string; url: string }>
  experience: Array<{
    title: string
    meta: string
    detail: string
    link?: string
  }>
  education: Array<{
    title: string
    meta: string
    detail: string
    coursework?: string[]
    link?: string
  }>
  projects: Array<{
    title: string
    meta: string
    detail: string
    link?: string
  }>
  skills: string[]
  languages: Array<{ language: string; fluency: string }>
}

const resume = resumeJson as ResumeJson

const stripHtml = (value: string) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()

export const resumePdfPath = "/resume-isabella-alvarado.pdf"

const esTranslations: {
  experience: ResumeData["experience"]
  education: ResumeData["education"]
  projects: ResumeData["projects"]
} = {
  experience: [
    {
      title: "Interna · Vention Inc",
      meta: "Canadá · agosto 2025 - agosto 2026",
      detail: "Me desempeñé como Desarrolladora Full Stack, realizando las siguientes funciones: desarrollar y refactorizar funcionalidades de la plataforma en módulos unificados y reutilizables; redactar documentos de alcance con diagramas de secuencia para definir requisitos antes de la implementación; construir soluciones full-stack con React, Next.js, Ruby on Rails y GraphQL; escribir pruebas unitarias y end-to-end para flujos críticos de usuario; y revisar pull requests para mantener la calidad del código, todo dentro de un flujo de trabajo Scrum.",
      link: "https://vention.io/",
    },
    {
      title: "Desarrolladora Móvil · Ples",
      meta: "mayo 2025 - julio 2025",
      detail: "Contribuí construyendo una aplicación móvil offline-first que servía como aplicación complementaria para un Sistema de Registro de Propiedades para municipios colombianos. Fue construida con Flutter y SQLite. Permitía a las personas guardar registros de propiedad en áreas de baja conectividad y sincronizarlos con el sistema una vez que tuvieran una conexión estable a internet.",
      link: "https://ples.com.co",
    },
  ],
  education: [
    {
      title: "Ingeniería de Computadores · Universidad de Cartagena",
      meta: "2021 - Presente · 4.2/5",
      detail: "Fecha estimada de graduación: septiembre 2026",
      coursework: [
        "Programación Orientada a Objetos",
        "Ingeniería de Software",
        "Diseño de Bases de Datos",
        "Ciberseguridad",
        "Algoritmos y Estructuras de Datos",
        "Ingeniería de Servicios de Internet",
        "Sistemas Operativos",
        "Redes",
        "Arquitectura de Software",
      ],
      link: "https://www.unicartagena.edu.co",
    },
  ],
  projects: [
    {
      title: "Delivery U",
      meta: "abril 2024 - mayo 2024",
      detail: "Delivery U es una aplicación para la entrega de comida dentro de un campus universitario. El proyecto tenía como objetivo desarrollar una aplicación móvil para ayudar a estudiantes con problemas de movilidad y brindar oportunidades de ingresos a otros. Desarrollé el front-end usando Flutter y MaterialDesign, y fui responsable de desplegar el backend y la base de datos en Docker.",
    },
    {
      title: "Sistema Web para Gestión de Prácticas Empresariales",
      meta: "septiembre 22 - diciembre 15 2024",
      detail: "Trabajé en el desarrollo de un módulo para la gestión de prácticas empresariales, donde asumí el rol de desarrolladora frontend utilizando Vue.js y el sistema de diseño PrimeVue. El proyecto buscaba mejorar la eficiencia en el manejo de convenios, ofertas y cartas de compromiso de prácticas entre la universidad y empresas externas. Mis contribuciones se centraron principalmente en implementar las funcionalidades para crear y aprobar cartas de compromiso, listados de ofertas de prácticas y algunas de las páginas públicas iniciales. También colaboré con el equipo usando GitHub Projects para la gestión de tareas y participé en la toma de decisiones conjuntas sobre el diseño y la dirección del proyecto.",
    },
  ],
}

function getResumeData(locale: Locale): ResumeData {
  const base = {
    basics: resume.basics,
    profiles: resume.sections.profiles.items
      .filter((item) => !item.hidden)
      .map((item) => ({
        network: item.network,
        username: item.username.trim(),
        url: item.website.url,
      })),
    experience: resume.sections.experience.items
      .filter((item) => !item.hidden)
      .map((item) => ({
        title: `${item.position} · ${item.company}`,
        meta: [item.location, item.period].filter(Boolean).join(" · "),
        detail: stripHtml(item.description),
        link: item.website.url || undefined,
      })),
    education: resume.sections.education.items
      .filter((item) => !item.hidden)
      .map((item) => {
        const text = stripHtml(item.description)
        const courseworkMatch = text.match(/Relevant coursework:\s*(.+)/)
        const coursework = courseworkMatch
          ? courseworkMatch[1].split(",").map((s) => s.trim())
          : undefined
        const detail = courseworkMatch
          ? text.replace(/Relevant coursework:\s*.+$/, "").trim()
          : text
        return {
          title: `${item.degree} · ${item.school}`,
          meta: [item.period, item.grade].filter(Boolean).join(" · "),
          detail,
          coursework,
          link: item.website.url || undefined,
        }
      }),
    projects: resume.sections.projects.items
      .filter((item) => !item.hidden)
      .map((item) => ({
        title: item.name,
        meta: item.period,
        detail: stripHtml(item.description),
        link: item.website.url || undefined,
      })),
    skills: resume.sections.skills.items
      .filter((item) => !item.hidden)
      .map((item) => item.name),
    languages: resume.sections.languages.items
      .filter((item) => !item.hidden)
      .map((item) => ({
        language: item.language.trim(),
        fluency: item.fluency,
      })),
  }

  if (locale === "en") return base

  return {
    ...base,
    experience: esTranslations.experience,
    education: esTranslations.education,
    projects: esTranslations.projects,
  }
}

export { getResumeData }
