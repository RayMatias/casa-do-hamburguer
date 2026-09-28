"use client"

import { useState, ChangeEvent } from "react"
import { updateProfileImage } from "@/app/actions/upload-profile-image"
import Image from "next/image"

import { MainButton } from "../ui/MainButton"
export function EditProfileButton(){

    const [isOpen, setIsOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
        if (file) {
        setSelectedFile(file)
        setPreviewUrl(URL.createObjectURL(file))
        }
    }

    async function handleSave() {
        if (!selectedFile) return

        setLoading(true)

        try {
        const formData = new FormData()
        formData.append("file", selectedFile)

        await updateProfileImage(formData)
      
        setIsOpen(false)
        setSelectedFile(null)
        setPreviewUrl(null)
        } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error)
        } finally {
        setLoading(false)
        }
    }

    return(
        <div>
            <MainButton onClick={() => setIsOpen(true)} variant="third">Alterar Foto de Perfil</MainButton>

            {isOpen && (
                <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
                <div className="bg-[#0B0C0D] border border-[#FBA716] p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-bold text-white mb-4">Escolher foto do computador</h3>
                <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#FBA716] file:text-white hover:file:bg-[#FFB51B] cursor-pointer mb-4"
                />

                {previewUrl && (
                    <div className="mb-4 flex justify-center">
                        <Image
                        src={previewUrl}
                        alt="Prévia"
                        width={96}
                        height={96}
                        className="w-24 h-24 object-cover rounded-full border-2 border-[#FBA716]"
                        /></div>)}

                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={() => {
                        setIsOpen(false)
                        setSelectedFile(null)
                        setPreviewUrl(null)
                        }}
                        className="px-4 py-2 text-zinc-400 cursor-pointer hover:text-white">Cancelar</button>

                    <button
                        onClick={handleSave}
                        disabled={!selectedFile || loading}
                        className="px-4 py-2 bg-[#E5484D] cursor-pointer hover:bg-red-700 text-white rounded font-medium disabled:opacity-50">
                            {loading ? "Enviando..." : "Salvar Foto"}
                    </button>
                </div>
            </div>
        </div>)}
    </div>
    )
} 