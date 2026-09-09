import { Input } from "../ui/Input"
import { Mail,KeyRound} from "lucide-react"
import { LoginFormOptions } from "./LoginFormOptions"

export function FormLogin(){
    return(
        <div className="flex flex-col gap-3">
            <div className="flex flex-row relative items-center">
                <Mail className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                <Input type="email" placeholder="E-mail ou Cpf"/>
            </div>
            <div className="flex flex-row relative items-center">
                <KeyRound className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                <Input type="password" placeholder="Senha"/>
            </div>
            <div>
                <LoginFormOptions/>
            </div>
            
        </div>
    )
}