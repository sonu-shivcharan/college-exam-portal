import { Link, useLocation } from "@remix-run/react";
import { User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
  SidebarSeparator,
} from "~/components/ui/sidebar";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function AppSidebar() {
  const { pathname } = useLocation();
  if (pathname === "/login") {
    return null;
  }
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
          <SidebarSeparator></SidebarSeparator>
        <SidebarGroup>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <User />
              Account
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full border">
            <DropdownMenuGroup>
              <DropdownMenuItem><Link to="/profile">Profile</Link></DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Keyboard shortcut</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
