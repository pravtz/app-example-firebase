import { SocialMidia } from "./SocialMedia"

type ButtonIconType = {
    text: string,
    socialMidia: 'google' | "github" | "linkedin" | "facebook" | "twiter"

}



export const ButtonIcon = ({ text, socialMidia }: ButtonIconType) => {
    const sm = SocialMidia.filter((item) => item.name === "socialMidia")


    return (
        <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2" type="button" >

            {text}
        </button>
    )
}