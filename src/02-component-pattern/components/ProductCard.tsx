import { FC } from 'react';
import { useProducts } from '../hooks';

import { ProductModel } from '../model/Product';

import styles from '../styles/styles.module.css'
import NoImage from '../assets/no-image.jpg'
// max value
export const ProductCard: FC<ProductModel> =
    ({
        img,
        title
    }) => {

        const { counter, increasedBy } = useProducts({})

        return (
            <div className={styles.productCard}>
                <img className={styles.productImg} src={img || NoImage} alt={title} />
                <span className={styles.productDescription}>{title}</span>
                <div className={styles.buttonsContainer}>
                    <button onClick={() => increasedBy(-1)} className={styles.buttonMinus}>-</button>
                    <div className={styles.countLabel}>{counter}</div>
                    <button onClick={() => increasedBy(+1)} className={styles.buttonAdd}>+</button>
                </div>
            </div>
        )
    }
