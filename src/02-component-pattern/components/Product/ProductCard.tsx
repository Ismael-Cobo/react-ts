import { useProduct } from '../../hooks/useProduct';

import { createContext, CSSProperties, ReactElement } from 'react';
import { Product, ProductContextProps } from '../../interfaces/productInterface';

import styles from '../../styles/styles.module.css'

interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export const productContext = createContext({} as ProductContextProps)
const { Provider } = productContext

export const ProductCard = ({ product, children, className, style }: Props) => {

  const { counter, increasedBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increasedBy,
      product
    }}>

      <div
        className={`${styles.productCard} ${className}`}
        style={
          style
        }
      >
        {
          children
        }
      </div>
    </Provider>
  )
}
