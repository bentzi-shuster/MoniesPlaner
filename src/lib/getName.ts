import { Session } from "@auth0/nextjs-auth0";

export default function getName(session:Session|null|undefined): string | null {
  return (session)?.user?.name;
}