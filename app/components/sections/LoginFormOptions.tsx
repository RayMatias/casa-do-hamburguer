interface LoginFormOptions{
    defaultChecked?:boolean
}


export function LoginFormOptions({defaultChecked}:LoginFormOptions){
    return(
        <div className="flex flex-row items-center justify-between mt-2 w-full">
            <section className="flex flex-row items-center gap-1">
                <input defaultChecked={defaultChecked} type="checkbox" name="remember" id="remember-me" className="accent-[#FFB000] m-0 cursor-pointer md:w-4 md:h-3" />
                <label htmlFor="remember-me" className="text-[#B8BBC0] text-[10px] cursor-pointer select-none leading-none md:text-[12px]">Lembrar de mim</label>
            </section>
        </div>
    )
}