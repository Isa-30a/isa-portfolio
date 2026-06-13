import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavBar } from "./_components/NavBar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Notification03Icon, User03Icon } from "@hugeicons/core-free-icons"

const featuredProjects = [
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
      "The project aimed to improve the efficiency of handling internship agreements, offers, and commitment letters between the university and external companies. \nMy contributions focused mainly on implementing the features for creating and approving commitment letters, internship offer listings, and some of the initial public-facing pages. I also collaborated with the team using GitHub Projects for task management and participated in joint decision-making regarding the design and direction of the project.",
    stack: ["Vue", "PrimeVue", "Typescript", "Tailwind"],
  },
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Flutter",
]

const experience = [
  {
    title: "Intern at Vention",
    detail:
      "Served as Full Stack Developer, performing the following duties: developing and refactoring platform features into unified, reusable modules; authoring scope documents with sequence diagrams to define requirements before implementation; building solutions full-stack with React, Next.js, Ruby on Rails, and GraphQL; writing unit and end-to-end tests for critical user flows; and reviewing pull requests to uphold code quality, all within a Scrum workflow.</p><p>Stood out for taking on critical, production-facing systems, navigating a steep learning curve while making sound architectural decisions and documenting her work with consistent rigor.",
  },
  {
    title: "Mobile Developer at Ples",
    detail:
      "I contributed by building a offline-first mobile app that served as a companion app for a Property Registry System for Colombian monicipalities.  It was built with Flutter and SQLite. It allowed people to save property records on low connectivity areas, and sync them back to the system once they had a stable connection to the internet.",
  },
]

export default function Page() {
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
                  Portfolio of
                </span>
                <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  Isabella
                </span>
              </span>
            </a>

            <NavBar />
          </div>
        </header>

        <section
          id="top"
          className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
              Frontend engineer • AI products • Recruiter-friendly storytelling
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-heading text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                I build polished frontend experiences for AI-powered products.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg">
                Isabella is a frontend engineer focused on developer
                experiences, sharp interfaces, and project showcases that make
                technical work easy to scan, easy to trust, and easy to
                remember.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#playground">Playground</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Frontend", "Product UI, motion, and design systems"],
                ["AI", "Interfaces that make model behavior understandable"],
                ["Delivery", "Clear code, clear storytelling, clear outcomes"],
              ].map(([title, description]) => (
                <Card key={title} className="border-white/10 bg-white/5">
                  <CardContent className="space-y-2 p-5">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {description}
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
                      Current focus
                    </p>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                      Fast, high-trust interfaces
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
                    Available
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    [
                      "Motion",
                      "Subtle, intentional transitions that guide attention",
                    ],
                    ["Systems", "Reusable patterns that keep pages consistent"],
                    ["Clarity", "Recruiter-friendly content hierarchy"],
                    [
                      "Speed",
                      "Responsive layouts that feel sharp on every screen",
                    ],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-black/15 p-4"
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
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
                    Built for hiring managers
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Crisp sections, visible outcomes, and a layout that makes
                    the work easy to evaluate in under a minute.
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
                Selected work
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Featured projects with depth, not clutter.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              The cards below are structured for quick scanning: what it does,
              why it matters, and the stack behind it.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
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
              Playground
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A place to show taste, motion, and range.
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              This section gives you room for interactive pieces that make the
              portfolio memorable beyond static case studies.
            </p>
          </div>

          <Tabs defaultValue="animations" className="w-full flex-col gap-4">
            <TabsList className="grid w-full grid-cols-3 rounded-2xl border border-white/10 bg-white/5 p-1">
              <TabsTrigger value="animations">Animations</TabsTrigger>
              <TabsTrigger value="component">Components</TabsTrigger>
              <TabsTrigger value="ai">AI demo</TabsTrigger>
            </TabsList>

            <TabsContent value="animations" className="mt-0">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="space-y-4 p-6">
                  <p className="font-heading text-xl font-semibold text-foreground">
                    Motion showcase
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Use this tab for small interaction demos, hover states, or a
                    scroll-linked sequence that signals frontend control.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      "Hover depth",
                      "Staggered reveal",
                      "Micro-interactions",
                    ].map((item) => (
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
                    Component gallery
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Showcase a small system of cards, dialogs, badges, or sheets
                    to prove you can build reusable UI with polish.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Dialog flow",
                      "Responsive sheet",
                      "Data density",
                      "Empty states",
                    ].map((item) => (
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
                    AI interface concept
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Put a practical AI workflow here, such as prompt editing,
                    answer synthesis, feedback generation, or a preview of model
                    outputs wrapped in a trustworthy UI.
                  </p>
                  <div className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm leading-6 text-muted-foreground">
                    Example: turn a system design prompt into a guided prep
                    session with outline generation, hints, and final feedback.
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
                Skills
              </p>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                Tech stack.
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
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
              Experience
            </p>
            <div className="space-y-4">
              {experience.map((item) => (
                <Card key={item.title} className="border-white/10 bg-white/5">
                  <CardContent className="flex gap-4 p-5">
                    <div className="mt-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
                    <div className="space-y-1">
                      <p className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
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
                  Contact
                </p>
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Interested in working together?
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  Swap in your real email, GitHub, and resume links here. This
                  section is intentionally simple so the recruiter path stays
                  obvious.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg">
                  <a href="mailto:you@example.com">Email</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://github.com/Isa-30a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href="/resume.pdf">Resume</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
