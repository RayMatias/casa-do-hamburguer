import Form from "next/form"
import { handleGoogleLogin } from "@/app/actions/google_login_register"
import { MainButton } from "./MainButton"
import { GoogleIcon } from "./GoogleIcon" 

export function GoogleButton(){
    return(
        <Form action={handleGoogleLogin}>
            <MainButton variant="secondary">
                <GoogleIcon/>
                <span>Continuar com o Google</span>
            </MainButton>
        </Form>
    )
}