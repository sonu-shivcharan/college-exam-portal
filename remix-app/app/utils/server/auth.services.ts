import { getSupabase } from "./supabase.server";

const authService = {
  async login(request: Request) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      return { error: "Email and Password are required", status: 400 };
    }
    const { supabase, headers } = getSupabase(request);
    const credentials = {
      email: String(email),
      password: String(password),
    };
    const { error } = await supabase.auth.signInWithPassword(credentials);
    if (error) {
      return { error: error.message, status: 401 };
    }

    return { headers }; // Return headers to set auth cookies
  },
  async logout(request: Request) {
    const { supabase } = getSupabase(request);
    const { error } = await supabase.auth.signOut();
    return !error;
  },
  async checkUserSession(request: Request) {
    const { supabase, headers } = getSupabase(request);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { user: null, headers: null };
    return { user, headers };
  }
}

export default authService
