import { CSSProperties, FC, useContext } from "react";
import { ProductContext } from "../../state";

import styles from '../../styles/styles.module.css';

interface Props {
    className?: string
    style?: CSSProperties
}

export const CardButtons: FC<Props> = ({ className, style }) => {
    const { increasedBy, value } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style} >
            <button onClick={() => increasedBy(-1)} className={styles.buttonMinus}>-</button>
            <span className={styles.countLabel}>{value}</span>
            <button onClick={() => increasedBy(1)} className={styles.buttonAdd}>+</button>
        </div>
    )
}