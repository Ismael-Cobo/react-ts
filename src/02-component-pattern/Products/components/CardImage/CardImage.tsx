import { FC, useContext } from 'react';
import { ProductContext } from '../../state';

import NoImage from '../../../assets/no-image.jpg';
import styles from '../../styles/styles.module.css';


interface CardImgModel {
    img?: string
    title?: string
}

export const CardImg: FC<CardImgModel> = ({ img, title }) => {
    const { product } = useContext(ProductContext)
    return (
        <img className={styles.productImg} src={img || product.img || NoImage} alt={product.title || title} />
    )
}