import { LabelForms } from "../ui/LabelForms"
import { Input } from "../ui/Input"
import { User,Mail,Phone,Lock,MapPin,Navigation,Landmark,Flag,ArrowRight} from "lucide-react";
import { MainButton } from "../ui/MainButton";

export function FormRegister(){
    return(
        <form action={""} className="w-full flex-1">
            <div className="w-full flex gap-1 flex-col flex-1">
                <LabelForms htmlFor="name">
                    <User className="w-4 h-4"></User>
                    Nome Completo</LabelForms>
                <Input id="name" type="text" placeholder="Digite seu nome completo" variant="secondary"></Input>
                
                <LabelForms htmlFor="email">
                    <Mail className="w-4 h-4"></Mail>
                    E-mail</LabelForms>
                <Input id="email" type="email" placeholder="Digite seu email" variant="secondary"></Input>

                <LabelForms htmlFor="phone">
                    <Phone className="w-4 h-4"></Phone>
                    Telefone</LabelForms>
                <Input id="phone" type="tel" placeholder="Digite seu nome completo" variant="secondary"></Input>

                <LabelForms htmlFor="cep">
                    <MapPin className="w-4 h-4"></MapPin>
                    CEP</LabelForms>
                <Input id="cep" type="text" placeholder="Digite seu CEP" variant="secondary"></Input>

                <LabelForms htmlFor="street">
                    <Navigation className="w-4 h-4"></Navigation>
                    Rua / Logradouro</LabelForms>
                <Input id="street" type="text" placeholder="Digite sua rua / logradouro" variant="secondary"></Input>

                <LabelForms htmlFor="neighbourhood">
                    <Landmark className="w-4 h-4"></Landmark>
                    Bairro</LabelForms>
                <Input id="neighbourhood" type="text" placeholder="Digite seu bairro" variant="secondary"></Input>

                <LabelForms htmlFor="PointOfReference">
                    <Flag className="w-4 h-4"></Flag>
                    Ponto de Referência</LabelForms>
                <Input id="PointOfReference" type="text" placeholder="Digite um ponto de referência" variant="secondary"></Input>

                <LabelForms htmlFor="password">
                    <Lock className="w-4 h-4"></Lock>
                    Senha</LabelForms>
                <Input id="password" type="text" placeholder="Digite sua senha" variant="secondary"></Input>

                <LabelForms htmlFor="ConfirmPassword">
                    <Lock className="w-4 h-4"></Lock>
                    Confirmar senha</LabelForms>
                <Input id="ConfirmPassword" type="text" placeholder="Confirme sua senha" variant="secondary"></Input>

                 <MainButton variant="primary" variantMargin="secondary">
                    <span>Cadastrar</span>
                    <ArrowRight className="w-5 h-5 text-black" />
                </MainButton>
            </div>
        </form>
    )
}