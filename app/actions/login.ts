"use server";

import { signIn } from "../../auth";
import { AuthError } from "next-auth";

export default async function login(_prevState:unknown,formData:FormData){
    try{
        await signIn("credentials",formData)
    }catch(error){
        if (error instanceof AuthError){
            if (error.type === "CredentialsSignin"){
                return { error: "E-mail ou senha incorretos." };
            }
            return { error: "Erro ao tentar realizar o login." };
        }
        throw error;
    }
}