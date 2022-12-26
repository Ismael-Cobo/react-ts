import { CSSProperties, FC, ReactElement } from 'react';
import { useProducts } from '../../hooks';
import { ProductContext } from '../state';

import { ProductModel } from '../../model/Product';

import styles from '../styles/styles.module.css';


interface Props {
    product: ProductModel
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
}

export const ProductCard: FC<Props> =
    ({
        product,
        children,
        className,
        style
    }) => {

        const { counter, increasedBy } = useProducts({})

        return (
            <ProductContext.Provider value={{ product, increasedBy, value: counter }}>
                <div
                    className={`${styles.productCard} ${className}`}
                    style={style}
                >
                    {children}
                </div>
            </ProductContext.Provider>
        )
    }


