import { redirect } from "@remix-run/node";
import authService from "~/utils/server/auth.services";
export async function action({ request }: { request: Request }) {
    const result = await authService.logout(request);
    if(!result){
       return Response.json({error:"Error while logging out"}, {status:500})
    }
    return redirect("/login")
}
