"use client"

import { MainButton } from "@/app/components/ui/MainButton"
import React, { useState } from "react";
import Image from "next/image";

import { updateProducts } from "../../actions/updateProducts";
import { Category } from "@prisma/client";
import { UploadButton } from "./upload-button";
import { Product } from "@prisma/client";

interface UpdateCardButton{
    categoryinitialList:Category[]
    product: Product
}

export function UpdateCardButton({categoryinitialList,product}:UpdateCardButton){

        const [isOpen,setIsOpen] = useState(false)
        const [loading,setLoading] = useState(false)
        const [error,setError] = useState<string | null>(null)
        const [imageUrl, setImageUrl] = useState<string>("");

        async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
            event.preventDefault();
            setLoading(true);
            setError(null);

            const form = event.currentTarget
            const formData = new FormData(form)
            const result = await updateProducts(product.id,formData)
            setLoading(false);

            if(result?.error){
                setError(result.error);
            }else{
                setIsOpen(false);
                form.reset();
            }

        }   


    return (
    <div>
        {isOpen && (
            <div className="min-h-screen flex items-center justify-center bg-transparent p-4 fixed inset-0 z-50  backdrop-blur-sm ">
                <form onSubmit={handleSubmit} className="p-4 border bg-[#050505] border-[#FFB000] rounded-xl flex flex-col gap-3 b w-full max-w-md shadow-lg space-y-4">
                    <div className="flex justify-between items-center border-b border-[#262626] pb-2">
                        <h3 className="text-white font-semibold text-sm">Editar Produto</h3>
                    </div>
                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                        name="name"
                        placeholder="Nome Do Produto"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                        <input
                        name="price"
                        placeholder="Preço"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-xs text-zinc-400 font-semibold uppercase">
                                Imagem do Produto
                            </label>

                            {imageUrl ? (
                                <div className="flex items-center gap-3 bg-[#171717] p-2 rounded border border-[#262626]">
                                    <Image src={imageUrl} width={48} height={48} alt="Preview" className="w-12 h-12 object-cover rounded" />
                                    <button 
                                    type="button"
                                    onClick={() => setImageUrl("")}
                                    className="text-xs text-red-500 hover:underline cursor-pointer"
                                    >
                                    Remover / Trocar
                                    </button>
                                </div>
                                ) : (
                                <UploadButton
                                    endpoint="imageUploader"
                                    appearance={{
                                        button: "bg-[#262626] text-white text-sm hover:bg-[#333333] border border-[#333333] transition-colors px-4 py-2 rounded-md cursor-pointer",
                                        allowedContent: "hidden",
                                        container: "[&_input[type='file']]:opacity-0 [&_input[type='file']]:absolute [&_input[type='file']]:inset-0 [&_input[type='file']]:w-full [&_input[type='file']]:h-full [&_input[type='file']]:cursor-pointer",}}
                                    
                                    content={{
                                        button({ ready, isUploading }) {
                                        if (isUploading) return "A carregar...";
                                        if (ready) return "Escolher imagem";
                                        return "Escolher imagem...";
                                        },
                                    }}
                                    onClientUploadComplete={(res) => {
                                        if (res?.[0]) {
                                        setImageUrl(res[0].url);
                                        }
                                    }}
                                    onUploadError={(error: Error) => {
                                        alert(`Erro no upload: ${error.message}`);
                                    }}
                                    />
                            )}
                            <input type="hidden" name="imageUrl" value={imageUrl} />
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <input
                            name="description"
                            placeholder="Descrição"
                            className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                            />
                            <label className="text-xs text-zinc-400 font-semibold uppercase mt-1">
                                Categorias
                            </label>
                            <div className="flex flex-col gap-1.5 max-h-36 overflow-y-auto pr-1">
                                {categoryinitialList.map((category)=>(
                                    <label key={category.id} className="flex items-center gap-2 p-2 bg-[#171717] border border-[#262626] rounded cursor-pointer hover:border-[#FBA716]/50 transition">
                                        <input type="radio" name="category" value={category.id} required className="accent-[#FFB000] cursor-pointer"/>
                                        <span className="text-xs text-white">{category.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-2">
                        <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-xs text-white bg-[#E5484D] cursor-pointer hover:bg-red-700 rounded-2xl">Cancelar</button>
                        <MainButton padding="px-4 py-2" size="text-[12px]" variant="third" disabled={loading}>
                            {loading ? "A guardar..." : "Salvar Produto"}
                        </MainButton>
                    </div>
                </form>
            </div>) }
        {!isOpen && (
            <MainButton onClick={()=>{setIsOpen(true)}}>Editar</MainButton>
        )}
    </div>)
}