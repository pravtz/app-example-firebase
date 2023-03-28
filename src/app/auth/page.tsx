'use client'
import { Login } from "@/components/login";
import { useUserAuth } from "@/hooks/useUserAuth";
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()
    const props = useUserAuth()


    const login = (email: string, pass: string) => {
        try {
            props?.signInEmail(email, pass)
            const user = props?.user
            user && router.push("/dashboard")
        } catch (error) {
            console.error(error)
        }
        return 0
    }


    return (
        <main className="h-full">
            <Login login={login} />
        </main>
    )
}