"use client"

import { Hamburger, Popcorn, CupSoda, IceCream2,Menu} from "lucide-react";
import { CategoryCard } from "../ui/CategoryCard";
import { Category } from "@prisma/client"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

interface CategoriesSectionProps{
    category?: Category[]
}

export function CategoriesSection({category = []}:CategoriesSectionProps){

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    function handleSelectCategory(categoryId: string) {
        const params = new URLSearchParams(searchParams.toString())

        if (categoryId === "all") {
            params.delete("category") 
        } else {
            params.set("category", categoryId) 
        }

        console.log("OI BRASIL")
    
        router.push(`${pathname}?${params.toString()}`, { scroll: false })}

        const getCategoryIdByName = (name: string) => {
            const foundCategory = category.find(
            (c) => c.name.toLowerCase() === name.toLowerCase())
            return foundCategory ? foundCategory.id : "all"}


    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full mt-3">
            <CategoryCard onClick={()=>handleSelectCategory("all")}>
                <Menu className="text-[#FBA716] w-10 h-10"></Menu>
                <span className="text-[#B8BBC0] font-bold">Todos</span>
            </CategoryCard>
            <CategoryCard onClick={()=>handleSelectCategory(getCategoryIdByName("Hambúrgueres"))}>
                <Hamburger className="text-[#FBA716] w-10 h-10"></Hamburger>
                <span className="text-[#B8BBC0] font-bold">Hambúrgueres</span>
            </CategoryCard>
            <CategoryCard onClick={()=>handleSelectCategory(getCategoryIdByName("Porções"))}>
                <Popcorn className="text-[#FBA716] w-10 h-10"></Popcorn>
                <span className="text-[#B8BBC0] font-bold">Porções</span>
            </CategoryCard>
            <CategoryCard onClick={()=>handleSelectCategory(getCategoryIdByName("Bebidas"))}>
                <CupSoda className="text-[#FBA716] w-10 h-10"></CupSoda>
                <span className="text-[#B8BBC0] font-bold">Bebidas</span>
            </CategoryCard>
            <CategoryCard onClick={()=>handleSelectCategory(getCategoryIdByName("Sobremesa"))}>
                <IceCream2 className="text-[#FBA716] w-10 h-10"></IceCream2>
                <span className="text-[#B8BBC0] font-bold">Sobremesa</span>
            </CategoryCard>
        </div>
    )
}