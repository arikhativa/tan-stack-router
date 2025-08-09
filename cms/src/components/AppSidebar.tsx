import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/clerk-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader >
        <UserButton />
      </SidebarHeader >
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}