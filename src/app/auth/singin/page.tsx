'use client'
import { Singin } from "@/components/Singin"


export default function SinginPage() {

    const singin = (full_name: string, email: string, pass: string) => {
        console.log('full_name', full_name)
        console.log('email', email)
        console.log('pass', pass)
        return 0
    }
    return (
        <div>
            <Singin singin={singin} />
        </div>
    )
}