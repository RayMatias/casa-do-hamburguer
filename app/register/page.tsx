import Image from "next/image"
import { GoogleButton } from "../components/ui/GoogleButton"
import { FormRegister } from "../components/sections/FormRegister"
import { ContainerTextForm } from "../components/sections/ContainerTextForm"

export default function Register(){
    return(
        <div className="relative grid grid-cols-12 w-full bg-[#050505] min-h-screen items-start">
            <section className="w-full col-start-1 col-end-13 md:col-start-6 md:col-end-13 md:sticky md:top-0 md:order-2 md:h-screen overflow-hidden">
                <Image src="/images/burger-house-mobile.png" 
                alt="Imagem de um Hamburguer" 
                width={1000} 
                height={600}
                priority
                className="w-full h-auto object-cover md:hidden"></Image>
                <Image 
                src="/images/burger-house-desktop-register.png" 
                alt="Imagem de um Hambúrguer" 
                width={1920} 
                height={1080}
                priority
                className="hidden md:block w-full h-auto object-cover"
                />
            </section>
            <section className="col-start-2 col-end-12 flex flex-col gap-2 h-auto md:col-end-6 border-[0.5px] rounded-2xl p-3 shadow-lg border-[#454A50] mb-7">
                <ContainerTextForm></ContainerTextForm>
                <FormRegister></FormRegister>
                <article className="flex items-center my-4 ">
                    <div className="flex-1 h-0.5 bg-[#262626]" />
                    <span className="px-3 text-[12px] text-[#B8BBC0] leading-none">ou</span>
                    <div className="flex-1 h-0.5 bg-[#262626]" />
                </article>
                <article>
                   <GoogleButton></GoogleButton>
                </article>
            </section>
        </div>
    )
}