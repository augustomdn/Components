import React from "react";
import { Items } from "./Items";
import styles from './breadcrumb.module.scss'



interface BreadcrumbProps {
    separator?: '—' | '/' | '➡',
    items: Items[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    separator = '-',
    items,
}) => {



    return (
        <div className={styles.breadcrumbList}>
            {items.map((item) => {
                return (
                    <>
                        <span>{item.disabled ? item.title : <a href={item.url}>{item.title}</a>}</span>
                        <span className={styles.separator}>{separator}</span>
                    </>
                )
            })}
        </div>
    )
}