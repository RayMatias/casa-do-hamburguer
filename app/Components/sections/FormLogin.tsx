import { Input } from "../ui/Input"
import { Mail,KeyRound} from "lucide-react"
import { LoginFormOptions } from "./LoginFormOptions"
import { ButtonLogin } from "../ui/ButtonLogin"
import { ArrowRight } from "lucide-react";

export function FormLogin(){
    return(
        <div className="flex flex-col gap-3">
            <div className="flex flex-row relative items-center w-full">
                <Mail className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                <Input type="email" placeholder="E-mail ou Cpf"/>
            </div>
            <div className="flex flex-row relative items-center w-full">
                <KeyRound className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                <Input type="password" placeholder="Senha"/>
            </div>
            <div className="flex flex-col gap-3">
                <LoginFormOptions/>
                <ButtonLogin variant="primary">
                    <span>Entrar</span>
                    <ArrowRight className="w-5 h-5 text-black" />
                </ButtonLogin>
            </div>
            
        </div>
    )
}