import { UserGreenting } from "../ui/UserGreeting" 
import { CartButton } from "../ui/CartButton" 
import Image from "next/image"; 
import { IconProfile } from "../ui/IconProfile";
import Link from 'next/link'


import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function HeaderHome(){

    const session = await auth()
    let userName = "Visitante"

    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { name: true }
      })

      if (user?.name) {
        userName = user.name
      }
    }

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
                <UserGreenting name={userName}></UserGreenting>
            </section>
            <section className="flex gap-6 md:col-start-13 md:col-end-13 md:items-center">
                <Link href={"/cart"} className="flex-1">
                    <CartButton></CartButton>
                </Link>
                <IconProfile height="h-10" width="w-10"></IconProfile>
            </section>
        </div>
    )
}