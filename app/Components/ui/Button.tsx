interface ButtonProps{
    children:React.ReactNode
}

export function Button({children}:ButtonProps){
    return(
        <div className="text-2x1 text-white bg-[#d6b372] p-2 px-6 rounded md:text-2xl cursor-pointer
         hover:bg-[#a17d3a] transition-all duration-400 ease-in-out"><p>{children}</p></div>
    )
}