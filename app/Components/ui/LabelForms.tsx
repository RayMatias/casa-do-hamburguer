interface LabelProps{
    htmlFor:string,
    children:React.ReactNode
}


export function LabelForms ({htmlFor,children}:LabelProps){
    return(
        <label className="text-white text-[14px] flex gap-2 items-center mt-2 flex-1 w-full" htmlFor={htmlFor}>{children}</label>
    )
}