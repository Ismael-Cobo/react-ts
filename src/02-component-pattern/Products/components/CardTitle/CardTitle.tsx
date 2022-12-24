import { FC, useContext } from "react";
import { ProductContext } from "../../state";

import styles from '../../styles/styles.module.css';

interface CardTitleModel {
    title?: string
}

export const CardTitle: FC<CardTitleModel> = ({ title }) => {
    const { product } = useContext(ProductContext)

    return (
        <span className={styles.productDescription}>{title || product.title}</span>
    )
}