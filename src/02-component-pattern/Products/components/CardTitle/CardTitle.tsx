import { CSSProperties, FC, useContext } from "react";
import { ProductContext } from "../../state";

import styles from '../../styles/styles.module.css';

interface CardTitleModel {
    title?: string
    className?: string
    style?: CSSProperties
}

export const CardTitle: FC<CardTitleModel> = ({ title, className, style }) => {
    const { product } = useContext(ProductContext)

    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {title || product.title}
        </span>
    )
}