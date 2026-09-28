"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { revalidatePath } from "next/cache"

export async function updateProfileImage(formData: FormData){
    const session = await auth()

    if (!session?.user?.email) {
    throw new Error("Usuário não autenticado.")}

    const file = formData.get("file") as File

    if (!file || file.size === 0) {
    throw new Error("Nenhum arquivo foi selecionado.")}

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = path.join(process.cwd(), "public", "uploads")
    
    await mkdir(uploadDir, { recursive: true })

    const fileExtension = path.extname(file.name)
    const fileName = `${Date.now()}${fileExtension}`
    const filePath = path.join(uploadDir, fileName)

    await writeFile(filePath, buffer)

    const imageUrl = `/uploads/${fileName}`

    await prisma.user.update({
        where: { email: session.user.email },
        data: { image: imageUrl },
    })

    revalidatePath("/profile")

    return { success: true }
}