'use client'
import { Forgot } from "@/components/Forgot";

export default function ForgotPage() {

    const forgot = (email: string) => {
        console.log('email', email)

        return 0
    }

    return (
        <div>
            <Forgot forgot={forgot} />
        </div>
    )
}