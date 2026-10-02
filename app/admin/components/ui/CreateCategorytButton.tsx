"use client"
import { MainButton } from "@/app/Components/ui/MainButton";
import { useState } from "react";

import { createCategory } from "../../actions/createCategory";


export function CreateCategorytButton(){
    const [isOpen, setIsOpen] = useState(false)     
    const [loading, setLoading] = useState(false)     
    const [error, setError] = useState<string | null>(null)   
    

    async function  handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const form = event.currentTarget
        const formData = new FormData(form);
        const result = await createCategory(null,formData);

        setLoading(false);

        if(result?.error){
            setError(result.error);
        }else{
            setIsOpen(false);
            form.reset();
        }


    }
    
    return(
        <div>
            {isOpen &&(
                <div className="min-h-screen flex items-center justify-center bg-transparent p-4 fixed inset-0 z-50  backdrop-blur-sm ">
                    <form onSubmit={handleSubmit} className="p-4 border bg-[#050505] border-[#FFB000] rounded-xl flex flex-col gap-3 b w-full max-w-md shadow-lg space-y-4">
                        <div className="flex justify-between items-center border-b border-[#262626] pb-2">
                            <h3 className="text-white font-semibold text-sm">Adicionar Nova Categoria</h3>
                        </div>
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                            name="name"
                            placeholder="Nome Da Categoria"
                            required
                            className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                            />
                            <input
                            name="slug"
                            placeholder="Nome Para A Base De Dados"
                            required
                            className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                            />
                        </div>
                        <div className="flex justify-end gap-2 mt-2 w-full">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-xs text-white bg-[#E5484D] cursor-pointer hover:bg-red-700 rounded-2xl">Cancelar</button>
                            <MainButton padding="px-4 py-2" size="text-[12px]" variant="third" disabled={loading}>
                                {loading ? "A guardar..." : "Salvar Categoria"}
                            </MainButton>
                        </div>
                    </form>
                </div>
                )
            }
            {!isOpen &&(
                <MainButton onClick={()=>{setIsOpen(true)}} size="text-[12px]" variant="primary">+ Cadastrar Nova Categoria</MainButton>
            )}
        </div>
    )
}