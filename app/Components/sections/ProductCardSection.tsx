import { ProductCard } from "../ui/ProductCard"

export function ProductCardSection(){
    return(
        <div className="md:flex-row mt-3 w-full flex flex-col flex-1 gap-4">
            <ProductCard imageUrl="/images/x-frango.jpg"
            name="X-Frango" description="Pão de brioche tostado, suculento filé de frango marinado, queijo derretido, coleslaw caseira de repolho roxo, picles artesanais e coentro fresco, com o nosso molho especial." price={49.90}></ProductCard>
            <ProductCard imageUrl="/images/x-calabresa.jpg"
            name="X-Calabresa" description="Pão de brioche tostado, fatias de calabresa grelhada acebolada, queijo coalho derretido e gratinado, cebola roxa caramelizada, rúcula fresca e o nosso molho especial." price={49.90}></ProductCard>
        </div>
    )
}