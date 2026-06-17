import { cn } from "@/lib/utils"

type TimelineItemProps = {
  meta: string
  title: string
  detail: string
  className?: string
}

export function TimelineItem({
  meta,
  title,
  detail,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-6 pb-10 last:pb-0", className)}>
      <div className="relative z-10 mt-1.5 flex size-8 items-center justify-center rounded-full border border-white/10 bg-background">
        <div className="size-2 rounded-full bg-primary" />
      </div>
      <div className="flex-1 space-y-2 pt-1">
        <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
          {meta}
        </p>
        <p className="font-heading text-lg font-semibold text-foreground">
          {title}
        </p>
        <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
      </div>
    </div>
  )
}
