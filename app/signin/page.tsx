
import SigninForm from "@/components/signin/Signin";

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Left side - Signin Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
          <SigninForm></SigninForm>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block w-1/2 bg-gray-200 relative"></div>
    </div>
  );
}
