"use server"

import { prisma } from "@/lib/prisma"

export async function getUserOrders(userId: string) {
  console.log("A procurar pedidos para o userId:", userId)
  try {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    return orders.map((order) => {
      const formattedDate = new Date(order.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })

      const itemsSummary = order.items
        .map((item) => `${item.quantity}x ${item.product?.name ?? "Produto"}`)
        .join(", ")

      return {
        id: order.id,
        formattedDate,
        itemsSummary,
        total: Number(order.total), // <--- Converte Decimal do Prisma para number JS
        status: order.status,
      }
    })
  } catch (error) {
    console.error("Erro ao buscar pedidos do usuário:", error)
    return []
  }
}