import { parseCookieHeader, serializeCookieHeader, createServerClient } from "@supabase/ssr";
import { config } from "configs/supabase.config";

export function getSupabase(request: Request) {
  const headers = new Headers();

  const supabase = createServerClient(config.url, config.key,  {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
        )
      },
    },
  })

  return { supabase, headers };
}