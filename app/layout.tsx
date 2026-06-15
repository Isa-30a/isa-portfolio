import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google"
import { headers } from "next/headers"

import "./globals.css"
import { cn } from "@/lib/utils"

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Isabella Alvarado | Frontend Engineer",
  description:
    "Simple portfolio with resume data, selected work, and direct contact links.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const locale = requestHeaders.get("x-locale") ?? "en"

  return (
    <html
      lang={locale}
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        spaceGroteskHeading.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
