import { UtensilsCrossed } from "lucide-react"

export function MenuButton(){
    return(
        <button>
            <a className="flex justify-center items-center gap-4 text-white text-sm drop-shadow-md cursor-pointer hover:text-[#FFB000] hover:underline hover:drop-shadow-md transition-all duration-500 ease-in-out md:text-[20px]" href="#" target="_blank"> 
                <UtensilsCrossed className="text-[#FFB000] w-8 h-8 drop-shadow-lg "/>
                Cardápio</a>
        </button>
    )
}