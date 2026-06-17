import { HugeiconsIcon } from "@hugeicons/react"
import { User03Icon } from "@hugeicons/core-free-icons"
import { NavBar } from "./NavBar"
import type { Locale } from "@/lib/i18n"

type SiteHeaderProps = {
  locale: Locale
  nav: {
    skills: string
    projects: string
    resume: string
    experience: string
    contact: string
    localeLabel: string
  }
}

export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-30 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between">
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
        <NavBar locale={locale} nav={nav} />
      </div>
    </header>
  )
}
