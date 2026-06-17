import { notFound } from "next/navigation"

import { AnimatedSection } from "@/components/animated-section"
import { isLocale, type Locale } from "@/lib/i18n"
import { portfolioContent } from "@/lib/portfolio-content"
import { getResumeData } from "@/lib/resume"

import { SiteHeader } from "../_components/site-header"
import { HeroSection } from "../_components/hero-section"
import { AboutSection } from "../_components/about-section"
import { SkillsSection } from "../_components/skills-section"
import { ProjectsSection } from "../_components/projects-section"
import { ResumeSection } from "../_components/resume-section"
import { ExperienceSection } from "../_components/experience-section"
import { ContactSection } from "../_components/contact-section"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const locale = lang as Locale
  const content = portfolioContent[locale]
  const resumeData = getResumeData(locale)

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-168 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_24%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-18 px-6 py-6 lg:px-8 lg:py-8">
        <SiteHeader locale={locale} nav={content.nav} />

        <HeroSection content={content} resumeData={resumeData} />

        <AnimatedSection>
          <AboutSection content={content} />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <SkillsSection content={content} resumeData={resumeData} />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <ProjectsSection content={content} resumeData={resumeData} />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <ResumeSection content={content} resumeData={resumeData} />
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <ExperienceSection content={content} resumeData={resumeData} />
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <ContactSection content={content} resumeData={resumeData} />
        </AnimatedSection>
      </div>
    </main>
  )
}
