import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import dotenv from 'dotenv';
dotenv.config();
let domain = process.env.AUTH0_BASE_URL;
export const GET = handleAuth({
    login: handleLogin({
      authorizationParams: {
        prompt: "login",
      },
      returnTo: domain?domain:"/",
    }),
    signup: handleLogin({
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
      returnTo: domain?domain:"/",
    }),
  });