"use client";

import {MapPin} from "lucide-react"
import { RemoveButtonAddresses } from "../ui/RemoveButtonAddresses";
import { MainButton } from "../ui/MainButton";
import { EditAddressModal } from "../ui/EditAddressModal";


import { addAddress } from "@/app/actions/addAddress";
import { Address } from "@prisma/client";
import { useState } from "react";

interface UserAddressSectionProps{
    initialAddresses?: Address[]
}

export function UserAddressSection({initialAddresses = []}:UserAddressSectionProps){

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await addAddress(null, formData);

        setLoading(false);

        if (result?.error) {
        setError(result.error);
        } else {
        setIsOpen(false);
        (event.target as HTMLFormElement).reset();
        }
    }

    return(
        <div>
            {isOpen && (
                <form
                        onSubmit={handleSubmit}
                        className="p-4 border border-[#FFB000] rounded-xl flex flex-col gap-3 bg-[#0a0a0a]">
                    <div className="flex justify-between items-center border-b border-[#262626] pb-2">
                        <h3 className="text-white font-semibold text-sm">Adicionar Novo Endereço</h3>
                    </div>
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                        name="zipCode"
                        placeholder="CEP"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                        <input
                        name="city"
                        placeholder="Cidade"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                        <input
                        name="street"
                        placeholder="Rua / Logradouro"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716] md:col-span-2"
                        />
                        <input
                        name="neighborhood"
                        placeholder="Bairro"
                        required
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                        <input
                        name="reference"
                        placeholder="Ponto de Referência (Opcional)"
                        className="p-2 bg-[#171717] border border-[#262626] rounded text-white text-sm focus:outline-none focus:border-[#FBA716]"
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-xs text-white bg-[#E5484D] cursor-pointer hover:bg-red-700 rounded-2xl"
                        >
                        Cancelar
                        </button>
                        <MainButton padding="px-4 py-2" size="text-[12px]" variant="third" disabled={loading}>
                            {loading ? "A guardar..." : "Salvar Endereço"}
                        </MainButton>
                    </div>
                </form>
            )}
            {initialAddresses.map((address) => (
                <div key={address.id} className="flex flex-1 justify-between items-center">
                    <div className="flex gap-4 flex-1 items-center">
                        <MapPin className="text-[#FBA716] w-20 h-20"></MapPin>
                        <div className="flex flex-col items-start justify-center w-full my-3">
                            <p className="text-white text-[14px] md:text-[18px] font-bold">{address.street}</p>
                            <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.neighborhood}</p>
                            <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.city}</p>
                            <p className="text-[#777B80] text-[12px] md:text-[14px]">{address.zipCode}</p>
                            <p className="text-[#777B80] text-[12px] md:text-[12px]">{address.reference}</p>
                        </div>  
                    </div>
                    <div className="md:flex md:gap-2 md:flex-row flex flex-col gap-3 shrink-0">
                        <RemoveButtonAddresses addressId={address.id}></RemoveButtonAddresses>
                        <EditAddressModal address={address}></EditAddressModal>
                    </div>
                </div>))}
                    {!isOpen && (
                        <div onClick={() => setIsOpen(true)}>
                            <MainButton size="text-[12px]" variant="third">+ Adicionar Novo Endereço</MainButton>
                        </div>
                    )}
        </div>)}