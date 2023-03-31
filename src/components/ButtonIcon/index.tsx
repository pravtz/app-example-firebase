import React from "react";
import { BsCheck } from "react-icons/bs"


interface IconTypeProps {
    size: string
    color: string;
    id: string;
}

type ButtonIcomType = {
    onClickButton?: () => {}
    icon?: (props: IconTypeProps) => JSX.Element
    colorIcon?: string
    bgButton?: string
    sizeIcon?: string
}

export const ButtonIcon = ({ onClickButton, icon = BsCheck, colorIcon = "#000", bgButton = '#ddd', sizeIcon = "1.25em" }: ButtonIcomType) => {
    return (

        <button onClick={onClickButton} className={`bg-[${bgButton}]`}>
            {React.createElement(icon, { id: 'iconSVG', size: sizeIcon, color: colorIcon })}
        </button>
    )
}