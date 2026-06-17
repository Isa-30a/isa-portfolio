import { SectionHeading } from "@/components/section-heading"
import { SkillPill } from "@/components/skill-pill"
import type { LocaleContent } from "@/lib/portfolio-content"
import type { ResumeData } from "@/lib/resume"

type SkillsSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function SkillsSection({ content, resumeData }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeading
        eyebrow={content.skills.eyebrow}
        title={content.skills.title}
        description={content.skills.description || undefined}
      />
      <div className="flex flex-wrap gap-3">
        {resumeData.skills.map((skill) => (
          <SkillPill key={skill}>{skill}</SkillPill>
        ))}
      </div>
    </section>
  )
}
