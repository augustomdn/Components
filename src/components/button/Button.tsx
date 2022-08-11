import React from "react";
import './button.scss'



interface Props {
    type?: 'primaryButton' | 'secondaryButton' | 'dangerButton' | 'warningButton'
    size?: 'small' | 'medium' | 'large'
    label?: string
    click?: () => void
    mode?: boolean
}


export const Button: React.FC<Props> = ({
    type,
    size = "small",
    label,
    click,
    mode
    
}) => {
    const round = mode ? 'mode': '';
    return (
        <button type="button"
         className={`${type} ${size} ${round}`}
         onClick={click}>{label}</button>
    )
}