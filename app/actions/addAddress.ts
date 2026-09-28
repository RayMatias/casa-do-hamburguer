"use server"

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function addAddress(_prevState: unknown, formData: FormData){

    const session = await auth()

    if (!session?.user?.id) {
    return { error: "Sessão inválida. Faça login novamente." };}

    const zipCode = formData.get("zipCode") as string;
    const street = formData.get("street") as string;
    const neighborhood = formData.get("neighborhood") as string;
    const city = formData.get("city") as string;
    const reference = formData.get("reference") as string;

    if (!zipCode || !street || !neighborhood || !city) {
        return { error: "Preencha todos os campos obrigatórios!" };
    }

    try {
        await prisma.address.create({
        data: {
            userId: session.user.id,
            zipCode,
            street,
            neighborhood,
            city,
            reference: reference || null,},});
        revalidatePath("/profile");
        return { success: "Endereço adicionado com sucesso!" };
    } catch  {
        return { error: "Erro ao cadastrar novo endereço." };}
}