"use server"

import Image from "next/image"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"


interface IconProfileProps{
    width?:string
    height?:string
}


export async function IconProfile({width ="w-25",height="h-25"}:IconProfileProps){

    const session = await auth()
    let userName = "Visitante"
    let userImg = ""

    if(session?.user?.email){
        const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        select: { name:true,image: true }
      })

      if(user?.name && user?.image){
        userName = user.name
        userImg = user.image
    }
}

    const avatarSrc = userImg && userImg.trim() !== "" ? userImg : "/images/default-avatar.png"
    
    return(
        <div className={`${width} ${height} rounded-full overflow-hidden border-2 border-[#FBA716] relative flex justify-center items-center`}>
            <Image src={avatarSrc} 
            alt={`Imagem do(a) ${userName}`} 
            fill
            priority
            className="object-cover rounded-[60px]"></Image>
        </div>
    )
}