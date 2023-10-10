import React from "react";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
export const DeleteButton = ({onClick}) => {
    return(
        <AnimatePresence>
            <motion.button key='deleteBtn'
                           initial={{opacity: 0, scale: 0 }}
                           animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                           exit={{opacity: 0, scale: 0}}
                           transition={{duration: 0.2, ease: easeInOut}} onClick={onClick} className='delete-btn'>
                <FontAwesomeIcon icon={faTrashCan}/>
            </motion.button>
        </AnimatePresence>

    )
}