"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export const NavBar = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="ghost" size="sm" asChild>
        <a href="#projects">Projects</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#playground">Playground</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#experience">Experience</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#contact">Contact</a>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      </Button>
    </div>
  )
}
