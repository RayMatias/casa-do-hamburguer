"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProducts (idProduct:string){

    const session = await auth()

    if(!session?.user?.id){
        return { error: "Sessão inválida. Faça login novamente." };
    }

    try{
        await prisma.product.delete({
            where:{id:idProduct}
        })
        revalidatePath("admin/our_menu")
        return { success: "Produto adicionado com sucesso!" };
    }catch {
        return { error: "Erro ao cadastrar novo Produto." };
    }
}