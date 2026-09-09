export function LoginFormOptions(){
    return(
        <div className="flex flex-row items-center justify-between mt-2 w-full">
            <div className="flex flex-row items-center gap-1">
                <input type="checkbox" id="remember-me" className="accent-[#FFB000] m-0 cursor-pointer" />
                <label htmlFor="remember-me" className="text-[#B8BBC0] text-[10px] cursor-pointer">Lembrar de mim</label>
            </div>
            <div className="">
                <a className="cursor-pointer text-[#FFB000] text-[10px]" href="#">Esqueceu sua senha?</a>
            </div>
        </div>
    )
}