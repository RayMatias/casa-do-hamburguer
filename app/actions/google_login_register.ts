"use server";

import { signIn } from "@/auth";


export async function handleGoogleLogin() {
  await signIn("google", { redirectTo: "/" });
}