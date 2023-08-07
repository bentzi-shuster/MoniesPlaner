"use server"
import { revalidatePath } from "next/cache";
import { createPlan } from "../lib/plans";
import { Session, getSession } from "@auth0/nextjs-auth0";
import getSub from "../lib/getSub";

export async function createPlanAction(name: string){
  let session:Session|null|undefined = await getSession()
  if(!session){
    return
  }
let sub:string|null= getSub(session)
if(!sub){
  return
}
  await createPlan(name,sub)
  revalidatePath('/')
}