import { useContext } from 'react';
import { productContext } from './ProductCard';

import styles from '../../styles/styles.module.css'

export const ProductButtons = () => {

  const { increasedBy, counter } = useContext(productContext)

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