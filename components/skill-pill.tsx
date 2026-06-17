import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SkillPillProps = {
  children: ReactNode
  className?: string
}

export function SkillPill({ children, className }: SkillPillProps) {
  // Could be a badge from shadcn/ui
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
