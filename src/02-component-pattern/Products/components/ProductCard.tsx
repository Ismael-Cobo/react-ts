import { FC, ReactElement } from 'react';
import { useProducts } from '../../hooks';

import { ProductModel } from '../../model/Product';

import { ProductContext } from '../state';
import styles from '../styles/styles.module.css';


interface Props {
    product: ProductModel
    children?: ReactElement | ReactElement[]
}

export const ProductCard: FC<Props> =
    ({
        product,
        children
    }) => {

        const { counter, increasedBy } = useProducts({})

        return (
            <ProductContext.Provider value={{ product, increasedBy, value: counter }}>
                <div className={styles.productCard}>
                    {children}
                </div>
            </ProductContext.Provider>
        )
    }


