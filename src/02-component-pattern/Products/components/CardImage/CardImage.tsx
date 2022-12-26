import { CSSProperties, FC, useContext } from 'react';
import { ProductContext } from '../../state';

import NoImage from '../../../assets/no-image.jpg';
import styles from '../../styles/styles.module.css';


interface CardImgModel {
    img?: string
    title?: string
    className?: string
    style?: CSSProperties
}

export const CardImg: FC<CardImgModel> = ({ img, title, className, style }) => {
    const { product } = useContext(ProductContext)
    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={img || product.img || NoImage} alt={product.title || title} />
    )
}