import resumeJson from "../public/resume-isabella-alvarado.json"

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
  value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()

export const resumePdfPath = "/resume-isabella-alvarado.pdf"

export const resumeData: ResumeData = {
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
    .map((item) => ({
      title: `${item.degree} · ${item.school}`,
      meta: [item.period, item.grade].filter(Boolean).join(" · "),
      detail: stripHtml(item.description),
      link: item.website.url || undefined,
    })),
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