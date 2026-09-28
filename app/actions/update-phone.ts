"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updatePhone(newPhone:string){
    const session = await auth()

    if (!session?.user?.email) {
    throw new Error("Usuário não autenticado.")}
    
    await prisma.user.update({
        where:{email: session.user.email},
        data:{phone:newPhone}
    })

    revalidatePath("/profile")

    return { success: true }
}
