"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type TypingAnimationProps = {
  text: string
  className?: string
  speed?: number
  startDelay?: number
}

export function TypingAnimation({
  text,
  className,
  speed = 40,
  startDelay = 0,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [text, speed, startDelay])

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursor)
  }, [])

  return (
    <span className={cn("inline", className)}>
      {displayed}<span
        className={cn(
          "inline-block w-[1px] h-[0.85em] bg-foreground align-middle transition-opacity",
          !showCursor && "opacity-0"
        )}
      />
    </span>
  )
}
