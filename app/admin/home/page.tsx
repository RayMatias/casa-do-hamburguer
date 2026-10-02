import { HeaderAdmin } from "../componentes/sections/HeaderAdmin"
import { NavBarAdmin } from "../componentes/sections/NavBarAdmin"
import { RecentOrdersList } from "../componentes/sections/RecentOrdersList"
import { DashboardMetricsGrid } from "../componentes/sections/DashboardMetricsGrid"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getAdminDashboardData } from "../actions/getAdminDashboardData"

export default async function Home() {
  const session = await auth()
  if (!session) {
    return redirect("/login")
  }

  // Busca os dados diretamente do banco de dados no servidor
  const { metrics, recentOrders } = await getAdminDashboardData()

  return (
    <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0">
      <aside className="md:col-span-2 md:sticky md:h-screen md:top-0 md:block md:inset-auto fixed bottom-0 inset-x-0 z-50">
        <NavBarAdmin />
      </aside>

      <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
        <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
          <HeaderAdmin />
        </header>

        <section className="py-2 px-4 space-y-4">
          <DashboardMetricsGrid metrics={metrics} />
          <RecentOrdersList orders={recentOrders} />
        </section>
      </main>
    </div>
  )
}