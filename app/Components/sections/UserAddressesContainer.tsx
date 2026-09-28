import { UserAddressSection } from "./UserAddressSection";

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"


export async function UserAddressContainer() {
    
    const session = await auth()

    if(!session?.user){
        return
    }

    const addresses = await prisma.address.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" }
    })

    return(

        <div>
            <UserAddressSection initialAddresses={addresses}></UserAddressSection>
        </div>

    )

}