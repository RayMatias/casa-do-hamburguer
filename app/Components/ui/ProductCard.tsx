import Image from "next/image"
import { CartButton } from "./CartButton"

interface ProductCardProps{
    id?:string
    name:string
    imageUrl:string
    description:string
    price:number
}



export function ProductCard({id,name,imageUrl,description,price}:ProductCardProps){
    return(
        <div className="w-full flex-1 flex flex-col p-2 gap-3 rounded-[10px] border border-[#2A2D30]">
            <section className="relative w-full h-40 md:h-50 overflow-hidden">
                <Image src={imageUrl} 
                alt="Imagem de um Hamburguer" 
                fill
                priority
                className="object-cover"></Image>
            </section>
            <section className="flex flex-col p-2 gap-2">
                <h3 className="text-[#FFFFFF] font-bold text-[18px] md:text-[22px]">{name}</h3>
                <p className="text-[#B8BBC0] text-[11px] md:text-[18px]">{description}</p>
                <div className="flex flex-1 w-full justify-between items-center">
                    <p className="text-[#FBA716] text-[24px] font-bold">R${price}</p>
                    <CartButton variant="secondary"></CartButton>
                </div>
            </section>
        </div>
    )
}