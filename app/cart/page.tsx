"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { getUserOrders } from "@/app/actions/getUserOrders"

interface OrderItem {
  id: string
  quantity: number
  price: number | { toNumber?: () => number }
  product: {
    name: string
    imageUrl: string | null
  }
}

interface Order {
  id: string
  total: number | { toNumber?: () => number }
  status: string
  createdAt: string | Date
  items: OrderItem[]
}

export default function OrdersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return

    if (status === "unauthenticated") {
      router.push("/login")
      return
    }

    let isMounted = true

    async function loadOrders() {
      const userId = session?.user?.id
      if (!userId) return

      try {
        const data = await getUserOrders(userId)
        if (isMounted) {
          // Garante a conversão caso os dados venham como Prisma.Decimal ou payload serializado
          setOrders(data as unknown as Order[])
        }
      } catch (error) {
        console.error("Erro ao carregar pedidos:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadOrders()

    return () => {
      isMounted = false
    }
  }, [session?.user?.id, status, router])

  const formatCurrency = (val: number | { toNumber?: () => number }) => {
    const num = typeof val === "number" ? val : Number(val)
    return isNaN(num) ? "0.00" : num.toFixed(2)
  }

  const getStatusBadge = (orderStatus: string) => {
    switch (orderStatus.toUpperCase()) {
      case "COMPLETED":
      case "DELIVERED":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 size={14} /> Entregue
          </span>
        )
      case "PENDING":
      case "PREPARING":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-[#FBA716] border border-amber-500/20">
            <Clock size={14} /> Em preparo
          </span>
        )
      default:
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
            <AlertCircle size={14} /> {orderStatus}
          </span>
        )
    }
  }

  if (isLoading || status === "loading") {
    return (
      <main className="min-h-screen bg-[#0E0F10] text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-[#B8BBC0]">
          <Loader2 className="animate-spin text-[#FBA716]" size={24} />
          <span>Carregando seus pedidos...</span>
        </div>
      </main>
    )
  }

  if (orders.length === 0) {
    return (
      <main className="min-h-screen bg-[#0E0F10] text-white p-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="p-4 bg-[#121212] border border-[#2A2D30] rounded-full text-[#FBA716]">
          <Package size={36} />
        </div>
        <h1 className="text-2xl font-bold">Você ainda não fez nenhum pedido</h1>
        <p className="text-[#B8BBC0] max-w-sm">
          Aproveite nosso cardápio e faça seu primeiro pedido agora mesmo!
        </p>
        <Link
          href="/our_menu"
          className="bg-[#FBA716] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#e09413] transition mt-2"
        >
          Ir para o cardápio
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0E0F10] text-white p-4 md:p-8 max-w-4xl mx-auto">
      <Link
        href="/our_menu"
        className="flex items-center gap-2 text-[#B8BBC0] hover:text-white mb-6 transition w-fit"
      >
        <ArrowLeft size={20} /> Voltar ao cardápio
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Meus Pedidos</h1>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-[#2A2D30] bg-[#121212] rounded-xl overflow-hidden"
          >
            {/* Cabeçalho do Pedido */}
            <div className="p-4 bg-[#1A1C1E] border-b border-[#2A2D30] flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#B8BBC0] block">Pedido</span>
                <span className="font-mono text-xs font-semibold text-zinc-300">
                  #{order.id.slice(-8).toUpperCase()}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#B8BBC0] block">Data</span>
                <span className="text-xs font-medium">
                  {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div>{getStatusBadge(order.status)}</div>
            </div>

            {/* Itens do Pedido */}
            <div className="p-4 flex flex-col gap-3">
              {order.items.map((item) => {
                const itemPrice = typeof item.price === "number" ? item.price : Number(item.price)
                const itemTotal = item.quantity * itemPrice

                return (
                  <div key={item.id} className="flex items-center gap-4">
                    {item.product.imageUrl ? (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#2A2D30]">
                        <Image
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-[#2A2D30] rounded-lg shrink-0 flex items-center justify-center">
                        <Package size={20} className="text-[#B8BBC0]" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm leading-tight truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-xs text-[#B8BBC0]">
                        Qtd: {item.quantity} x R$ {formatCurrency(item.price)}
                      </span>
                    </div>

                    <span className="font-bold text-sm text-zinc-200">
                      R$ {formatCurrency(itemTotal)}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Rodapé do Pedido */}
            <div className="p-4 bg-[#161719] border-t border-[#2A2D30] flex justify-between items-center">
              <span className="text-sm text-[#B8BBC0]">Total do Pedido</span>
              <span className="font-bold text-lg text-[#FBA716]">
                R$ {formatCurrency(order.total)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}