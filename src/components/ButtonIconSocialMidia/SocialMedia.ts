import { FaFacebook, FaTwitch, FaGithub, FaGoogle } from 'react-icons/fa'

export const SocialMidia = [
    {
        name: "facebook",
        color: "#3b5998",
        svg: '<svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>'
    },
    {
        name: "twitter",
        color: "#1da1f2",
        svg: { FaTwitch }
    },
    {
        name: "github",
        color: "#24292F",
        svg: { FaGithub }
    },
    {
        name: "google",
        color: "#4285F4",
        svg: { FaGoogle }
    },
]