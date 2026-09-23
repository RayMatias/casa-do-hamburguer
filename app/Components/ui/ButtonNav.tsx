
interface ButtonNavProps{
    children:React.ReactNode
    type?:"submit"|"reset"|"button"
}


export function ButtonNav({children,type="button"}:ButtonNavProps){
    return(
        <button type={type} className="text-[#FFFFFF] md:text-[20px] flex-1 text-[10px] flex flex-col md:flex md:flex-row gap-4 md:justify-start justify-center items-center hover:text-[#FBA716] hover:bg-[#fba71643] transition-all ease-in-out duration-700 py-3 pl-2 hover:rounded-[10px] cursor-pointer">
            {children}
        </button>
    )
}