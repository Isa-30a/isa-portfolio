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

type ResumeSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function ResumeSection({ content, resumeData }: ResumeSectionProps) {
  return (
    <section id="resume" className="space-y-6">
      <SectionHeading
        eyebrow={content.resume.eyebrow}
        title={content.resume.title}
        description={content.resume.description || undefined}
      />
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
  )
}
