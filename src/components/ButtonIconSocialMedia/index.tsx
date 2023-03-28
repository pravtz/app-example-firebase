'use client'
import { IconBase } from "react-icons"
import { SocialMidia } from "./SocialMedia"


type ButtonIconType = {
    text?: string,
    socialMidiaType: 'google' | "github" | "linkedin" | "facebook" | "twitter"

}



export const ButtonIconSocialMedia = ({ text, socialMidiaType }: ButtonIconType) => {


    const textButton = !!text ? text : `Sing in with ${socialMidiaType}`

    const socialMidia = SocialMidia.find((item) => item.name === socialMidiaType)


    return (
        <button className={`w-full my-2 text-white bg-[${socialMidia?.color}] hover:bg-[${socialMidia?.color}]/90 focus:ring-4 focus:outline-none focus:ring-[${socialMidia?.color}]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[${socialMidia?.color}]/55 mr-2 mb-2`} type="button" >
            <div className=" text-center w-full">

                {textButton}
            </div>
        </button >
    )
}