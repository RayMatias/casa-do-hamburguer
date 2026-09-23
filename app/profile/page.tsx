import { HeaderHome } from "../components/sections/HeaderHome"
import { NavBar } from "../components/sections/NavBar" 
import { ProfileHeader } from "../components/sections/ProfileHeader"
import { SectionTitle } from "../components/ui/SectionTitle"
import { ProfileInfoRowList } from "../components/sections/ProfileInfoRowList"
import { UserAddressSection } from "../components/sections/UserAddressSection"

export default function OurMenu(){
    return(
        <div className="bg-[#050505] px-2 min-h-screen items-start md:grid md:grid-cols-12 md:px-0 ">
            <aside className="md:col-span-2 md:sticky md:h-screen md:top-0  md:block  md:inset-auto fixed bottom-0 inset-x-0 z-50">
                <NavBar></NavBar>
            </aside>
            <main className="w-full md:col-start-3 md:col-end-13 md:p-0 pb-40">
                <header className="w-full py-2 px-4 md:py-4 md:pt-10 md:pb-6">
                    <HeaderHome></HeaderHome>
                </header>
                <section className="w-full px-4 mt-4">
                    <ProfileHeader></ProfileHeader>
                </section>
                <section className="md:flex md:flex-1 md:w-full md:gap-3 md:p-4">
                    <article className="w-full px-4 py-4 mt-4 gap-4 flex rounded-[10px] flex-col border border-[#777B80]">
                        <SectionTitle variant="text-[22px]">Informações Pessoais</SectionTitle>
                        <ProfileInfoRowList></ProfileInfoRowList>
                    </article>
                    <article className="w-full px-4 py-4 mt-4 gap-4 flex rounded-[10px] flex-col border border-[#777B80]">
                        <SectionTitle variant="text-[22px]">Meus Endereços</SectionTitle>
                        <UserAddressSection street="José Candido do Nascimento" neighborhood="São Bernardo" postalCode="58865000" city="São Bento-PB"></UserAddressSection>
                    </article>
                </section>
            </main>
        </div>)
}