import { Card, CardContent } from "@/components/ui/card"
import { NavBar } from "./_components/NavBar"
import { HugeiconsIcon } from "@hugeicons/react"
import { Notification03Icon, User03Icon } from "@hugeicons/core-free-icons"

export default function Page() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">Welcome to my Portfolio!</h1>
      <p className="mt-4 text-lg">
        This is a collection of my projects and experiences. Feel free to
        explore and learn more about me.
      </p>
      <div className="m-8 flex gap-8">
        <Card className="basis-1/3">
          <CardContent className="flex flex-col items-center gap-4">
            <HugeiconsIcon
              icon={User03Icon}
              size={50}
              color="currentColor"
              strokeWidth={1.5}
            />
            <h2 className="text-xl font-semibold"> Hi, I'm Isabella.</h2>
            <p className="mt-2 text-sm">
              Frontend Engineer focused on AI-powered products and developer
              experiences.
            </p>
          </CardContent>
        </Card>
        <Card className="basis-2/3">
          <CardContent>
            <NavBar />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
