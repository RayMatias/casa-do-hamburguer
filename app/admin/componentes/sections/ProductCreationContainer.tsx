import { CreateCategorytButton } from "../ui/CreateCategorytButton"
import { CreateProductButton } from "../ui/CreateProductButton"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function ProductCreationContainer(){

    const session = await auth()

    if(!session?.user){
        return
    }

    const category = await prisma.category.findMany({
        orderBy: {createdAt: "desc"},
    })

    return(
        <div className="flex flex-row w-fit md:static md:inset-auto md:right-auto md:z-auto font-bold">
            <CreateCategorytButton></CreateCategorytButton>
            <CreateProductButton categoryListInitial={category}></CreateProductButton>
        </div>
    )
}