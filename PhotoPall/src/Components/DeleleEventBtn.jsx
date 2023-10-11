import React from "react";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {auth, db} from "../firebase.js";
import { doc, deleteDoc } from 'firebase/firestore';
export const DeleteEventButton = ({itemID, visibility, toggleDeleteModal}) => {

    const handleDelete = async () => {
        try {
            const docRef = doc(db, 'users', auth.currentUser.uid, 'sessions', itemID);
            await deleteDoc(docRef);
            console.log(`Session: ${itemID} was deleted`);
            visibility(true);
            toggleDeleteModal(true);
        } catch (error) {
            console.error(`Cannot delete: ${itemID}`, error);
        }
    };

    return(
        <AnimatePresence>
            <motion.button key='deleteBtn'
                           initial={{opacity: 0, scale: 0 }}
                           animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                           exit={{opacity: 0, scale: 0}}
                           transition={{duration: 0.2, ease: easeInOut}} onClick={handleDelete} className='delete-btn'>
                <FontAwesomeIcon icon={faTrashCan}/>
            </motion.button>
        </AnimatePresence>

    )
}