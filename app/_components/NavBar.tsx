"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"

type NavBarProps = {
  locale: Locale
  nav: {
    projects: string
    resume: string
    experience: string
    contact: string
    localeLabel: string
  }
}

export const NavBar = ({ locale, nav }: NavBarProps) => {
  const { resolvedTheme, setTheme } = useTheme()
  const nextLocale: Locale = locale === "en" ? "es" : "en"

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="ghost" size="sm" asChild>
        <a href="#projects">{nav.projects}</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#resume">{nav.resume}</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#experience">{nav.experience}</a>
      </Button>
      <Button variant="ghost" size="sm" asChild>
        <a href="#contact">{nav.contact}</a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href={`/${nextLocale}`}>{nav.localeLabel}</Link>
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
