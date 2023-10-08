import React from "react";
import {DismissButton} from "./DismissButton.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

export const ActionSavedModal = ({toggleActionModal, content, title}) => {
    return(
        <AnimatePresence>
            <motion.div className='action-saved-modal'
                        key='action-saved'
                        initial={{opacity: 0, scale: 0, x:'-50%', y:'-50%'}}
                        animate={{opacity: 1, scale: 1, x:'-50%', y:'-50%', transition: {type: "spring", stiffness: 100}}}
                        exit={{opacity: 0, scale: 0}}
                        transition={{duration: 0.2, ease: easeInOut}}>
                <h2>{content}</h2>
                <DismissButton onClick={toggleActionModal} title={title} />
            </motion.div>
        </AnimatePresence>

    )
}