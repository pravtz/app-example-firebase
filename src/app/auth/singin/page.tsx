'use client'
import { Singin } from "@/components/Singin"
import { useUserAuth } from "@/hooks/useUserAuth"
import { useRouter } from "next/navigation"


export default function SinginPage() {
    const props = useUserAuth()
    const router = useRouter()
    
    const singin =  (full_name: string, email: string, pass: string) => {

        try {
             props?.createUserWithEmailAndPass(email, pass)
             router.push("/dashboard")
        } catch (error) {
            console.error(error)
        } 

    }

    return (
        <div>
            <Singin singin={singin} />
        </div>
    )
}