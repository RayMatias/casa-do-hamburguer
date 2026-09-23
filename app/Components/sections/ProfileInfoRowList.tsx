import { User, Mail, Phone, MapPin } from "lucide-react"
import { ProfileInfoRow } from "../ui/ProfileInfoRow"

export function ProfileInfoRowList(){
    return(
        <div className="w-full flex flex-col gap-5">
            <ProfileInfoRow label="Nome" value="Rayla Matias">
               <User className="text-[#777B80] w-8 h-8"></User>
            </ProfileInfoRow>
            <ProfileInfoRow label="Email" value="raylamatias09@gmail">
               <Mail className="text-[#777B80] w-8 h-8"></Mail>
            </ProfileInfoRow>
            <ProfileInfoRow variant="on"  label="telefone" value="81-2231-3213">
               <Phone className="text-[#777B80] w-8 h-8"></Phone>
            </ProfileInfoRow>
            <ProfileInfoRow variant="on" label="Endereço" value="rua.....">
               <MapPin className="text-[#777B80] w-8 h-8"></MapPin>
            </ProfileInfoRow>
        </div>
    )
}