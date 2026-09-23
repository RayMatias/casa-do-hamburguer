import {Handshake} from 'lucide-react'


interface UserGreentingProps{
    name?:string|null
}


export function UserGreenting({name}:UserGreentingProps){
    const firstName = name?.split(" ")[0] ?? "por aqui";
    return(
        <div className='flex gap-2 items-center bg-black'>
            <div>
                <Handshake className='text-[#FBA716] w-10 h-10'></Handshake>
            </div>
            <div className="flex flex-col justify-center items-start">
                <h1 className='font-bold text-[#FFFFFF] text-[19px]'>Olá, {firstName}!</h1>
                <p className='text-[#777B80]'>Que bom te ver por aqui</p>
            </div>
        </div>
    )
}