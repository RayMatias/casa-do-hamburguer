import {MapPin} from "lucide-react"
import { MainButton } from "../ui/MainButton"

interface UserAddressSection{
    street:string
    neighborhood:string
    city:string
   postalCode:string
}

export function UserAddressSection(address:UserAddressSection){
    return(
        <div>
            <div className="flex gap-4 flex-1 items-center">
                <MapPin className="text-[#FBA716] w-20 h-20"></MapPin>
                <div className="flex flex-col items-start justify-center w-full my-3">
                    <p className="text-white text-[14px] md:text-[18px] font-bold">{address.street}</p>
                    <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.neighborhood}</p>
                    <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.city}</p>
                    <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.postalCode}</p>
                </div>
                <div>
                    <MainButton padding="px-6" size="text-[10px]" variant="third">Editar</MainButton>
                </div>
            </div>
            <MainButton size="text-[12px]" variant="third">+ Adicionar Novo Endereço</MainButton>
        </div>
    )
}