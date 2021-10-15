import React from "react";
import Button from "../Component/UI/Button/Button";
import Inputs from "../Component/UI/Input/Inputs";
import styles from './Login.module.css';

const Login = props => {
    return(
        <div className={styles.loginBox}>
            <div className={styles.imageBox}></div>
            <div className={styles.rightBox}>
                <div className={styles.loginForm}>
                    <h2>Welcome back</h2>
                    <Inputs inputLabel="Username" inputType="text" />
                    <Inputs inputLabel="Password" inputType="password" />
                    <Button classes={styles.loginButton} buttonText="Log in" alternateButton="false" />
                    <div className={styles.orContainer}>
                        <div className={styles.leftOrLine}></div>
                        <p className={styles.orBreak}>OR</p>
                        <div className={styles.rightOrLine}></div>
                    </div>
                    <Button classes={styles.signupButton} buttonText="Sign up" alternateButton="true" />
                </div>
            </div>
        </div>
    );
}

export default Login;