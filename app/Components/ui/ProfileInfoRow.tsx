import { MainButton } from "../ui/MainButton"

interface ProfileInfoRowProps{
    label:string
    value:string
    children:React.ReactNode
    variant?:"on"|"off"
}

const variantStyleEdit = {
    on:"",off:"hidden"
}

export function ProfileInfoRow({label,value,children, variant="off"}:ProfileInfoRowProps){
    return(
        <div className="flex items-center gap-2 justify-center w-full">
            {children}
            <div className="flex flex-col items-start justify-center w-full">
                <p className="text-white text-[14px] md:text-[20px] font-bold">{label}</p>
                <p className="text-[#777B80] text-[12px] md:text-[16px]">{value}</p>
            </div>
            <div className={`${variantStyleEdit[variant]} `}>
                <MainButton size="text-[10px]" variant="third">Editar</MainButton>
            </div>
        </div>
    )
}