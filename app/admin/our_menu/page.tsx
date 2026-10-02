import { NavBarAdmin } from "../componentes/sections/NavBarAdmin";
import { HeaderAdmin } from "../componentes/sections/HeaderAdmin";
import { MenuHeader } from "../componentes/sections/MenuHeader";
import { CategoriesSection } from "@/app/components/sections/CategoriesSection";
import { ProductCardSection } from "../componentes/sections/ProductCardSection";

import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma";

interface Our_MenuProps{
    searchParams: Promise<{category?:string}>
}

export default async function Our_Menu({searchParams}:Our_MenuProps){

    const session = await auth();
        if(!session){
            return redirect("/login")}

    const {category} = await searchParams;
    const categoryList = await prisma.category.findMany()

    return(
        <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0 ">
            <aside className="md:col-span-2 md:sticky md:h-screen md:top-0  md:block  md:inset-auto fixed bottom-0 inset-x-0 z-50">
                <NavBarAdmin></NavBarAdmin>
            </aside>
            <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
                <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
                    <HeaderAdmin></HeaderAdmin>
                </header>
                <section className="py-2 px-4 relative">
                    <MenuHeader></MenuHeader>
                    <CategoriesSection category={categoryList}></CategoriesSection>
                    <ProductCardSection categoryId={category}></ProductCardSection>
                </section>
            </main>
        </div>
    )
}