import { Calendar, Home, Inbox, Search, BookAudioIcon, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: BookAudioIcon,
  },
  {
    title: "Pengguna",
    url: "/dashboard/pengguna",
    icon: User2,
  },
  {
    title: "Shopee Page Sources",
    url: "/dashboard/produk",
    icon: Inbox,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-gray-700">
      <SidebarContent className="bg-[#18181b] text-white ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300">Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-[#ffffff1a] hover:text-white">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
