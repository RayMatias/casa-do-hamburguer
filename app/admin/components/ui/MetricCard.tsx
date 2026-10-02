interface MetricCardProps{
    name:string
    children:React.ReactNode
    value:string | number
}



export function MetricCard({name,children,value}:MetricCardProps){
    return(
        <div className="bg-[#101112] flex-1 w-full p-4 flex flex-row items-center justify-start gap-3 rounded-[10px] border border-[#FBA716]">
            {children}
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="md:text-[18px] text-[14px] text-[#777B80] text-center">{name}</p>
                <p className="md:text-[24px] text-[20px]">{value}</p>
            </div>
        </div>
    )
}