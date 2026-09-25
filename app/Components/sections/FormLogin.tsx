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

interface FormLoginProps {
  initialEmail?: string
}

export function FormLogin({initialEmail=""}:FormLoginProps){    

    const [state,formAction,isPending] = useActionState(login, null)
    return(
        <div>
            {state?.error && <ContainerError>{state.error}</ContainerError>}
            <Form action={formAction} className="flex flex-col gap-3">
                <section className="flex flex-row relative items-center w-full">
                    <Mail className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                    <Input defaultValue={initialEmail} name="email" type="email" placeholder="E-mail"/>
                </section>
                <section className="flex flex-row relative items-center w-full">
                    <KeyRound className=" left-3 w-5 h-5 text-[#B8BBC0] absolute z-10"/>
                    <Input name="password" type="password" placeholder="Senha"/>
                </section>
                <section className="flex flex-col gap-3">
                    <LoginFormOptions defaultChecked={!!initialEmail}/>
                    <MainButton variant="primary">
                        <span>Entrar</span>
                        <ArrowRight className="w-5 h-5 text-black" />
                    </MainButton>
                </section>
            </Form>
        </div>
        )
}