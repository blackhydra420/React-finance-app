import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    if(props.alternateButton === 'true'){
        return (
            <button type={props.buttonType} className={`${props.classes} ${styles.buttonAlterBack}`}>{props.buttonText}</button>
        );
    }
    return (
        <button type={props.buttonType} className={`${props.classes} ${styles.buttonBack}`}>{props.buttonText}</button>
    );
}

export default Button;