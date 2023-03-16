import Image from "next/image"
import Link from "next/link"
import ImageAvatar from 'public/user_default.png'

export const Header = () => {
    return (
        <header>
            <div className=" bg-slate-50 flex justify-between items-center border-b h-20 p-3">
                <div><Link href='/'>Welcome</Link></div>
                <div className="">
                    <nav className="flex items-center gap-6">
                        <ul className="flex gap-3">
                            <li><Link href="/auth?login">Login</Link></li>
                            <li><Link href="/auth?singin">SingIn</Link></li>
                        </ul>
                        <div>
                            <Image className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={ImageAvatar} alt="image of the user" />
                        </div>
                    </nav>
                    <div></div>
                </div>
            </div>
        </header>
    )
}