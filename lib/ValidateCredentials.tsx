import { prisma } from "@/lib/prisma";
import { compareSync } from "bcryptjs";

export async function ValidateCredentials(email:string,password:string){
    if(!email || !password){
        return null;
    }

    const user = await prisma.user.findUnique({where:{email:email?.trim()}}
    )
    if(!user || !user.password){
        return null;
    }

    const passwordMatch = compareSync(password,user.password)

    if(!passwordMatch){
        return null;
    }

    return {id:user.id,email:user.email, name:user.name};
}