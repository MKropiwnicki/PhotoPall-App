import React, {useEffect, useState} from "react";
import {SubmitButton} from "./SubmitButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {UserAuth} from "../context/AuthContext.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";



export const RegisterModal = ({toggleModal, toggleLogin, openSuccess, openError, isVisible, title}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [passwordsMatch, setPasswordsMatch] = useState(null);
    const [error, setError] = useState('');
    const {createUser} = UserAuth();


    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        let isRegOk = null;
        //aktualizacja stanu z async nie działała, musiałem użyć zmiennej let = isRegOk

        if(isEmailValid && isPasswordValid && passwordsMatch) {
            try{
                await createUser(email, password);
                isRegOk = true
            } catch (e) {
                setError(e.message);
                console.log(e.message);
                isRegOk = false
            }
        }
        setEmail("");
        setPassword('');
        setPasswordConfirm('');
        toggleModal();

        isRegOk ? openSuccess() : openError();

    }

    useEffect(() => {
        setIsEmailValid(emailValidation(email));
    }, [email]);

    useEffect(() => {
        setIsPasswordValid(passwordValidation(password));
    }, [password]);

    useEffect(() => {
        setPasswordsMatch(matchingPasswords(password, passwordConfirm));
    }, [passwordConfirm]);

    const emailValidation = () => {
        const atPresent = /[@]/;

        if(atPresent.test(email) && email.length > 5) {
            return true
        } else {
            return false
        }
    }

    const passwordValidation = () => {

        const numberPresent = /\d+/;
        const uppercasePresent = /[A-Z]+/;
        const specialCharPresent = /[!@#$%^&*()_+[\]{};':"\\|,.<>?]+/;

       if(password.length >= 8 &&
           numberPresent.test(password) &&
           uppercasePresent.test(password) &&
           specialCharPresent.test(password)) {
            return true
        } else {
            return false
        }
    }

    const matchingPasswords = () => {
        if(password === passwordConfirm) {
            return true
        } else {
            return false
        }
    }


    return(

        <AnimatePresence>
            {isVisible &&(
                <motion.div
                    className='register-modal-container'
                key='registerModalContainer'
                initial={{opacity: 0, scale: 0, x:'-50%', y:'-50%'}}
                animate={{opacity: 1, scale: 1, x:'-50%', y:'-50%', transition: {type: "spring", stiffness: 100}}}
                exit={{opacity: 0, scale: 0, transition: {type: "spring", stiffness: 100}}}
                transition={{duration: 0.2, ease: easeInOut}}>
                    <div onClick={toggleModal} className='close-btn'>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <div className='register-modal'>
                        <h2 className='modal-title'>{title}</h2>
                        <form onSubmit={handleRegister}>
                            <label htmlFor='email'>Your e-mail:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-mail' id='email'/>
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
                            <label htmlFor='password'>Your password:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password'/>
                            <FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}} />
                            <label htmlFor='password-confirmation'>Password confirmation:</label>
                            <input onChange={(e) => setPasswordConfirm(e.target.value)} type='password' placeholder='Password' id='password-confirmation'/>
                            <FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}} />
                            {isEmailValid === false && email !== '' && (
                                <p className='form-validation'>
                                    Entered e-mail is not valid.
                                </p>
                            )}

                            {isPasswordValid === false && password !== '' && (
                                <p className='form-validation'>
                                    Password must contain at least 8 characters, a capital letter, a digit, and a special character.
                                </p>
                            )}

                            {passwordsMatch === false && passwordConfirm !== '' && (
                                <p className='form-validation'>
                                    The passwords must match.
                                </p>
                            )}
                            <SubmitButton title={title} />
                        </form>
                        <p>Already have account? <span onClick={toggleLogin}>Login</span></p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}