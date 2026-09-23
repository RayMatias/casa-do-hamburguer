import { ContainerTextLogin } from "../components/sections/ContainerTextLogin"
import { FormLogin } from "../components/sections/FormLogin"
import Image from "next/image"
import { GoogleButton } from "../components/ui/GoogleButton"

export default function Login(){
    return(
        <div className="relative grid grid-cols-12 w-full bg-[#050505] min-h-screen items-start">
            <section className="w-ful col-start-1 col-end-13 md:col-start-6 md:col-end-13 md:sticky md:top-0 md:order-2 md:h-screen overflow-hidden">
                <Image src="/images/burger-house-mobile.png" 
                alt="Imagem de um Hamburguer" 
                width={1000} 
                height={600}
                priority
                className="w-full h-auto object-cover md:hidden"></Image>
                <Image 
                src="/images/burger-house-desktop.png" 
                alt="Imagem de um Hambúrguer" 
                width={1920} 
                height={1080}
                priority
                className="hidden md:block w-full h-auto object-cover"
                />
            </section>
            <section className="col-start-2 col-end-12 flex flex-col gap-4 h-auto md:col-end-5">
                <article className="w-full">
                    <ContainerTextLogin/>
                </article>
                <article className="w-full">
                    <FormLogin></FormLogin> 
                </article>
                <article className="flex items-center my-4 ">
                    <div className="flex-1 h-0.5 bg-[#262626]" />
                    <span className="px-3 text-[12px] text-[#B8BBC0] leading-none">ou</span>
                    <div className="flex-1 h-0.5 bg-[#262626]" />
                </article>
                <article>
                    <GoogleButton></GoogleButton>
                </article>
                <article className="w-full text-center mb-5">
                    <p className="text-[#B8BBC0] text-[11px]">Ainda não tem conta?<a href="#" className="text-[#FFB000] hover:underline ml-3">Cadastre-se</a></p>
                </article>
            </section>
        </div>
    )
}