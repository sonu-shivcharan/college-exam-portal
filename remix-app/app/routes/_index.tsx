import type { MetaFunction } from "@remix-run/node";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { User } from "@supabase/supabase-js";
import { AppSidebar } from "~/components/app-sidebar";
import { Button } from "~/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import authService from "~/utils/server/auth.services";
export async function loader({ request }: LoaderFunctionArgs) {
  const {user, headers} = await authService.checkUserSession(request)
  if (!user) {
    return redirect("/login");
  }
  return Response.json(user, {headers});
}
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const actionData = useLoaderData<User>();
  return (
    <div className="h-screen">
      <SidebarTrigger></SidebarTrigger>
      {actionData.email}
      <Form method="post" action="/logout">
        <Button>Logout</Button>
      </Form>
    </div>
  );
}

