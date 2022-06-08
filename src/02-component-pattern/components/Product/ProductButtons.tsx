import { useContext, CSSProperties } from 'react';
import { productContext } from './ProductCard';

import styles from '../../styles/styles.module.css'


interface Props {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

  const { increasedBy, counter } = useContext(productContext)

  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
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