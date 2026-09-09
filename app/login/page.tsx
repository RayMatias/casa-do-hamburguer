import { ContainerTextLogin } from "../Components/sections/ContainerTextLogin"
import { FormLogin } from "../Components/sections/FormLogin"

export default function Login(){
    return(
        <div className="grid grid-cols-12 w-full bg-[#050505] min-h-screen content-start">
            <div className="col-start-2 col-end-11 flex flex-col gap-4 h-auto mb-4">
                <ContainerTextLogin/>
            </div>
            <div className="col-start-2 col-end-12 flex flex-col gap-4">
                <FormLogin></FormLogin> 
            </div>
            <div>
                
            </div>
        </div>
    )
}