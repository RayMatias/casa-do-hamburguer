"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function createCategory(_prevState: unknown,formData:FormData){

    const session = await auth()

    if(!session?.user?.id){
        return { error: "Sessão inválida. Faça login novamente." }
    }

    try{

        const name = formData.get("name") as string
        const slug = formData.get("slug") as string

        if(!name||!slug){
            return { error: "Preencha todos os campos" }
        }

        await prisma.category.create({
            data:{name,slug}
        })

        revalidatePath("admin/our_menu")
        return { success: "Categoria adicionado com sucesso!" };
    }catch{
        return { error: "Erro ao cadastrar nova Categoria." };
    }


}