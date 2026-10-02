"use client"

import { useState, useTransition } from "react"
import { updateOrderStatus } from "../../actions/updateOrderStatus" 
import { OrderStatus } from "@prisma/client"
import { Loader2 } from "lucide-react"

interface Order {
  id: string
  user: string
  total: number
  status: OrderStatus
  formattedDate: string
  itemsSummary: string
}

interface AdminOrdersTableProps {
  initialOrders: Order[]
}

export function AdminOrdersTable({ initialOrders }: AdminOrdersTableProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [loadingId, setLoadingId] = useState<string | null>(null)
  const [, startTransition] = useTransition()

  const handleStatusChange = async (orderId: string, newStatus: OrderStatus) => {
    setLoadingId(orderId)

    startTransition(async () => {
      const res = await updateOrderStatus(orderId, newStatus)

      if (res.success) {
        setOrders((prev) =>
          prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
        )
      } else {
        alert("Erro ao atualizar o estado do pedido.")
      }

      setLoadingId(null)
    })
  }

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED:
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      case OrderStatus.ON_THE_WAY:
        return "bg-blue-500/10 text-blue-400 border-blue-500/30"
      case OrderStatus.CANCELED:
        return "bg-red-500/10 text-red-400 border-red-500/30"
      case OrderStatus.PREPARING:
      default:
        return "bg-amber-500/10 text-[#FBA716] border-amber-500/30"
    }
  }

  return (
    <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Todos os Pedidos</h2>
        <span className="text-xs text-[#B8BBC0]">{orders.length} pedido(s) encontrado(s)</span>
      </div>

      {orders.length === 0 ? (
        <p className="text-sm text-[#B8BBC0] py-6 text-center">Nenhum pedido registrado.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-[#B8BBC0]">
            <thead className="text-xs uppercase bg-[#141414] text-zinc-400 border-b border-[#2A2D30]">
              <tr>
                <th className="py-3 px-3">Código</th>
                <th className="py-3 px-3">Cliente</th>
                <th className="py-3 px-3">Itens</th>
                <th className="py-3 px-3">Data/Hora</th>
                <th className="py-3 px-3">Total</th>
                <th className="py-3 px-3">Atualizar Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2225]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[#121212] transition">
                  <td className="py-3.5 px-3 font-mono font-semibold text-white">
                    #{order.id.slice(-8).toUpperCase()}
                  </td>
                  <td className="py-3.5 px-3 text-white font-medium">{order.user}</td>
                  <td className="py-3.5 px-3 max-w-xs truncate text-zinc-300" title={order.itemsSummary}>
                    {order.itemsSummary}
                  </td>
                  <td className="py-3.5 px-3">{order.formattedDate}</td>
                  <td className="py-3.5 px-3 font-bold text-[#FBA716]">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={order.status}
                        disabled={loadingId === order.id}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
                        className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 outline-none border cursor-pointer transition ${getStatusColor(
                          order.status
                        )} bg-[#050505]`}
                      >
                        <option value="PREPARING">⏳ Em preparo</option>
                        <option value="ON_THE_WAY">🛵 Saiu para entrega</option>
                        <option value="DELIVERED">✅ Entregue</option>
                        <option value="CANCELED">❌ Cancelado</option>
                      </select>

                      {loadingId === order.id && (
                        <Loader2 className="animate-spin text-[#FBA716]" size={16} />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}