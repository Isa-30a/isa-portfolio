import { HugeiconsIcon } from "@hugeicons/react"
import {
  Book01Icon,
  BrowserIcon,
  CodeIcon,
  Github01Icon,
  Globe02Icon,
  Link04Icon,
  Linkedin01Icon,
  User03Icon,
} from "@hugeicons/core-free-icons"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TypingAnimation } from "@/components/typing-animation"
import { NavBar } from "../_components/NavBar"
import { isLocale, type Locale } from "@/lib/i18n"
import { portfolioContent } from "@/lib/portfolio-content"
import { getResumeData } from "@/lib/resume"

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
        <header className="sticky top-4 z-30 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                <HugeiconsIcon
                  icon={User03Icon}
                  size={22}
                  color="currentColor"
                  strokeWidth={1.6}
                />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                Isabella Alvarado
              </span>
            </a>

            <NavBar locale={locale} nav={content.nav} />
          </div>
        </header>

        <section
          id="top"
          className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14"
        >
          <div className="space-y-8">
            <div className="inline-flex animate-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase duration-500 fade-in slide-in-from-bottom-4">
              {content.hero.eyebrow}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-heading text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                <TypingAnimation
                  text={content.hero.title}
                  speed={45}
                  startDelay={600}
                />
              </h1>
              <p className="max-w-2xl animate-in text-base leading-7 text-pretty text-muted-foreground delay-200 duration-700 fade-in slide-in-from-bottom-6 sm:text-lg">
                {content.hero.description}
              </p>
            </div>

            <div className="flex animate-in flex-wrap items-center gap-3 delay-300 duration-700 fade-in slide-in-from-bottom-6">
              <Button asChild size="lg">
                <a href="#projects">{content.hero.primaryAction}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#resume">{content.hero.secondaryAction}</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">{content.hero.tertiaryAction}</a>
              </Button>
            </div>
          </div>
          <Card className="animate-in border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur delay-400 duration-700 fade-in slide-in-from-right-8">
            <CardHeader className="space-y-2">
              <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                {content.resume.eyebrow}
              </p>
              <CardTitle className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                {content.resume.title}
              </CardTitle>
              {content.resume.description ? (
                <CardDescription className="text-sm leading-6">
                  {content.resume.description}
                </CardDescription>
              ) : null}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {resumeData.profiles.map((profile) => (
                  <a
                    key={profile.network}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-black/15 p-4 transition-colors hover:border-white/20 hover:bg-black/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <HugeiconsIcon
                          icon={
                            profile.network.toLowerCase() === "linkedin"
                              ? Linkedin01Icon
                              : profile.network.toLowerCase() === "github"
                                ? Github01Icon
                                : Globe02Icon
                          }
                          size={18}
                          color="currentColor"
                          strokeWidth={1.6}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                          {profile.network}
                        </p>
                        <p className="mt-0.5 truncate font-heading text-base font-semibold text-foreground">
                          {profile.username}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <Button asChild variant="outline" className="w-full">
                <a href={`mailto:${resumeData.basics.email}`}>
                  {content.contact.email}
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <AnimatedSection>
          <section
            id="about"
            className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                  {content.about.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.about.title}
                </h2>
              </div>
              <div className="space-y-4">
                {content.about.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-7 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {content.hero.cards.map((card, i) => (
                <Card key={card.title} className="border-white/10 bg-white/5">
                  <CardHeader className="gap-3">
                    <HugeiconsIcon
                      icon={
                        i === 0 ? BrowserIcon : i === 1 ? CodeIcon : Book01Icon
                      }
                      size={22}
                      color="currentColor"
                      strokeWidth={1.6}
                    />
                    <CardTitle className="font-heading text-sm font-semibold text-foreground">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <section id="projects" className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                  {content.projects.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.projects.title}
                </h2>
              </div>
              {content.projects.description ? (
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  {content.projects.description}
                </p>
              ) : null}
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {resumeData.projects.map((project) => (
                <Card
                  key={project.title}
                  className="border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <CardHeader className="space-y-3 pb-0">
                    <CardTitle className="text-xl text-foreground">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-primary/90">
                      {project.meta}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-4">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {project.detail}
                    </p>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-white/20 underline-offset-4"
                      >
                        Open link
                        <HugeiconsIcon
                          icon={Link04Icon}
                          size={16}
                          color="currentColor"
                          strokeWidth={1.6}
                        />
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <section id="resume" className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                  {content.resume.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.resume.title}
                </h2>
              </div>
              {content.resume.description ? (
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  {content.resume.description}
                </p>
              ) : null}
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <Card className="border-white/10 bg-white/5 lg:col-span-1">
                <CardHeader className="space-y-2">
                  <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                    {content.resume.profileLabel}
                  </p>
                  <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                    {resumeData.basics.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {resumeData.basics.email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resumeData.profiles.map((profile) => (
                      <a
                        key={profile.network}
                        href={profile.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-foreground transition-colors hover:border-white/20 hover:bg-black/20"
                      >
                        <span>{profile.network}</span>
                        <span className="text-muted-foreground">
                          {profile.username}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 lg:col-span-2">
                <CardHeader>
                  <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                    {content.resume.educationLabel}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resumeData.education.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-black/15 p-4"
                    >
                      <p className="font-heading text-base font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.meta}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                      {item.coursework ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <section id="experience" className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                  {content.experience.eyebrow}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.experience.title}
                </h2>
              </div>
              {content.experience.description ? (
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  {content.experience.description}
                </p>
              ) : null}
            </div>

            <div className="relative space-y-0">
              <div className="absolute top-2 bottom-2 left-4 w-px bg-white/10" />
              {resumeData.experience.map((item) => (
                <div
                  key={item.title}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  <div className="relative z-10 mt-1.5 flex size-8 items-center justify-center rounded-full border border-white/10 bg-background">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 space-y-2 pt-1">
                    <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                      {item.meta}
                    </p>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section id="contact">
            <Card className="border-white/10 bg-white/5">
              <CardContent className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                    {content.contact.eyebrow}
                  </p>
                  <CardTitle className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {content.contact.title}
                  </CardTitle>
                  {content.contact.description ? (
                    <CardDescription className="max-w-2xl text-sm leading-6">
                      {content.contact.description}
                    </CardDescription>
                  ) : null}
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button asChild size="lg">
                    <a href={`mailto:${resumeData.basics.email}`}>
                      {content.contact.email}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://github.com/Isa-30a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.contact.github}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>
      </div>
    </main>
  )
}
