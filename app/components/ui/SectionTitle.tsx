interface SectionTitleProps{
    children:React.ReactNode
    variant?:string,
}


export function SectionTitle({children,variant="text-[18px]"}:SectionTitleProps){
    return(
        <div className={`text-left my-2 w-full text-[#FFFFFF] ${variant} font-bold capitalize`}>
            <h2>{children}</h2>
        </div>
    )
}