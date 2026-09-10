import Image from "next/image";
import { MenuButton } from "../ui/MenuButton";

export function Header(){
    return(
        <div className="grid grid-cols-12 w-full bg-[#050505]">
            <div className="col-span-12 p-4 flex flex-row justify-between items-center md:col-start-2 md:col-end-12">
                <Image 
                src="/images/Logo-burger-house.png" 
                alt="Logo do site" 
                width={75}  
                height={50} 
                priority
                className="md:w-18 h-auto"
                />
                <MenuButton/>
            </div>
        </div>
    )
}