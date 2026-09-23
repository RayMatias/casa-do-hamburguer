import { UserGreenting } from "../ui/UserGreeting" 
import { SearchBar } from "../ui/SearchBar" 
import { CartButton } from "../ui/CartButton" 
import { UserProfileButton } from "../ui/UserProfileButton"
import Image from "next/image"; 

export function HeaderHome(){
    return(
        <div className="w-full flex justify-between mb-2 items-center md:grid md:grid-cols-12">
            <section className="md:hidden">
                <Image 
                src="/images/Logo-burger-house.png" 
                alt="Logo do site" 
                width={75}  
                height={50} 
                priority
                className="md:w-18 h-auto"
                />
            </section>
            <section className="hidden md:flex md:justify-between gap-6 md:col-start-1 md:col-end-4 md:items-center">
                <UserGreenting></UserGreenting>
            </section>
            <section className="hidden md:flex md:justify-between gap-6 md:col-start-6 md:col-end-12 md:items-center">
                <SearchBar></SearchBar>
            </section>
            <section className="flex gap-6 md:col-start-13 md:col-end-13 md:items-center">
                <CartButton></CartButton>
                <UserProfileButton></UserProfileButton>
            </section>
        </div>
    )
}