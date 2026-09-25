interface ButtonProps{
    children:React.ReactNode,
    variant?:"primary"|"secondary"|"third",
    variantMargin?:"primary"|"secondary",
    type?:"submit"|"reset"|"button"
    size?:string
    padding?:string
}

const variantStyle = {
    primary: "bg-[#FFB000] text-black hover:bg-[#CC8B00] border-0",
    secondary: "bg-transparent border border-[#262626] text-white hover:bg-[#7575756b]",
    third:"bg-transparent border border-[#FFB000] text-[#FFB000] hover:bg-[#cc8b006b]"
}

const variantStyleMargin = {
    primary:"mt-0",
    secondary:"mt-3"
}

export function MainButton({children,variant="primary", variantMargin="primary", type="submit", size="text-2x1", padding="px-6"}:ButtonProps){
    return(
            <button type={type} className={`${size} ${variantStyle[variant]} ${variantStyleMargin[variantMargin]} p-2 ${padding} rounded-2xl md:text-[16px] cursor-pointer ] 
         transition-all duration-400 ease-in-out w-full flex flex-row gap-2 justify-center items-center border-2`}>{children}</button>
    )
}