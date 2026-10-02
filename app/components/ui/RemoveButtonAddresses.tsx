"use client";

import { MainButton } from "./MainButton";
import { deleteAddress } from "@/app/actions/deleteAddress";
import { useState } from "react";

interface RemoveButtonAddressesPros{
    addressId: string;
}


export function RemoveButtonAddresses({addressId}:RemoveButtonAddressesPros){

    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {

        setIsDeleting(true);
        await deleteAddress(addressId);
        setIsDeleting(false);
    }

    return(
        <MainButton padding="px-6" size="text-[10px]" variant="remove" disabled={isDeleting} onClick={handleDelete}>
            {isDeleting ? "Removendo..." : "Remover"}
        </MainButton>
    )

}