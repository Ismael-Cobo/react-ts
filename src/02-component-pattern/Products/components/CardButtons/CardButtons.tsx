import { useContext } from "react";
import { ProductContext } from "../../state";

import styles from '../../styles/styles.module.css';

export const CardButtons = () => {
    const { increasedBy, value } = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer} >
            <button onClick={() => increasedBy(-1)} className={styles.buttonMinus}>-</button>
            <span className={styles.countLabel}>{value}</span>
            <button onClick={() => increasedBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}