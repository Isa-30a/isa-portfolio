import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type NavBarProps = {}
export const NavBar = (props: NavBarProps) => {
  return (
    <Tabs defaultValue="Github" className="justify-end border-none">
      <TabsList>
        <TabsTrigger value="Github">Github</TabsTrigger>
        <TabsTrigger value="Resume">Resume</TabsTrigger>
        <TabsTrigger value="View">View Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="Github">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="Resume">Change your password here.</TabsContent>
      <TabsContent value="View">View your projects here.</TabsContent>
    </Tabs>
  )
}
