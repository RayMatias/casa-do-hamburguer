"use client"

import { Sandwich, UtensilsCrossed, DollarSign, Coins } from "lucide-react"

interface DashboardMetricsGridProps {
  metrics: {
    ordersToday: number
    totalOrders: number
    revenueToday: number
    totalRevenue: number
  }
}

export function DashboardMetricsGrid({ metrics }: DashboardMetricsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Pedidos Hoje */}
      <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 flex items-center gap-4">
        <div className="text-[#FBA716] p-2 bg-[#FBA716]/10 rounded-lg shrink-0">
          <Sandwich size={32} />
        </div>
        <div>
          <span className="text-xs text-zinc-400 font-medium block">Pedidos Hoje</span>
          <span className="text-xl font-bold text-white">{metrics.ordersToday}</span>
        </div>
      </div>

      {/* Pedidos Totais */}
      <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 flex items-center gap-4">
        <div className="text-[#FBA716] p-2 bg-[#FBA716]/10 rounded-lg shrink-0">
          <UtensilsCrossed size={32} />
        </div>
        <div>
          <span className="text-xs text-zinc-400 font-medium block">Pedidos Totais</span>
          <span className="text-xl font-bold text-white">{metrics.totalOrders}</span>
        </div>
      </div>

      {/* Faturamento Hoje */}
      <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 flex items-center gap-4">
        <div className="text-[#FBA716] p-2 bg-[#FBA716]/10 rounded-lg shrink-0">
          <DollarSign size={32} />
        </div>
        <div>
          <span className="text-xs text-[#B8BBC0] font-medium block">Faturamento Hoje</span>
          <span className="text-xl font-bold text-white">
            R$ {metrics.revenueToday.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Faturamento Total */}
      <div className="bg-[#0A0A0A] border border-[#FBA716]/30 rounded-xl p-4 flex items-center gap-4">
        <div className="text-[#FBA716] p-2 bg-[#FBA716]/10 rounded-lg shrink-0">
          <Coins size={32} />
        </div>
        <div>
          <span className="text-xs text-[#B8BBC0] font-medium block">Faturamento Total</span>
          <span className="text-xl font-bold text-white">
            R$ {metrics.totalRevenue.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}