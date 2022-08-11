import React from "react";
import './badge.scss';

interface BProps {
    type?: 'primaryBadge' | 'secondaryBadge' | 'successBadge' | 'infoBadge' | 'dangerBadge' | 'warningBadge' | 'lightBadge' | 'darkBadge' 
 }

export const Badge: React.FC<BProps> = ({
    type,

}) => {
    return (
        <span className={`${type} badge`}>Badge</span>
    )
}