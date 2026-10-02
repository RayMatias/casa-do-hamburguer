import { ProductCard } from "../ui/ProductCard"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

interface ProductCardSectionProps {
  categoryId?: string
}

export async function ProductCardSection({categoryId}:ProductCardSectionProps){

    const session = await auth()
    if(!session?.user){
        return
    }

    const product = await prisma.product.findMany({
        where: categoryId && categoryId !== "all"?
        {categoryId:categoryId} : {}
        ,orderBy: { createdAt: "desc" }
    })
    const category = await prisma.category.findMany()


    return(
        <div className="md:flex-row mt-3 w-full flex flex-col flex-1 gap-4">
            <ProductCard productInitialList={product} initialCategoryList={category} ></ProductCard>
        </div>
    )
}