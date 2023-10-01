import React from "react";
import {DismissButton} from "./DismissButton.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

export const NoUser = ({closeModal, title}) => {
    return(
        <AnimatePresence>
            <motion.div className='no-user'
                        key='noUser'
                        initial={{opacity: 0, scale: 0, x:'-50%', y:'-50%'}}
                        animate={{opacity: 1, scale: 1, x:'-50%', y:'-50%', transition: {type: "spring", stiffness: 100}}}
                        exit={{opacity: 0, scale: 0}}
                        transition={{duration: 0.2, ease: easeInOut}}>
                <h2>Access denied. Wrong e-mail or password. </h2>
                <DismissButton onClick={closeModal} title={title} />
            </motion.div>
        </AnimatePresence>

    )
}