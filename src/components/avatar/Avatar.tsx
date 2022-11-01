import React from "react";
import './avatar.scss';

interface Props {
    name?: string,
    src?: string,
    format?: 'avatarSquare' | 'avatarRound'
    size?: 'avatarSmall' | 'avatarNormal' | 'avatarBig' | 'avatarOmg'
    click?: () => void;

}

const getInitials = (fullName: string | undefined): string | undefined => {
    if (!fullName) return;

    const exploded = fullName.trim().split(" ");
    const firstName = exploded[0];
    const lastName = exploded[exploded.length -1];
    
    if (firstName === lastName) {
        return `${firstName[0]}`;
    }

    return `${firstName[0]}${lastName[0]}`
}

export const Avatar: React.FC<Props> = ({
    name,
    src,
    format = 'avatarSquare',
    size,
    click,
}) => {


    return (
        <img className={`${format} ${size} avatar`}
            src={src}
            alt={getInitials(name)?.toUpperCase()} 
            onClick={click}/>
    )
}