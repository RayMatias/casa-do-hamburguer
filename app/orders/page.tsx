import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { HeaderHome } from "../components/sections/HeaderHome"
import { NavBar } from "../components/sections/NavBar"
import { UserOrdersTable } from "../components/sections/UserOrdersTable"
import { getUserOrders } from "@/app/actions/getUserOrders"

export default async function UserOrdersPage() {
  const session = await auth()
  if (!session?.user?.id) {
    return redirect("/login")
  }
  
  const orders = await getUserOrders(session.user.id)

  return (
    <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0">
      <aside className="md:col-span-2 md:sticky md:h-screen md:top-0 md:block md:inset-auto fixed bottom-0 inset-x-0 z-50">
        <NavBar />
      </aside>

      <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
        <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
          <HeaderHome/>
        </header>

        <section className="py-2 px-4">
          <UserOrdersTable initialOrders={orders} />
        </section>
      </main>
    </div>
  )
}