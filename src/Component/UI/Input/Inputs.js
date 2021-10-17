import React from "react";
import styles from './Inputs.module.css';

const Inputs = props => {

    return(
        <div className={styles.inputBlock}>
            <label className={styles.inputsLabel}>{props.inputLabel}</label>
            <input ref={props.refer} className={styles.inputsInput} type={props.inputType} />
        </div>
    );
}

export default Inputs;