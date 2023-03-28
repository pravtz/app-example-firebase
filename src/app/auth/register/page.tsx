'use client'
import { Register } from "@/components/Register"
import { useUserAuth } from "@/hooks/useUserAuth"


export default function SinginPage() {
    const props = useUserAuth()


    const register = (full_name: string, email: string, pass: string) => {

        try {
            props?.createUserWithEmailAndPass(full_name, email, pass)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <Register DataRegister={register} />
        </div>
    )
}