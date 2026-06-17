"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"

type NavBarProps = {
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

export const NavBar = ({ locale, nav }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const nextLocale: Locale = locale === "en" ? "es" : "en"

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, close])

  const navLinks = [
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#resume", label: nav.resume },
    { href: "#experience", label: nav.experience },
    { href: "#contact", label: nav.contact },
  ]

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden items-center gap-2 lg:flex">
        {navLinks.map((link) => (
          <Button key={link.href} variant="ghost" size="sm" asChild>
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}
        <Button variant="outline" size="sm" asChild>
          <Link href={`/${nextLocale}`}>{nav.localeLabel}</Link>
        </Button>
      </div>

      {/* Mobile controls: lang toggle + hamburger */}
      <div className="flex items-center gap-2 lg:hidden">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/${nextLocale}`}>{nav.localeLabel}</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <HugeiconsIcon
            icon={isOpen ? Cancel01Icon : Menu01Icon}
            size={22}
            color="currentColor"
            strokeWidth={1.6}
          />
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-18 z-40 lg:hidden"
            onClick={close}
          />
          <div className="absolute left-0 right-0 top-full z-50 mt-2 px-4 lg:hidden animate-in fade-in slide-in-from-top-2">
            <div className="rounded-2xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
