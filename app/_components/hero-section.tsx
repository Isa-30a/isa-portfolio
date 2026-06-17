import { HugeiconsIcon } from "@hugeicons/react"
import {
  Github01Icon,
  Globe02Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TypingAnimation } from "@/components/typing-animation"
import type { LocaleContent } from "@/lib/portfolio-content"
import type { ResumeData } from "@/lib/resume"

type HeroSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function HeroSection({ content, resumeData }: HeroSectionProps) {
  const { hero, resume, contact } = content

  return (
    <section
      id="top"
      className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14"
    >
      <div className="space-y-8">
        <div className="inline-flex animate-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase duration-500 fade-in slide-in-from-bottom-4">
          {hero.eyebrow}
        </div>

        <div className="space-y-6">
          <h1 className="max-w-4xl font-heading text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <TypingAnimation text={hero.title} speed={45} startDelay={600} />
          </h1>
          <p className="max-w-2xl animate-in text-base leading-7 text-pretty text-muted-foreground delay-200 duration-700 fade-in slide-in-from-bottom-6 sm:text-lg">
            {hero.description}
          </p>
        </div>

        <div className="flex animate-in flex-wrap items-center gap-3 delay-300 duration-700 fade-in slide-in-from-bottom-6">
          <Button asChild size="lg">
            <a href="#projects">{hero.primaryAction}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#resume">{hero.secondaryAction}</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#contact">{hero.tertiaryAction}</a>
          </Button>
        </div>
      </div>

      <Card className="animate-in border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur delay-400 duration-700 fade-in slide-in-from-right-8">
        <CardHeader className="space-y-2">
          <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
            {resume.eyebrow}
          </p>
          <CardTitle className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {resume.title}
          </CardTitle>
          {resume.description ? (
            <CardDescription className="text-sm leading-6">
              {resume.description}
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
              <HugeiconsIcon
                icon={Mail01Icon}
                size={18}
                color="currentColor"
                strokeWidth={1.6}
              />
              {contact.email}
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
