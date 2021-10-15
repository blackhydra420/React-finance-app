import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    if(props.alternateButton === 'true'){
        return (
            <button className={`${props.classes} ${styles.buttonAlterBack}`}>{props.buttonText}</button>
        );
    }
    return (
        <button className={`${props.classes} ${styles.buttonBack}`}>{props.buttonText}</button>
    );
}

export default Button;