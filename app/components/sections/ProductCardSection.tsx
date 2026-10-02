import { ProductCard } from "../ui/ProductCard"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

interface ProductCardSection{
    categoryId?:string
}


export async function ProductCardSection({categoryId}:ProductCardSection){

    const session = await auth()

    if(!session?.user){
        return
    }

    const productList = await prisma.product.findMany({
        where: categoryId && categoryId !== "all" ? 
        {categoryId : categoryId} : {} ,orderBy: { createdAt: "desc" }
    })
    // const categorytList = await prisma.category.findMany()

    return(
        <div className="md:flex-row mt-3 w-full flex flex-col flex-1 gap-4">
            <ProductCard productInitialList={productList}></ProductCard>
        </div>
    )
}