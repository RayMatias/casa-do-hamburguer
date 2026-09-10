export function LoginFormOptions(){
    return(
        <div className="flex flex-row items-center justify-between mt-2 w-full">
            <div className="flex flex-row items-center gap-1">
                <input type="checkbox" id="remember-me" className="accent-[#FFB000] m-0 cursor-pointer md:w-4 md:h-3" />
                <label htmlFor="remember-me" className="text-[#B8BBC0] text-[10px] cursor-pointer select-none leading-none md:text-[12px]">Lembrar de mim</label>
            </div>
            <a className="cursor-pointer text-[#FFB000] text-[10px] hover:underline md:text-[12px]" href="#">Esqueceu sua senha?</a>
        </div>
    )
}