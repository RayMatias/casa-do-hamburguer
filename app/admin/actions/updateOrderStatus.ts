"use server"

import { prisma } from "@/lib/prisma"
import { OrderStatus } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function updateOrderStatus(orderId: string, newStatus: OrderStatus) {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus },
    })

    revalidatePath("/admin")
    revalidatePath("/admin/orders")

    return { success: true }
  } catch (error) {
    console.error("Erro ao atualizar estado do pedido:", error)
    return { success: false, error: "Falha ao atualizar o estado." }
  }
}