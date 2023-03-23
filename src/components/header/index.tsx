import { useUserAuth } from "@/hooks/useUserAuth"
import Image from "next/image"
import Link from "next/link"
import ImageAvatar from 'public/user_default.png'


export const Header = () => {
    
    const userAuth = useUserAuth()
    console.log("userAuth", !!userAuth?.getUser())

    return (
        <header>
            <div className=" bg-slate-50 flex justify-between items-center border-b h-20 p-3">
                <div><Link href='/'>Welcome</Link></div>
                <div className="">
                    <nav className="flex items-center gap-6">
                        <ul className="flex gap-3">
                            <li className={userAuth?.isLogIn ? "block" : "hidden"}><Link href="/auth">Sair</Link></li>
                            <li><Link href="/auth">Login</Link></li>
                            <li><Link href="/auth/singin">Cadastrar</Link></li>
                        </ul>
                        <div className={userAuth?.isLogIn ? "block" : "hidden"}>
                            <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ImageAvatar} alt="image of the user" />
                        </div>
                    </nav>
                    <div></div>
                </div>
            </div>
        </header>
    )
}