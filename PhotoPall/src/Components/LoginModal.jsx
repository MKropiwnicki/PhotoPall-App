import React, {useState} from "react";
import {SubmitButton} from "./SubmitButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {UserAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {AnimatePresence, easeInOut, motion} from "framer-motion";


export const LoginModal = ({toggleModal, toggleRegister, openNoUser, title}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = UserAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        let isLogOk = true;

        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            isLogOk = false
        }
        setEmail("");
        setPassword('');
        toggleModal();

        if(isLogOk === false) {
            openNoUser();
        }

    }

    return(

        <AnimatePresence>
            <motion.div className='login-modal-container'
                 key='noUser'
                 initial={{opacity: 0, scale: 0, x:'-50%', y:'-50%'}}
                 animate={{opacity: 1, scale: 1, x:'-50%', y:'-50%', transition: {type: "spring", stiffness: 100}}}
                 exit={{opacity: 0, scale: 0}}
                 transition={{duration: 0.2, ease: easeInOut}}>
                <div onClick={toggleModal} className='close-btn'>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                <div className='login-modal'>
                    <h2 className='modal-title'>{title}</h2>
                    <form onSubmit={handleLogin}>
                        <label htmlFor='email'>Your e-mail:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-mail' id='email'/>
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
                        <label htmlFor='password'>Your password:</label>
                        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password'/>
                        <FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}} />
                        <SubmitButton title={title} />
                    </form>
                    <p>Don&apos;t have an account? <span onClick={toggleRegister}>Register</span></p>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}