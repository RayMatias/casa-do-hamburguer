"use client"

import { Input } from "../ui/Input"
import { Mail,KeyRound} from "lucide-react"
import { LoginFormOptions } from "./LoginFormOptions"
import { MainButton } from "../ui/MainButton"
import { ArrowRight } from "lucide-react"
import Form from "next/form"
import login from "@/app/actions/login"
import { useActionState } from "react";
import { ContainerError } from "../ui/FormAlerts";

export function FormLogin(){
    const [state,formAction,isPending] = useActionState(login, null)
    return(
        <div>
            {state?.error && <ContainerError>{state.error}</ContainerError>}
            <Form action={formAction} className="flex flex-col gap-3">
                <div className="flex flex-row relative items-center w-full">
                    <Mail className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                    <Input name="email" type="email" placeholder="E-mail"/>
                </div>
                <div className="flex flex-row relative items-center w-full">
                    <KeyRound className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                    <Input name="password" type="password" placeholder="Senha"/>
                </div>
                <div className="flex flex-col gap-3">
                    <LoginFormOptions/>
                    <MainButton variant="primary">
                        <span>Entrar</span>
                        <ArrowRight className="w-5 h-5 text-black" />
                    </MainButton>
                </div>
            </Form>
        </div>
        )
}