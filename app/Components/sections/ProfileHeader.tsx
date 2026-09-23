import { IconProfile } from "../ui/IconProfile"
import { MainButton } from "../ui/MainButton"
import { UserProfileInfo } from "../ui/UserProfileInfo"

export function ProfileHeader(){
    return(
        <div className="flex gap-2 w-full justify-center items-center">
            <IconProfile></IconProfile>
            <div className="flex flex-col gap-1">
                <UserProfileInfo email="raylamatias09@gmail.com">Rayla Matias</UserProfileInfo>
                <MainButton variant="third">Editar Perfil</MainButton>
            </div>
        </div>
    )
}