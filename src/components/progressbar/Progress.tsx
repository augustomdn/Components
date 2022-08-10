import React from "react";
import { getContrastColor } from "../../utils/color";
import './progress.scss'

interface Props {
    current?: number // Current começa em 0%
    total: number // O total é 100%
    type?: 'info' | 'success' | 'danger' | 'warning'
    showPercentage?: boolean


}


export const Progress: React.FC<Props> = ({
    type,
    current = 0,
    total,
    showPercentage = false


}) => {

    let percentageText = ''
    let percentage = 0;

    if (current) {
        let tempPercentage = Math.round((100 * current) / total);
        // Estudar mais a fundo.
        percentage = tempPercentage >= 100 ? 100 : tempPercentage;
        percentageText = showPercentage ? percentage + '%' : '';
    } else {
        percentageText = '0%';
    }

    
    const backgroundColor = type === 'info' ? '#f4f80c' : type === 'success' ? '#15da1f' : type === 'danger' ? '#c92b2b' : '#f0a00c';

    return (
        <div className="bar">
            <div style={{ width: `${current ? percentage : 0}%` }} className={`${type} progressBar`}>
                {showPercentage && <span style={{color: `${getContrastColor(backgroundColor)}`}}>
                    {percentageText}
                </span>}
            </div>
        </div>
    )
}