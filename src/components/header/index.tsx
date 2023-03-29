"use client"
import { useColorModeToogle } from "@/hooks/useColorModeToogle"
import { useUserAuth } from "@/hooks/useUserAuth"
import Image from "next/image"
import Link from "next/link"
import ImageAvatar from 'public/user_default.png'
import {BsFillMoonFill, BsSunFill} from "react-icons/bs"

export const Header = () => {

    const {colorMode, colorModeToogle} = useColorModeToogle()

    const userAuth = useUserAuth()

    const isLoggedIn = userAuth?.isLogIn()
    

    return (
        <header>
            <div className=" bg-slate-50 dark:bg-fuchsia-300 flex justify-between items-center border-b h-20 p-3">
                <div><Link href='/'>Welcome</Link></div>
                <div className="">
                    <nav className="flex items-center gap-6">
                        <ul className="flex gap-3">
                            <li className={isLoggedIn ? "block" : "hidden"}><button type="button" onClick={() => userAuth?.signOutEmail()}>Sair</button></li>
                            <li className={!isLoggedIn ? "block" : "hidden"}><Link href="/auth">Login</Link></li>
                            <li className={!isLoggedIn ? "block" : "hidden"}><Link href="/auth/register">Cadastrar</Link></li>
                            <li><button onClick={colorModeToogle}>{colorMode && colorMode() ==="dark"? <BsFillMoonFill/>: <BsSunFill/>}</button></li>
                        </ul>
                        
                        <div className={isLoggedIn ? "block" : "hidden"}>
                            <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ImageAvatar} alt="image of the user" />
                        </div>
                    </nav>
                    <div></div>
                </div>
            </div>
        </header>
    )
}