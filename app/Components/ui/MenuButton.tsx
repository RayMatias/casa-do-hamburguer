import { UtensilsCrossed } from "lucide-react"

export function MenuButton(){
    return(
        <div className="flex flex-row justify-center relative items-center">
            <UtensilsCrossed className="absolute text-[#FFB000] w-6 h-6 right-18 drop-shadow-lg "/>
            <button ><a className="text-white text-sm drop-shadow-md cursor-pointer hover:text-[#FFB000] hover:underline hover:drop-shadow-md transition-all duration-500 ease-in-out" href="#" target="_blank">Cardápio</a></button>
        </div>
    )
}