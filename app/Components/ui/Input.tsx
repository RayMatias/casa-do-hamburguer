interface InputProps{
    placeholder?:string,
    type?:"text"|"password"|"email"|"number"|"tel"
}


export function Input({placeholder,type}:InputProps){
    return(
        <div className="md:w-[21.8em] w-full h-10 bg-[#0B0C0D] flex flex-row justify-center rounded-[10px] items-center relative   border-2 border-[#454A50] flex-1">
            <input className="ml-10 text-[11px] py-1 text-white outline-0 w-full h-auto focus-within:border-[#FFB000]" type={type} placeholder={placeholder}
            />
        </div>
    )
}