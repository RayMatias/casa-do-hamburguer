import Image from "next/image"; 
import { ButtonNav } from "@/app/components/ui/ButtonNav";
import { Home, Utensils, Package, CircleUser, LogOut } from "lucide-react";
import { logoutAction } from "@/app/actions/logout/logoutAction";
import Form from "next/form"
import Link from 'next/link'

export function NavBarAdmin(){
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
                <Link href={"/admin/home"} className="flex-1">
                    <ButtonNav>
                        <Home></Home>
                        Início
                    </ButtonNav>
                </Link>
                <Link href={"/admin/our_menu"} className="flex-1">
                    <ButtonNav>
                        <Utensils></Utensils>
                        Cardápio
                    </ButtonNav>
                </Link>
                <Link href={"/admin//orders"} className="flex-1">
                    <ButtonNav>
                        <Package></Package>
                        Pedidos
                    </ButtonNav>
                </Link>
                <Link href={"/admin/profile"} className="flex-1">
                    <ButtonNav>
                        <CircleUser></CircleUser>
                        Perfil
                    </ButtonNav>
                </Link>
                <Form action={logoutAction} className="p-0 m-0 flex-1">
                    <ButtonNav type="submit">
                        <LogOut></LogOut>Sair
                    </ButtonNav>
                </Form>
            </section>
        </div>
    )
}