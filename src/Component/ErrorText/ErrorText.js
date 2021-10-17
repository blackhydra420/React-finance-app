import React from "react";
import styles from './Error.module.css';

const ErrorText = props => {
    return (
        <div className={styles.errorTextStyle}>{props.errorText}</div>
    );
}

export default ErrorText;