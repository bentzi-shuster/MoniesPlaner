"use server"
import { handleSignup } from "../lib/users";
import { revalidatePath } from "next/cache";

export async function createBookAction(title: string, author: string) {
 await createBook(title, author);
 revalidatePath("/")
}

export async function createUserAction(email: string) {
  await handleSignup(email);
  revalidatePath("/")
}