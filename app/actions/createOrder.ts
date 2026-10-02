"use server"

import { prisma } from "@/lib/prisma" // Importa a sua instância centralizada do Prisma Client

interface OrderItemInput {
  productId: string
  quantity: number
  price: number
}

interface CreateOrderProps {
  userId: string
  items: OrderItemInput[]
}

export async function createOrder({ userId, items }: CreateOrderProps) {

  if (!items || items.length === 0) {
    throw new Error("O carrinho está vazio.")
  }

  if (!userId) {
    throw new Error("Usuário não identificado.")
  }

  // Calcula o valor total do pedido
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // Cria o Order e vincula os OrderItems em uma única transação
  const order = await prisma.order.create({
    data: {
      userId,
      total,
      status: "PREPARING",
      items: {
        create: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: true,
    },
  })

  return { success: true, orderId: order.id }
}