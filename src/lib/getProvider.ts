import { Session } from "@auth0/nextjs-auth0";
import getSub from "./getSub";
function capitalizeFirstLetter(string:string|null|undefined): string | null {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return null;
}
export function getProvider(session:Session|null|undefined): string | null {
  return capitalizeFirstLetter(getSub(session)?.split("|")[0])
}