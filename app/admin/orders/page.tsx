import { HeaderAdmin } from "../components/sections/HeaderAdmin"
import { NavBarAdmin } from "../components/sections/NavBarAdmin"
import { AdminOrdersTable } from "../components/sections/AdminOrdersTable"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { getAdminOrders } from "../actions/getAdminOrders"

export default async function AdminOrdersPage() {
  const session = await auth()
  if (!session) {
    return redirect("/login")
  }

  const orders = await getAdminOrders()

  return (
    <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0">
      <aside className="md:col-span-2 md:sticky md:h-screen md:top-0 md:block md:inset-auto fixed bottom-0 inset-x-0 z-50">
        <NavBarAdmin />
      </aside>

      <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
        <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
          <HeaderAdmin />
        </header>

        <section className="py-2 px-4">
          <AdminOrdersTable initialOrders={orders} />
        </section>
      </main>
    </div>
  )
}