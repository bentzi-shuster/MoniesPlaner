import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
// let domain = process.env.AUTH0_BASE_URL;
export const GET = handleAuth({
    login: handleLogin({
      authorizationParams: {
        prompt: "login",
      },
      returnTo: "/",
    }),
    signup: handleLogin({
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
      returnTo: "/",
    }),
  });