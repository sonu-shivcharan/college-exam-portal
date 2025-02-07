import { Form, Link, NavLink, useLocation } from "@remix-run/react";
import { User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
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
import LogoutBtn from "./logoutBtn";


const navLinks = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/students",
    label: "Students",
  },
];
export function AppSidebar() {
  const { pathname } = useLocation();
  if (pathname === "/login") {
    return null;
  }
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
        <SidebarSeparator />
        <SidebarGroup>
          {navLinks.map((link) => (
            <NavLink
            key={link.pathname}
              className={({ isActive }) =>
                `w-full p-1 px-4 rounded duration-75 ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
              to={link.pathname}>
              {link.label}
            </NavLink>
          ))}
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
              <DropdownMenuItem>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Keyboard shortcut</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Form method="post" action="/logout">

        <LogoutBtn/>
        </Form>
      </SidebarFooter>
    </Sidebar>
  );
}
