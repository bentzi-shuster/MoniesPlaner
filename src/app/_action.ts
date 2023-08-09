"use server"
import { revalidatePath } from "next/cache";
import { createPlan } from "../lib/plans";
import { Session, getSession } from "@auth0/nextjs-auth0";
// import getSub from "../lib/getSub";
import getName from "../lib/getName";
import getEmail from "../lib/getEmail";
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
let accountName:string|null = getName(session)
if(accountName){
let nameArray = accountName.split(" ")
accountName = nameArray[0]
}
if(!accountName){
  accountName = getEmail(session)
}
if(!accountName){
  accountName = "Anonymous Ginger Snap"
}
  await createPlan(name,sub,accountName)
  revalidatePath('/')
}