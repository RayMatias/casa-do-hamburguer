import Image from "next/image"


export function ContainerTextForm(){
    return(
        <div className="w-full flex flex-col gap-2">
            <section className="flex w-full gap-6 items-end">
                <Image
                    src={"/images/Logo-burger-house.png"}
                    width={80}
                    height={60}
                    alt="Imagem da Logo do site da Hamburgueria"
                    priority
                ></Image>
                <h1 className="text-white capitalize font-bold text-[30px] md:text-[28px]">Criar Conta</h1>
            </section>
            <p className="text-[#B8BBC0] capitalize text-[11px] md:text-[15px]">Preencha os campos abaixo para se cadastrar e aprovietar nossas delícias!!</p>
        </div>
    )
}