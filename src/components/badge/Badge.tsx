import React from "react";
import './badge.scss';

interface BProps {
    type?: 'primaryBadge' | 'secondaryBadge' | 'successBadge' | 'infoBadge' | 'dangerBadge' | 'warningBadge' | 'lightBadge' | 'darkBadge'
    label?: string
 }

export const Badge: React.FC<BProps> = ({
    type,
    label

}) => {
    return (
        <span className={`${type} badge`}>{label}</span>
    )
}