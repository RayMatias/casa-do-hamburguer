"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProducts(productIdUser:string, formData:FormData) {
       
    const session = await auth()

    if(!session?.user?.id){
        return { error: "Sessão inválida." };
    }

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const priceString = formData.get("price") as string
    const imageUrl = formData.get("imageUrl") as string
    const category = formData.get("category") as string

    if(!name||!description||!priceString||!imageUrl||!category){
        return { error: "Preencha todos os campos" }
    }

    const priceNumber = parseFloat(priceString)

    if(isNaN(priceNumber) || priceNumber <= 0){
        return { error: "Digite um preço valido" }
    }

    try{
        await prisma.product.update({
            where: {id:productIdUser},
            data: {name,description,price:priceNumber,imageUrl,categoryId:category}
        })

        revalidatePath("admin/our_menu")
        return { success: "Produto adicionado com sucesso!" };
    }catch {
        return { error: "Erro ao cadastrar novo Produto." };
    }


}