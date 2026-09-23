import { Hamburger, Popcorn, CupSoda, IceCream2} from "lucide-react";
import { CategoryCard } from "../ui/CategoryCard";
export function CategoriesSection(){
    return(
        <div className="flex w-full flex-1 gap-2 mt-3">
            <CategoryCard>
                <Hamburger className="text-[#FBA716] w-10 h-10"></Hamburger>
                <span className="text-[#B8BBC0] font-bold">Hambúrgueres</span>
            </CategoryCard>
            <CategoryCard>
                <Popcorn className="text-[#FBA716] w-10 h-10"></Popcorn>
                <span className="text-[#B8BBC0] font-bold">Porções</span>
            </CategoryCard>
            <CategoryCard>
                <CupSoda className="text-[#FBA716] w-10 h-10"></CupSoda>
                <span className="text-[#B8BBC0] font-bold">Bebidas</span>
            </CategoryCard>
            <CategoryCard>
                <IceCream2 className="text-[#FBA716] w-10 h-10"></IceCream2>
                <span className="text-[#B8BBC0] font-bold">Sobremesa</span>
            </CategoryCard>
        </div>
    )
}