import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TimelineProps = {
  children: ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-0", className)}>
      <div className="absolute top-2 bottom-2 left-4 w-px bg-white/10" />
      {children}
    </div>
  )
}
