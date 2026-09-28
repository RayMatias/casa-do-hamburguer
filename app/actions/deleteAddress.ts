"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteAddress(addressId: string){
    const session = await auth()

    if(!session?.user?.id){
        return { error: "Sessão inválida. Faça login novamente." };
    }

    try{
        await prisma.address.deleteMany({
            where:{id:addressId,userId:session.user.id}
        })
        revalidatePath("/profile");
        return { success: "Endereço removido com sucesso!" };
    }catch (error) {
        console.error("Erro ao remover endereço:", error);
        return { error: "Erro ao remover o endereço." };
    }

}