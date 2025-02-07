import { LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import StudentDetails from "~/components/students/studentsDetails";
import authService from "~/utils/server/auth.services";
import dbService from "~/utils/server/db.services";

function Students() {
  const studentData = useLoaderData();
  console.log(studentData);
  return (
    <div>
      Students
      <StudentDetails studentData={""} />
    </div>
  );
}

export default Students;

export async function loader({ request }: LoaderFunctionArgs) {
  const { user } = await authService.checkUserSession(request);
  if (!user) {
    return redirect("/login");
  }
  const result = await dbService.getTableData(request, "students");
  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: result.status,
    });
  }
  return new Response(JSON.stringify({ data: result.data }));
}
