"use client"


import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/app/actions/useCartStore"

interface CartButtonProps{
    variant?:"primary"|"secondary",
    product: {
    id: string
    name: string
    price: number
    imageUrl?: string | null
  }
}


const variantStyle = {
    primary:"w-8 h-8",
    secondary:"w-6 h-6 md:w-8 md:h-8",
}


export function CartButtonAdd({variant="primary", product}:CartButtonProps){

    const addToCart = useCartStore((state) => state.addToCart)

    const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    })
  } 


    return(
        <button onClick={handleAddToCart}>
            <ShoppingCart className={`text-[#FBA716] ${variantStyle[variant]} hover:text-[#FFFFFF] cursor-pointer transition ease-in-out duration-500`}></ShoppingCart>
        </button>
    )
}