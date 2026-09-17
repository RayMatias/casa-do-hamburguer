"use client"

import { LabelForms } from "../ui/LabelForms";
import { Input } from "../ui/Input";
import { User,Mail,Phone,Lock,MapPin,Navigation,Landmark,Flag,ArrowRight} from "lucide-react";
import { MainButton } from "../ui/MainButton";
import Form from "next/form";
import { registerUser } from "@/app/actions/register"; 
import { useActionState } from "react";
import { ContainerError, ContainerSuccess } from "../ui/FormAlerts";

export function FormRegister(){
    const [state,formAction,isPending] = useActionState(registerUser, null)
    return(
        <div>
            {state?.error && <ContainerError>{state.error}</ContainerError>}
            {state?.success && <ContainerSuccess>{state.success}</ContainerSuccess>}
            <Form action={formAction} className="w-full flex-1">
                <div className="w-full flex gap-1 flex-col flex-1">
                    <LabelForms htmlFor="name">
                        <User className="w-4 h-4"></User>
                        Nome Completo</LabelForms>
                    <Input name="nameUser" id="name" type="text" placeholder="Digite seu nome completo" variant="secondary"></Input>
                    
                    <LabelForms htmlFor="email">
                        <Mail className="w-4 h-4"></Mail>
                        E-mail</LabelForms>
                    <Input name="emailUser" id="email" type="email" placeholder="Digite seu email" variant="secondary"></Input>

                    <LabelForms htmlFor="phone">
                        <Phone className="w-4 h-4"></Phone>
                        Telefone</LabelForms>
                    <Input name="phoneUser" id="phone" type="tel" placeholder="Digite seu nome completo" variant="secondary"></Input>

                    <LabelForms htmlFor="cep">
                        <MapPin className="w-4 h-4"></MapPin>
                        CEP</LabelForms>
                    <Input name="cepUser" id="cep" type="text" placeholder="Digite seu CEP" variant="secondary"></Input>

                    <LabelForms htmlFor="street">
                        <Navigation className="w-4 h-4"></Navigation>
                        Rua / Logradouro</LabelForms>
                    <Input name="streetUser" id="street" type="text" placeholder="Digite sua rua / logradouro" variant="secondary"></Input>

                    <LabelForms htmlFor="neighbourhood">
                        <Landmark className="w-4 h-4"></Landmark>
                        Bairro</LabelForms>
                    <Input name="neighbourhoodUser" id="neighbourhood" type="text" placeholder="Digite seu bairro" variant="secondary"></Input>

                    <LabelForms htmlFor="pointOfReference">
                        <Flag className="w-4 h-4"></Flag>
                        Ponto de Referência</LabelForms>
                    <Input name="PointOfReferenceUser" id="PointOfReference" type="text" placeholder="Digite um ponto de referência" variant="secondary"></Input>

                    <LabelForms htmlFor="password">
                        <Lock className="w-4 h-4"></Lock>
                        Senha</LabelForms>
                    <Input name="passwordUser" id="password" type="password" placeholder="Digite sua senha" variant="secondary"></Input>

                    <LabelForms htmlFor="confirmPassword">
                        <Lock className="w-4 h-4"></Lock>
                        Confirmar senha</LabelForms>
                    <Input name="confirmPasswordUser" id="ConfirmPassword" type="password" placeholder="Confirme sua senha" variant="secondary"></Input>

                    <MainButton variant="primary" variantMargin="secondary">
                        <span>Cadastrar</span>
                        <ArrowRight className="w-5 h-5 text-black" />
                    </MainButton>
                </div>
            </Form>
        </div>
    )
}