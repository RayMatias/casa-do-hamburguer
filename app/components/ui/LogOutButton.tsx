import { logoutAction } from "@/app/actions/logout/logoutAction";
import Form from "next/form"
import { LogOut } from "lucide-react";

export function LogOutButton(){
    return(
        <button type="submit" className="bg-transparent m-0 p-0">
            <Form action={logoutAction} className="flex gap-4 m-0 p-0">
                <button type="submit"></button>
                <LogOut></LogOut>Sair
            </Form>
        </button>
    )
}