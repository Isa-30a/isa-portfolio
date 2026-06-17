import { HugeiconsIcon } from "@hugeicons/react"
import { Github01Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import type { LocaleContent } from "@/lib/portfolio-content"
import type { ResumeData } from "@/lib/resume"

type ContactSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function ContactSection({
  content,
  resumeData,
}: ContactSectionProps) {
  return (
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
            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary/30" />
            {content.contact.description ? (
              <CardDescription className="max-w-2xl text-sm leading-6">
                {content.contact.description}
              </CardDescription>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg">
              <a href={`mailto:${resumeData.basics.email}`}>
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.6}
                />
                {content.contact.email}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/Isa-30a"
                target="_blank"
                rel="noreferrer"
              >
                <HugeiconsIcon
                  icon={Github01Icon}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.6}
                />
                {content.contact.github}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
