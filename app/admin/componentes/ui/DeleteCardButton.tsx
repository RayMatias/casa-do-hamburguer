"use client"

import { MainButton } from "@/app/components/ui/MainButton";

import { deleteProducts } from "../../actions/deleteProducts";
import { useState } from "react";


interface DeleteCardButtonProps{
    productId:string
}


export function DeleteCardButton({productId}:DeleteCardButtonProps){

    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete(){
        setIsDeleting(true)
        await deleteProducts(productId)
        setIsDeleting(false)
    }

    return(
        <MainButton disabled={isDeleting} onClick={handleDelete} variant="remove">Remover</MainButton>
    )
}