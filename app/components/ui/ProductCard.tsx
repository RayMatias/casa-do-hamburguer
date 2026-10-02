import Image from "next/image"
import { Product } from "@prisma/client"
import { CartButtonAdd } from "./CartButtonAdd"
// import { Category } from "@prisma/client"


interface ProductCardProps {
    productInitialList:Product[]
    // initialCategoryList:Category[]
}

export function ProductCard({productInitialList}:ProductCardProps){
   return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {productInitialList.map((product)=>(
                <div key={product.id} className="w-full flex-1 flex flex-col p-2 gap-3 rounded-[10px] border border-[#2A2D30]">
                    <section className="relative w-full rounded-lg h-48 md:h-50 overflow-hidden">
                        <Image src={product.imageUrl ?? ""} 
                        alt="Imagem de um Hamburguer" 
                        fill
                        priority
                        className="object-cover"></Image>
                    </section>
                    <section className="flex flex-col p-2 gap-2">
                        <h3 className="text-[#FFFFFF] font-bold text-[18px] md:text-[22px]">{product.name}</h3>
                        <p className="text-[#B8BBC0] text-[11px] md:text-[18px]">{product.description}</p>
                        <div className="flex flex-1 w-full justify-between items-center">
                            <p className="text-[#FBA716] text-[24px] font-bold">R${product.price.toFixed(2)}</p>
                            <CartButtonAdd 
                                variant="secondary" 
                                product={{
                                id: product.id,
                                name: product.name,
                                price: Number(product.price),
                                imageUrl: product.imageUrl,
                            }}
                            />
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}