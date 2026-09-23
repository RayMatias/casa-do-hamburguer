interface UserProfileInfoProps{
    children:React.ReactNode
    email:string
}


export function UserProfileInfo({children, email}:UserProfileInfoProps){
    return(
        <div className="flex flex-col items-start justify-center">
            <p className={`text-[16px] md:text-[18px] text-white`}>{children}</p>
            <p className={`text-[14px] md:text-[18px] text-[#777B80]`}>{email}</p>
        </div>
    )
}