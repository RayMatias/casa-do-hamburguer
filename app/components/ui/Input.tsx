interface InputProps{
    placeholder?:string,
    type?:"text"|"password"|"email"|"number"|"tel"
    id?:string,
    variant?:"primary"|"secondary"
    name?:string
    defaultValue?:string
    
}

const variantStyle = {
    primary: "ml-10", secondary: "ml-2"
}


export function Input({placeholder,type, id, variant="primary", name, defaultValue}:InputProps){
    return(
        <div className="w-full h-10 bg-[#0B0C0D] flex flex-row justify-center rounded-[10px] items-center relative border-2 border-[#454A50] flex-1">
            <input className={`${variantStyle[variant]} md:text-[15px] text-[14px] py-1 text-white outline-0 w-full h-auto focus-within:border-[#FFB000]`} defaultValue={defaultValue} type={type} placeholder={placeholder} id={id} name={name}
            />
        </div>
    )
}