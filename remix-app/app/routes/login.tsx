import { Form, useActionData } from "@remix-run/react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import authService from "~/utils/server/auth.services";

type ActionData = {
  error?: string; //if errors
};

export async function loader({ request }: LoaderFunctionArgs) {
  const {user, headers} = await authService.checkUserSession(request)
  if (user) {
    return redirect("/", {headers});
  }
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const {error, status, headers} = await authService.login(request)
  if(error){
    return Response.json({error},{status})
  }
  return redirect("/", {headers})
}

export default function LoginPage() {
  const actionData = useActionData<ActionData>();
  return (
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">

        <h2 className="text-2xl font-bold text-center">Login</h2>
        {actionData?.error && (
          <p className="text-red-500 text-center">{actionData.error}</p>
        )}

        <Form method="post" className="space-y-4">
          <Input type="email" name="email" placeholder="Email" required />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-200 relative"></div>
      
    </div>
  );
}
