import { User, Mail, Phone } from "lucide-react"
import { ProfileInfoRow } from "../ui/ProfileInfoRow"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"



export async function ProfileInfoRowList(){

   const session = await auth()
   let userName = "Visitante"
   let userEmail = ""
   let userphone = ""

   if(session?.user?.email){
      userEmail = session.user.email
      const user = await prisma.user.findUnique({
         where:{email: session.user.email}, 
         select:{name:true,email:true,phone:true}
         }
      )

      if(user?.name){
         userName = user.name

      }
      if(user?.phone){
         userphone = user.phone
      }
   }
    return(
        <div className="w-full flex flex-col gap-5">
            <ProfileInfoRow label="Nome" value={userName}>
               <User className="text-[#777B80] w-8 h-8"></User>
            </ProfileInfoRow>
            <ProfileInfoRow label="Email" value={userEmail}>
               <Mail className="text-[#777B80] w-8 h-8"></Mail>
            </ProfileInfoRow>
            <ProfileInfoRow variant="on"  label="telefone" value={userphone}>
               <Phone className="text-[#777B80] w-8 h-8"></Phone>
            </ProfileInfoRow>
        </div>
    )
}