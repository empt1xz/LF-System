import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../../lib/auth";

export async function loginService(email: string, password: string) {
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
    asResponse: true,
  });

  return data;
}

export async function registerService(
  name: string,
  email: string,
  password: string,
) {
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
    asResponse: true,
  });

  return data;
}

export async function logoutService(headers: Headers) {
  const data = await auth.api.signOut({
    headers,
    asResponse: true,
  });
  return data;
}

export async function mySessionService(headers: Headers) {
  const data = await auth.api.getSession({
    headers,
  });

  return data;
}
