"use client"

import { Search } from "lucide-react";

interface SearchBarProps{
    value?:string
    onChage?:(value:string) => void
    placeholder?:string
}


export function SearchBar({value,onChage,placeholder="Buscar no cardápio"}:SearchBarProps){
    return(
        <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={value} onChange={(event) => onChage?.(event.target.value)} placeholder={placeholder} className="w-full pl-11 pr-4 py-2.5 bg-black/80 border border-[#2A2D30] rounded-[10px] text-sm text-white placeholder-[#FFFFFF] focus:outline-none focus:border-[#777B80] transition ease-in-out duration-300" />
        </div>
    )
}