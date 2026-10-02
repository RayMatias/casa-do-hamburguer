"use client"

import { Clock, CheckCircle2, AlertCircle } from "lucide-react"

interface RecentOrder {
  id: string
  user: string
  total: number
  status: string
  formattedDate: string
  itemsCount: number
}

interface RecentOrdersListProps {
  orders: RecentOrder[]
}

export function RecentOrdersList({ orders }: RecentOrdersListProps) {
  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case "COMPLETED":
      case "DELIVERED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 size={12} /> Entregue
          </span>
        )
      case "PENDING":
      case "PREPARING":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-[#FBA716] border border-amber-500/20">
            <Clock size={12} /> Em preparo
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
            <AlertCircle size={12} /> {status}
          </span>
        )
    }
  }

  return (
    <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 sm:p-5">
      <h2 className="text-lg font-bold text-white mb-4">Pedidos Recentes</h2>

      {orders.length === 0 ? (
        <p className="text-sm text-[#B8BBC0] py-4 text-center">Nenhum pedido realizado ainda.</p>
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
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2225]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[#121212] transition">
                  <td className="py-3 px-3 font-mono font-semibold text-white">
                    #{order.id.slice(-8).toUpperCase()}
                  </td>
                  <td className="py-3 px-3 text-white font-medium">{order.user}</td>
                  <td className="py-3 px-3">{order.itemsCount} item(ns)</td>
                  <td className="py-3 px-3">{order.formattedDate}</td>
                  <td className="py-3 px-3 font-bold text-[#FBA716]">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="py-3 px-3">{getStatusBadge(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}