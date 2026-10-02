"use server";

import { auth, signIn } from "../../auth";
import { AuthError } from "next-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";


async function handleRememberMe(formData: FormData) {
  const email = formData.get("email") as string;
  const remember = formData.get("remember") === "on";
  const cookieStore = await cookies();

  if (remember && email) {
    cookieStore.set("remember_email", email, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  } else {
    cookieStore.delete("remember_email");
  }
}

export default async function login(_prevState:unknown,formData:FormData){

  let targetUrl = "/home";

  try{
    await handleRememberMe(formData);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      await signIn("credentials", {
        email,
        password,
        redirect: false,});

      const user = await prisma.user.findUnique({
      where: { email },
      select: { role: true },});

      if (user?.role === "ADMIN") {
        targetUrl = "/admin/home";
      } else {
        targetUrl = "/home";}
  }catch(error){
    if (error instanceof AuthError){
      if (error.type === "CredentialsSignin"){
        return { error: "E-mail ou senha incorretos." };
      }
      return { error: "Erro ao tentar realizar o login." };
    }
      throw error;
    }

  redirect(targetUrl);
}
