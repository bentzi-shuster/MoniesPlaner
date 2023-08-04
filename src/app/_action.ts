"use server"
import { revalidatePath } from "next/cache";
import { createPlan } from "../lib/plans";

export async function createPlanAction(name: string){
  await createPlan(name)
  revalidatePath('/')
}