'use client'
import { Register } from "@/components/Register"
import { useUserAuth } from "@/hooks/useUserAuth"
import { settigsPlataform } from "@/config"

export default function SinginPage() {
    const props = useUserAuth()


    const register = (full_name: string, email: string, pass: string) => {
        try {
            props?.createUserWithEmailAndPass(full_name, email, pass)
        } catch (error) {
            console.error(error)
        }
    }
    const isShowRegister = settigsPlataform.screen.isRegister
    console.log("settigsPlataform.screen.isRegister",settigsPlataform.screen.isRegister)
    return (

        <div>
            { isShowRegister
                ? <Register DataRegister={register} />
                : <><h2>We are not registering users at the moment.</h2></>
            }
            
        </div>
    )
}