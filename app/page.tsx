import { redirect } from "next/navigation"

import { defaultLocale, getLocalePath } from "@/lib/i18n"

export default function Page() {
  redirect(getLocalePath(defaultLocale))
}
