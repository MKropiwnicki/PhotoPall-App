import React from "react";
import {DismissButton} from "./DismissButton.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

export const ErrorModal = ({closeModal, title}) => {
    return(
        <AnimatePresence>
            <motion.div className='error'
                        key='error'
                        initial={{opacity: 0, scale: 0, x:'-50%', y:'-50%'}}
                        animate={{opacity: 1, scale: 1, x:'-50%', y:'-50%', transition: {type: "spring", stiffness: 100}}}
                        exit={{opacity: 0, scale: 0}}
                        transition={{duration: 0.2, ease: easeInOut}}>
                <h2>Oops. This e-mail is already linked to existing account. Use different e-email address.</h2>
                <DismissButton onClick={closeModal} title={title} />
            </motion.div>
        </AnimatePresence>

    )
}