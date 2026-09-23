import { UserRound} from "lucide-react"

export function IconProfile(){
    return(
        <div className={`w-28 h-28 rounded-[60px] border border-white relative flex justify-center items-center`}>
            <UserRound className={`w-20 h-20 text-[#FFB000] absolute`}></UserRound>
        </div>
    )
}