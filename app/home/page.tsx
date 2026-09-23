import { HeaderHome } from "../components/sections/HeaderHome"
import { NavBar } from "../components/sections/NavBar" 
import Image from "next/image"
import { SectionTitle } from "../components/ui/SectionTitle"
import { CategoriesSection } from "../components/sections/CategoriesSection"
import { ProductCardSection } from "../components/sections/ProductCardSection"
export default function Home(){
    return(
        <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0 ">
            <aside className="md:col-span-2 md:sticky md:h-screen md:top-0  md:block  md:inset-auto fixed bottom-0 inset-x-0 z-50">
                <NavBar></NavBar>
            </aside>
            <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
                <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
                    <HeaderHome></HeaderHome>
                </header>
                <section className="relative w-full h-60 md:h-80 overflow-hidden border-[#2A2D30] border rounded-[10px] md:hidden">
                    <Image src="/images/img-home.png" 
                    alt="Imagem de um Hamburguer" 
                    fill
                    priority
                    className="object-cover"></Image>
                </section>
                <section className="md:w-full md:px-4">
                    <div className="relative h-60 md:h-90 overflow-x-hidden border-[#2A2D30] border rounded-[10px] hidden md:block">
                        <Image src="/images/img-home-desktop.png" 
                        alt="Imagem de um Hamburguer" 
                        fill
                        priority
                        className="object-cover"></Image>
                    </div >
                </section>
                <section className="w-full px-4 mt-4">
                    <SectionTitle>Nossas categorias</SectionTitle>
                    <CategoriesSection></CategoriesSection>
                    <SectionTitle>Destaques da casa</SectionTitle>
                    <ProductCardSection></ProductCardSection>
                </section>
            </main>
        </div>)
}