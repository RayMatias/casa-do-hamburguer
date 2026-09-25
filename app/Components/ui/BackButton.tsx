import { ChevronLeft } from 'lucide-react'
import { MainButton } from './MainButton'

export function BackButton(){
    return(
        <div>
            <MainButton variant='secondary'><ChevronLeft></ChevronLeft>Voltar</MainButton>
        </div>
    )
}
