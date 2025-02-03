import { Form } from "@remix-run/react"
import { Button } from "./ui/button"


function LoginForm() {
  return (
    <Form method="post">
      <Button>Submit</Button>
    </Form>
  )
}

export default LoginForm