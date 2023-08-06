import { Session } from "@auth0/nextjs-auth0";

export default function getSub(session:Session|null|undefined): string | null {
  return session?.user?.sub;
}