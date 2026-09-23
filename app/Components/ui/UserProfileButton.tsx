import {UserCircle} from "lucide-react";

export function UserProfileButton(){
    return(
       <button>
            <UserCircle className="text-[#FFFFFF] w-8 h-8  hover:text-[#FBA716] cursor-pointer transition ease-in-out duration-500"></UserCircle>
       </button>
    )
}