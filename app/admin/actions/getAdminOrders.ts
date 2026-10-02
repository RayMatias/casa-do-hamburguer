"use server"

import { prisma } from "@/lib/prisma"

export async function getAdminOrders() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      items: {
        include: {
          product: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  return orders.map((order) => {
    const dateObj = order.createdAt ? new Date(order.createdAt) : new Date()

    return {
      id: order.id,
      user: order.user?.name || order.user?.email || "Cliente sem nome",
      total: Number(order.total),
      status: order.status,
      formattedDate: dateObj.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      itemsSummary: order.items
        .map((item) => `${item.quantity}x ${item.product.name}`)
        .join(", "),
    }
  })
}