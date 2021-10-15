import React from "react";
import Login from "./Login";
import styles from './LoginContainer.module.css';

const LoginContainer = props => {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    );
}

export default LoginContainer;