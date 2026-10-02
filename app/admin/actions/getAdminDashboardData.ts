"use server"

import { prisma } from "@/lib/prisma"

export async function getAdminDashboardData() {
  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)

  const endOfToday = new Date()
  endOfToday.setHours(23, 59, 59, 999)

  const [ordersTodayCount, totalOrdersCount, ordersTodaySum, totalOrdersSum] = await Promise.all([
    prisma.order.count({
      where: {
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    }),
    prisma.order.count(),
    prisma.order.aggregate({
      where: {
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
      _sum: {
        total: true,
      },
    }),
    prisma.order.aggregate({
      _sum: {
        total: true,
      },
    }),
  ])

  const recentOrders = await prisma.order.findMany({
    take: 5,
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

  return {
    metrics: {
      ordersToday: ordersTodayCount,
      totalOrders: totalOrdersCount,
      revenueToday: Number(ordersTodaySum._sum.total || 0),
      totalRevenue: Number(totalOrdersSum._sum.total || 0),
    },
    recentOrders: recentOrders.map((order) => {
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
        itemsCount: order.items.reduce((acc, item) => acc + item.quantity, 0),
      }
    }),
  }
}