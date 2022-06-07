import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ReactElement } from 'react';


interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
}

interface Product {
  id: string,
  title: string,
  img?: string
}

interface Buttons {
  increasedBy: (value: number) => void,
  counter: number
}


export const ProductImg = ({ img = '' }) => {

  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="coffee mug" />

  )

}

export const ProductTitle = ({ title }: { title: string }) => {

  return (
    <span className={styles.productDescription}>{title}</span>
  )

}

export const ProductButtons = ({ counter, increasedBy }: Buttons) => {

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => increasedBy(-1)}
      >-</button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={styles.buttonAdd}
        onClick={() => increasedBy(+1)}
      >+</button>

    </div>
  )

}



export const ProductCard = ({ product, children }: Props) => {

  const { counter, increasedBy } = useProduct()

  console.log(product.img)
  return (
    <div className={styles.productCard}>
      {
        children
      }

      {/* <ProductImg img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} increasedBy={increasedBy} /> */}

    </div>
  )
}
