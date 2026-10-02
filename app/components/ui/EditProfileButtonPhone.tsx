"use client"

import { MainButton } from "./MainButton"
import { updatePhone } from "@/app/actions/update-phone"
import { useState } from "react"

interface EditProfileButtonPhoneProps{
    initialPhone?:string | null 

}

export function EditProfileButtonPhone({ initialPhone = "" }: EditProfileButtonPhoneProps){
    const [isOpen, setIsOpen] = useState(false)
    const [phone, setPhone] = useState(initialPhone || "")
    const [loading, setLoading] = useState(false)

    async function handleSave() {
        setLoading(true)
        try {
            await updatePhone(phone)
            setIsOpen(false) 
        } catch (error) {
            console.error("Erro ao atualizar telefone:", error)
        } finally {
            setLoading(false)
        }}

    return(
        <div>
           <MainButton onClick={()=>setIsOpen(true)} size="text-[10px]" variant="third">Editar</MainButton>
           {isOpen && (
                <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
                <div className="bg-[#0B0C0D] border border-[#FBA716] p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-bold text-white mb-4">Editar Telefone</h3>

                <div className="flex flex-col gap-2 mb-6">
                <label className="text-xs text-zinc-400">Número de telefone</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (xx)xxxxx-xxxx"
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-[#FFB000]"
                />
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-xs text-white bg-[#E5484D] cursor-pointer hover:bg-red-700 rounded-2xl"
                        >
                        Cancelar
                        </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={loading}
                        className="px-5 py-2 bg-[#FFB000] hover:bg-[#CC8B00] text-black font-semibold rounded-xl disabled:opacity-50 transition cursor-pointer">
                        {loading ? "Salvando..." : "Salvar"}
                    </button>
                </div>
                </div>
                </div>)}
        </div>
)}