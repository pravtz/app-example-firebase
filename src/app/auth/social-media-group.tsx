import { ButtonIconSocialMedia } from "@/components/ButtonIconSocialMedia"

export const SocialMediaGroup = () => {
    return (
        <div className="flex flex-col">
            <ButtonIconSocialMedia socialMidiaType="google" />
            <ButtonIconSocialMedia socialMidiaType="facebook" />
            <ButtonIconSocialMedia socialMidiaType="twitter" />
        </div>
    )
}