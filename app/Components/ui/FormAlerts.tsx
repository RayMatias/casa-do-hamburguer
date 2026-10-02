
interface AlertProps{
    children:React.ReactNode
}


export function ContainerError({children}:AlertProps){
    return(
        <div className="bg-[#2D0607] border-[#7F1D1D]  rounded-[10px] p-3 flex flex-col gap-2 my-2 mb-4">
            <p className="font-bold text-[#FCA5A5]">Error!</p>
            <p className="font-bold text-[#FECACA]">{children}</p>
        </div>
    )
}
export function ContainerSuccess({children}:AlertProps){
    return(
        <div className="bg-[#062D12] border-[#34D399]  rounded-[10px] p-3 flex flex-col gap-2 my-2 mb-4">
            <p className="font-bold text-[#86EFAC]">Sucesso!</p>
            <p className="font-bold text-[#BBF7D0]">{children}</p>
        </div>
    )
}