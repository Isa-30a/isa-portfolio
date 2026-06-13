import { HugeiconsIcon } from "@hugeicons/react"
import { Notification03Icon, User03Icon } from "@hugeicons/core-free-icons"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "../_components/NavBar"
import { isLocale, type Locale } from "@/lib/i18n"
import { portfolioContent } from "@/lib/portfolio-content"

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

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-168 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_36%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-6 lg:px-8 lg:py-8">
        <header className="sticky top-4 z-30 rounded-2xl border border-white/10 bg-background/75 px-4 py-3 backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-white/10">
                <HugeiconsIcon
                  icon={User03Icon}
                  size={22}
                  color="currentColor"
                  strokeWidth={1.6}
                />
              </span>
              <span>
                <span className="block text-sm font-medium text-muted-foreground">
                  {locale === "es" ? "Portafolio de" : "Portfolio of"}
                </span>
                <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  Isabella
                </span>
              </span>
            </a>

            <NavBar locale={locale} nav={content.nav} />
          </div>
        </header>

        <section
          id="top"
          className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
              {content.hero.eyebrow}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-heading text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg">
                {content.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">{content.hero.primaryAction}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#playground">{content.hero.secondaryAction}</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">{content.hero.tertiaryAction}</a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.hero.cards.map((card) => (
                <Card key={card.title} className="border-white/10 bg-white/5">
                  <CardContent className="space-y-2 p-5">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {card.title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
              <CardContent className="space-y-6 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                      {content.currentFocus.eyebrow}
                    </p>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {content.currentFocus.title}
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
                    {content.currentFocus.status}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {content.currentFocus.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-black/15 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-white/10">
                  <HugeiconsIcon
                    icon={Notification03Icon}
                    size={26}
                    color="currentColor"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base font-semibold text-foreground">
                    {content.currentFocus.spotlightTitle}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {content.currentFocus.spotlightDescription}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              {content.projects.description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {content.projects.items.map((project) => (
              <Card
                key={project.name}
                className="border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <CardHeader className="space-y-3 pb-0">
                  <CardTitle className="text-xl text-foreground">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-primary/90">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="playground"
          className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
              {content.playground.eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {content.playground.title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {content.playground.description}
            </p>
          </div>

          <Tabs defaultValue="animations" className="w-full flex-col gap-4">
            <TabsList className="grid w-full grid-cols-3 rounded-2xl border border-white/10 bg-white/5 p-1">
              <TabsTrigger value="animations">
                {content.playground.tabs.animations}
              </TabsTrigger>
              <TabsTrigger value="component">
                {content.playground.tabs.components}
              </TabsTrigger>
              <TabsTrigger value="ai">{content.playground.tabs.ai}</TabsTrigger>
            </TabsList>

            <TabsContent value="animations" className="mt-0">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="space-y-4 p-6">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    {content.playground.animationsTitle}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {content.playground.animationsDescription}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {content.playground.animationItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="component" className="mt-0">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="space-y-4 p-6">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    {content.playground.componentsTitle}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {content.playground.componentsDescription}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {content.playground.componentItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="space-y-4 p-6">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    {content.playground.aiTitle}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {content.playground.aiDescription}
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm leading-6 text-muted-foreground">
                    {content.playground.aiExample}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section
          id="experience"
          className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <Card className="border-white/10 bg-white/5">
            <CardContent className="space-y-4 p-6">
              <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                {content.skills.eyebrow}
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                {content.skills.title}
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {content.skills.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
              {content.experience.eyebrow}
            </p>
            <div className="space-y-4">
              {content.experience.items.map((item) => (
                <Card key={item.title} className="border-white/10 bg-white/5">
                  <CardContent className="flex gap-4 p-5">
                    <div className="mt-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
                    <div className="space-y-3">
                      <p className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </p>
                      <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                        {item.details.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                  {content.contact.eyebrow}
                </p>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.contact.title}
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  {content.contact.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg">
                  <a href="mailto:you@example.com">{content.contact.email}</a>
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
                <Button asChild variant="ghost" size="lg">
                  <a href="/resume.pdf">{content.contact.resume}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
