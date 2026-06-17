import { HugeiconsIcon } from "@hugeicons/react"
import {
  Book01Icon,
  CodeIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { LocaleContent } from "@/lib/portfolio-content"

type AboutSectionProps = {
  content: LocaleContent
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="space-y-6">
        <div>
          <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
            {content.about.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {content.about.title}
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary/30" />
        </div>
        <div className="space-y-8">
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
              <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <HugeiconsIcon
                  icon={
                    i === 0
                      ? UserGroupIcon
                      : i === 1
                        ? CodeIcon
                        : Book01Icon
                  }
                  size={22}
                  color="currentColor"
                  strokeWidth={1.6}
                />
              </div>
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
  )
}
