import Image from "next/image"; 
import { ButtonNav } from "../ui/ButtonNav"
import { Home, Utensils, Package, CircleUser, LogOut } from "lucide-react";

export function NavBar(){
    return(
        <div className="md:min-h-screen items-start border-r-2 border-[#2A2D30]">
            <section className="md:py-4 md:pt-8 md:pb-6 border-amber-300 w-full md:flex justify-center items-center hidden">
                <Image 
                src="/images/Logo-burger-house.png" 
                alt="Logo do site" 
                width={75}  
                height={50} 
                priority
                className="md:w-18 h-auto"
                />
            </section>
            <section className="bg-[#050505] md:bg-transparent flex md:flex-col gap-2 md:justify-start p-3 md:border-0 border-t-2 border-[#2A2D30]">
                <ButtonNav>
                    <Home></Home>
                    Início
                </ButtonNav>
                <ButtonNav>
                    <Utensils></Utensils>
                    Cardápio
                </ButtonNav>
                <ButtonNav>
                    <Package></Package>
                    <span className="md:block hidden">Meus Pedidos</span>
                    <span className="md:hidden">Pedidos</span>
                </ButtonNav>
                <ButtonNav>
                    <CircleUser></CircleUser>
                    Perfil
                </ButtonNav>
                <ButtonNav>
                    <LogOut></LogOut>
                    Sair
                </ButtonNav>
            </section>
        </div>
    )
}