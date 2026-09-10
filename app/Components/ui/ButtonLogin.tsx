interface ButtonProps{
    children:React.ReactNode,
    variant?:"primary"|"secondary"
}

const variantStyle = {
    primary: "bg-[#FFB000] text-black hover:bg-[#CC8B00]",
    secondary: "bg-transparent border border-[#262626] text-white hover:bg-[#121212]",
}

export function ButtonLogin({children,variant="primary"}:ButtonProps){
    return(
            <button type="submit" className={`text-2x1 ${variantStyle[variant]}  p-2 px-6 rounded-2xl md:text-[16px] cursor-pointer
         transition-all duration-400 ease-in-out w-full flex flex-row gap-2 justify-center items-center`}>{children}</button>
    )
}