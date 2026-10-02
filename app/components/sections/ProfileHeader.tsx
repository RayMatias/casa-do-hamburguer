
import { IconProfile } from "../ui/IconProfile"
import { UserProfileInfo } from "../ui/UserProfileInfo"
import { EditProfileButton } from "../ui/EditProfileButton"


import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function ProfileHeader(){

    const session = await auth()
    let userName = "Visitante"
    let userEmail = "Não informado"

    if(session?.user?.email){
        userEmail = session.user.email

        const user = await prisma.user.findUnique({
            where: { email: session.user.email }, 
            select:{name:true}
        })

         if (user?.name) {
            userName = user.name
        }
    }

    return(
        <div className="flex gap-2 w-full justify-center items-center">
            <IconProfile></IconProfile>
            <div className="flex flex-col gap-1">
                <UserProfileInfo email={userEmail}>{userName}</UserProfileInfo>
                <EditProfileButton></EditProfileButton>
            </div>
        </div>
    )
}