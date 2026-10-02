import { ProductCreationContainer } from "./ProductCreationContainer"

import { SectionTitle } from "@/app/components/ui/SectionTitle"


export function MenuHeader(){
    return(
        <div className="flex flex-1 md:flex-row flex-col w-full items-center justify-center md:justify-between">
            <div className="flex flex-col flex-1 justify-items-center">  
                <SectionTitle variant="text-[30px] text-center">Gerenciar Cardápio</SectionTitle>
                <p className="text-[#777B80] indent-3 md:text-[22px] mb-2">Aqui está a lista de todos os seus itens e a opção de adicionar novos</p>
            </div>
            <ProductCreationContainer></ProductCreationContainer>
        </div>
    )
}