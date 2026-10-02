import { ShoppingCart } from "lucide-react"

interface CartButtonProps{
    variant?:"primary"|"secondary",
}


const variantStyle = {
    primary:"w-8 h-8",
    secondary:"w-6 h-6 md:w-8 md:h-8",
}


export function CartButton({variant="primary"}:CartButtonProps){
    return(
        <button>
            <ShoppingCart className={`text-[#FBA716] ${variantStyle[variant]} hover:text-[#FFFFFF] cursor-pointer transition ease-in-out duration-500`}></ShoppingCart>
        </button>
    )
}