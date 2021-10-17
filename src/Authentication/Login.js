import React, { useState, useRef } from "react";
import ErrorText from "../Component/ErrorText/ErrorText";
import Button from "../Component/UI/Button/Button";
import Inputs from "../Component/UI/Input/Inputs";
import styles from './Login.module.css';

const Login = props => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    // const usernameChangeHandler = inputValue => {
    //     setUsername(inputValue);
    // }

    // const passwordChangeHandler = inputValue => {
    //     setPassword(inputValue);
    // }

    const uname = useRef('');
    const pword = useRef('');

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log("form submitted");
        
        const username = uname.current.value;
        const password = pword.current.value;

        if(username === "" && password !== ""){
            setErrorText("Username cannot be empty.");
        }
        if(username !== "" && password === ""){
            setErrorText("Password cannot be empty.");
        }
        if(username === "" && password === ""){
            setErrorText("Username and password cannot be empty.");
        }
        if(username !== "" && password !== ""){
            setErrorText('');
        }
    }

    return(
        <div className={styles.loginBox}>
            <div className={styles.imageBox}></div>
            <div className={styles.rightBox}>
                <form className={styles.loginForm} onSubmit={formSubmitHandler}>
                    <h2>Welcome back</h2>
                    <ErrorText errorText={errorText} />
                    <Inputs refer={uname} inputLabel="Username" inputType="text" />
                    <Inputs refer={pword} inputLabel="Password" inputType="password" />
                    <Button buttonType="submit" classes={styles.loginButton} buttonText="Log in" alternateButton="false" />
                    <div className={styles.orContainer}>
                        <div className={styles.leftOrLine}></div>
                        <p className={styles.orBreak}>OR</p>
                        <div className={styles.rightOrLine}></div>
                    </div>
                    <Button buttonType="button" classes={styles.signupButton} buttonText="Sign up" alternateButton="true" />
                </form>
            </div>
        </div>
    );
}

export default Login;