import { SectionHeading } from "@/components/section-heading"
import { Timeline } from "@/components/timeline"
import { TimelineItem } from "@/components/timeline-item"
import type { LocaleContent } from "@/lib/portfolio-content"
import type { ResumeData } from "@/lib/resume"

type ExperienceSectionProps = {
  content: LocaleContent
  resumeData: ResumeData
}

export function ExperienceSection({
  content,
  resumeData,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-6">
      <SectionHeading
        eyebrow={content.experience.eyebrow}
        title={content.experience.title}
        description={content.experience.description || undefined}
      />
      <Timeline>
        {resumeData.experience.map((item) => (
          <TimelineItem
            key={item.title}
            meta={item.meta}
            title={item.title}
            detail={item.detail}
          />
        ))}
      </Timeline>
    </section>
  )
}
