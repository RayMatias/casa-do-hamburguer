import { OrderStatus } from "@prisma/client"

export interface UserOrder {
  id: string
  formattedDate: string
  itemsSummary: string
  total: number // Deve permanecer number
  status: OrderStatus
}

interface UserOrdersTableProps {
  initialOrders: UserOrder[]
}

export function UserOrdersTable({ initialOrders }: UserOrdersTableProps) {
  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            ✅ Entregue
          </span>
        )
      case OrderStatus.ON_THE_WAY:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
            🛵 Saiu para entrega
          </span>
        )
      case OrderStatus.CANCELED:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30">
            ❌ Cancelado
          </span>
        )
      case OrderStatus.PREPARING:
      default:
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-amber-500/10 text-[#FBA716] border border-amber-500/30">
            ⏳ Em preparo
          </span>
        )
    }
  }

  return (
    <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 sm:p-5 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Meus Pedidos</h2>
        <span className="text-xs text-[#B8BBC0]">
          {initialOrders.length} pedido(s) encontrado(s)
        </span>
      </div>

      {initialOrders.length === 0 ? (
        <p className="text-sm text-[#B8BBC0] py-8 text-center">
          Você ainda não realizou nenhum pedido.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-[#B8BBC0]">
            <thead className="text-xs uppercase bg-[#141414] text-zinc-400 border-b border-[#2A2D30]">
              <tr>
                <th className="py-3 px-3">CÓDIGO</th>
                <th className="py-3 px-3">ITENS</th>
                <th className="py-3 px-3">DATA/HORA</th>
                <th className="py-3 px-3">TOTAL</th>
                <th className="py-3 px-3">ESTADO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F2225]">
              {initialOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#121212] transition">
                  <td className="py-3.5 px-3 font-mono font-bold text-white">
                    #{order.id.slice(-8).toUpperCase()}
                  </td>
                  <td
                    className="py-3.5 px-3 max-w-md truncate text-zinc-300 font-medium"
                    title={order.itemsSummary}
                  >
                    {order.itemsSummary}
                  </td>
                  <td className="py-3.5 px-3 text-zinc-300">{order.formattedDate}</td>
                  <td className="py-3.5 px-3 font-bold text-[#FBA716]">
                    R$ {order.total.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-3">{getStatusBadge(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}