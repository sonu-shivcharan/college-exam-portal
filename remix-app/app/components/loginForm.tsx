import { Form, useActionData } from "@remix-run/react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ActionFunctionArgs } from "@remix-run/node"
export const action = async ({request}:ActionFunctionArgs)=>{
  const data = await request.formData();
  console.log(data.get("email"))
}

function LoginForm() {
const data = useActionData();
console.log(data)
  return (
    <Form method="post" className="mx-auto max-w-[400px] w-full border p-4">
      <Input type="email" placeholder="abc@gmail.com"></Input>
      <Button>Submit</Button>
    </Form>
  )
}

export default LoginForm