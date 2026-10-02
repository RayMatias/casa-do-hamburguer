import Image from "next/image"
import { Product } from "@prisma/client"
import { Category } from "@prisma/client"
import { UpdateCardButton } from "./UpdateCardButton"
import { DeleteCardButton } from "./DeleteCardButton"

interface ProductCardProps{
    productInitialList:Product[]
    initialCategoryList:Category[]
}

export function ProductCard({productInitialList, initialCategoryList}:ProductCardProps, ){

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
                        </div>
                        <div className="flex flex-row gap-4 justify-between items-center w-full">
                                <div className="flex-1">
                                    <DeleteCardButton productId={product.id} />
                                </div>
                                <div className="flex-1">
                                    <UpdateCardButton product={JSON.parse(JSON.stringify(product))} categoryinitialList={initialCategoryList} />
                                </div>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}