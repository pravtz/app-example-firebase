'use client'
import { Login } from "@/components/login";

export default function Home() {
    const login = (email: string, pass: string) => {
        console.log('email', email)
        console.log('pass', pass)
        return 0
    }

    return (
        <main className="h-full">
            <Login login={login} />
        </main>
    )
}