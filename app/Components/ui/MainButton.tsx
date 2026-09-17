interface ButtonProps{
    children:React.ReactNode,
    variant?:"primary"|"secondary",
    variantMargin?:"primary"|"secondary",
    type?:"submit"|"reset"|"button"
}

const variantStyle = {
    primary: "bg-[#FFB000] text-black hover:bg-[#CC8B00]",
    secondary: "bg-transparent border border-[#262626] text-white hover:bg-[#121212]",
}

const variantStyleMargin = {
    primary:"mt-0",
    secondary:"mt-3"
}

export function MainButton({children,variant="primary", variantMargin="primary", type="submit"}:ButtonProps){
    return(
            <button type={type} className={`text-2x1 ${variantStyle[variant]} ${variantStyleMargin[variantMargin]} p-2 px-6 rounded-2xl md:text-[16px] cursor-pointer
         transition-all duration-400 ease-in-out w-full flex flex-row gap-2 justify-center items-center border-2`}>{children}</button>
    )
}