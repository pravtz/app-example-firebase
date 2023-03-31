import { useColorModeToogle } from "@/hooks/useColorModeToogle"
import { BsFillMoonFill, BsSunFill } from "react-icons/bs"


export const ButtonDarkMode = () => {
    const { colorMode, colorModeToogle } = useColorModeToogle()

    return (
        <button
            onClick={colorModeToogle}
        >
            {colorMode && colorMode() === "dark" ? <BsFillMoonFill /> : <BsSunFill />}
        </button>
    )
}