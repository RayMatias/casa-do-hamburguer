"use client"

import { useState } from "react";
import { MainButton } from "../ui/MainButton";
import type { Address } from "@prisma/client";
import { updateAddress } from "@/app/actions/updateAddress";

export function EditAddressModal({ address }: { address: Address }){

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const result = await updateAddress(address.id, formData);

        setLoading(false);

        if (!result?.error) {
            setIsOpen(false);
        }
    }

    return(
        <>
            <MainButton padding="px-6" size="text-[10px]" variant="third" onClick={()=>setIsOpen(true)}>Editar</MainButton>
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <form onSubmit={handleSubmit} className="p-6 border border-[#FBA716] rounded-xl flex flex-col gap-4 bg-[#0a0a0a] w-full max-w-lg">
                        <div className="flex justify-between items-center border-b border-[#262626] pb-3">
                            <h3 className="text-white font-bold text-base">Editar Endereço</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input name="zipCode" defaultValue={address.zipCode} placeholder="CEP" required className="p-2.5 bg-[#171717] border border-[#262626] rounded text-white text-sm" />
                            <input name="city" defaultValue={address.city} placeholder="Cidade" required className="p-2.5 bg-[#171717] border border-[#262626] rounded text-white text-sm" />
                            <input name="street" defaultValue={address.street} placeholder="Rua / Logradouro" required className="p-2.5 bg-[#171717] border border-[#262626] rounded text-white text-sm md:col-span-2" />
                            <input name="neighborhood" defaultValue={address.neighborhood} placeholder="Bairro" required className="p-2.5 bg-[#171717] border border-[#262626] rounded text-white text-sm" />
                            <input name="reference" defaultValue={address.reference || ""} placeholder="Ponto de Referência (Opcional)" className="p-2.5 bg-[#171717] border border-[#262626] rounded text-white text-sm" />
                        </div>

                        <div className="flex justify-end gap-3 mt-2">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-xs text-white bg-[#E5484D] cursor-pointer hover:bg-red-700 rounded-2xl">
                                Cancelar
                            </button>
                            <MainButton padding="px-5 py-2" size="text-[12px]" variant="third" disabled={loading}>
                                {loading ? "Salvando..." : "Atualizar Endereço"}
                            </MainButton>
                        </div>
                    </form>
                </div>)}
        </>
    )
}