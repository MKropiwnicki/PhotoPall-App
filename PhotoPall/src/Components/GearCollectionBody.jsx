import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase.js";
import { collection, doc, getDocs, arrayUnion, addDoc, setDoc, query } from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
     faRectangleList, faCamera
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Button.jsx";
import {ActionSavedModal} from "./ActionSavedModal.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {DeleteButton} from "./DeleteButton.jsx";

export const GearCollectionBody = () => {


    const [camCollData, setCamCollData] = useState([]);
    const [lensCollData, setLensCollData] = useState([]);
    const [triCollData, setTriCollData] = useState([]);
    const [filCollData, setFilCollData] = useState([]);
    const [btnVis, setBtnVis] = useState(false);
    const [tileVis, setTileVis] = useState(true);


    // useEffect(() => {
    //     const fetchGear = async () => {
    //         try {
    //             await camerasCollection();
    //             await lensesCollection();
    //             await tripodsCollection();
    //             await filtersCollection();
    //         } catch (error) {
    //             console.error("Error fetching gear:", error);
    //         }
    //     };
    //     fetchGear();
    // }, []);




    const toggleDeleteBtn = (index) => {
        setBtnVis(index);
    }

    // const toggleEventModal = () => {
    //     setActionModal(!actionModal);
    // }




    // const camerasCollection = async () => {
    //
    //     if (!auth.currentUser) {
    //         return;
    //     }
    //
    //     const camerasCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'cameras'));
    //
    //
    //     try {
    //         const querySnapshot = await getDocs(camerasCollectionQuery);
    //         const camCollArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.cameraBrand;
    //             const model = data.cameraModel;
    //
    //             camCollArr.push({ id: doc.id, model: model, brand: brand});
    //         });
    //         setCamCollData(camCollArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //
    // }
    //
    // const lensesCollection = async () => {
    //
    //     if (!auth.currentUser) {
    //         return;
    //     }
    //
    //     const lensesCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'lenses'));
    //
    //
    //     try {
    //         const querySnapshot = await getDocs(lensesCollectionQuery);
    //         const lensCollArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.lensBrand;
    //             const model = data.lensModel;
    //
    //             lensCollArr.push({ id: doc.id, model: model, brand: brand});
    //         });
    //         setLensCollData(lensCollArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //
    // }
    //
    // const tripodsCollection = async () => {
    //
    //     if (!auth.currentUser) {
    //         return;
    //     }
    //
    //     const tripodsCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'tripods'));
    //
    //
    //     try {
    //         const querySnapshot = await getDocs(tripodsCollectionQuery);
    //         const triCollArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.tripodBrand;
    //             const model = data.tripodModel;
    //
    //             triCollArr.push({ id: doc.id, model: model, brand: brand});
    //         });
    //         setTriCollData(triCollArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //
    // }
    //
    // const filtersCollection = async () => {
    //
    //     if (!auth.currentUser) {
    //         return;
    //     }
    //
    //     const filtersCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'filters'));
    //
    //
    //     try {
    //         const querySnapshot = await getDocs(filtersCollectionQuery);
    //         const filCollArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.filterBrand;
    //             const model = data.filterModel;
    //
    //             filCollArr.push({ id: doc.id, model: model, brand: brand});
    //         });
    //         setFilCollData(filCollArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //
    // }






    return (
        <AnimatePresence>
            <div className='gearCollection-body-container'>
                <div className='gearCollection-icon-container'>
                    <div className='collection-icon'>
                        <FontAwesomeIcon icon={faRectangleList}/>
                    </div>
                </div>

                <motion.div className='gearCollection-list-container'
                            key='gearCollection'
                            initial={{opacity: 0, scale: 0 }}
                            animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{duration: 0.2, ease: easeInOut}}>
                    {camCollData.map((camData, index) => (
                        <motion.div key={camData.id} className='collection-tile'
                             onMouseEnter={() => toggleDeleteBtn(index)}
                             onMouseLeave={() => toggleDeleteBtn(null)} >
                            <motion.div layout='position' className='tile-content'>
                                <FontAwesomeIcon icon={faCamera}/>
                                <h2>{camData.brand} {camData.model}</h2>
                            </motion.div>
                            {btnVis === index && (
                                <DeleteButton />
                            )}
                        </motion.div>
                    ))}

                    {lensCollData.map((lensData, index) => (
                        <motion.div transition={{ layout: {duration: 1, ease: easeInOut, type: "spring"}}} Layout key={lensData.id} className='collection-tile'
                                    onMouseEnter={() => toggleDeleteBtn(index)}
                                    onMouseLeave={() => toggleDeleteBtn(null)} >
                            <motion.div className='tile-content'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 123.45 123.45"
                                    fill='white'
                                >
                                    <path
                                        d="M61.72,0.28c14.77,0,28.33,5.22,38.93,13.9L46.86,45.24V2.1C51.62,0.91,56.6,0.28,61.72,0.28L61.72,0.28z M105.99,19.12c10.63,11.05,17.17,26.06,17.17,42.6c0,3.02-0.22,5.98-0.64,8.89L69.66,40.09L105.99,19.12L105.99,19.12z M121.05,77.76c-4.9,18.16-17.91,32.99-34.91,40.36l0-60.51L121.05,77.76L121.05,77.76z M79.21,120.64 c-5.54,1.64-11.41,2.53-17.48,2.53c-13.75,0-26.44-4.52-36.67-12.14l54.16-31.27L79.21,120.64L79.21,120.64z M19.41,106.27 C7.63,95.07,0.28,79.26,0.28,61.72c0-3.03,0.22-6,0.65-8.92l54.51,32.65L19.41,106.27L19.41,106.27z M2.42,45.62 C7.58,26.57,21.67,11.21,39.91,4.27l-0.44,63.54L2.42,45.62L2.42,45.62z"
                                    />
                                </svg>
                                <h2>{lensData.brand} {lensData.model}</h2>
                            </motion.div>
                            {btnVis === index && (
                                <DeleteButton />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};