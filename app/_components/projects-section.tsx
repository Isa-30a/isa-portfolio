import { HugeiconsIcon } from "@hugeicons/react"
import { Link04Icon } from "@hugeicons/core-free-icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import type { LocaleContent } from "@/lib/portfolio-content"
import type { ResumeData } from "@/lib/resume"

type ProjectsSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function ProjectsSection({ content, resumeData }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-6">
      <SectionHeading
        eyebrow={content.projects.eyebrow}
        title={content.projects.title}
        description={content.projects.description || undefined}
      />
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
  )
}
