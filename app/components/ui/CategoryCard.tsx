interface CategoryCardProps{
    children:React.ReactNode
    onClick?: () => void
}


export function CategoryCard({children, onClick}:CategoryCardProps){
    return(
        <button onClick={onClick} className="cursor-pointer w-full flex flex-col justify-center gap-1 items-center border-[#2A2D30] border rounded-lg text-[10px] p-2 hover:bg-[#fba71639] transition-all ease-in-out duration-600 ">
            {children}
        </button>
    )
}