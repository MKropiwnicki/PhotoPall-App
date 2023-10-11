import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faRectangleList, faCamera, faCircleHalfStroke
} from "@fortawesome/free-solid-svg-icons";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {DeleteButton} from "./DeleteButton.jsx";
import {DeleteModal} from "./DeleteModal.jsx";

export const GearCollectionBody = () => {


    const [camCollData, setCamCollData] = useState([]);
    const [lensCollData, setLensCollData] = useState([]);
    const [triCollData, setTriCollData] = useState([]);
    const [filCollData, setFilCollData] = useState([]);
    const [btnVis, setBtnVis] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    useEffect(() => {
        const fetchGear = async () => {
            try {
                await gearCollection()
            } catch (error) {
                console.error("Error fetching gear:", error);
            }
        };
        fetchGear();
    }, [refresh]);


    const toggleDeleteBtn = (index) => {
        setBtnVis(index);
    }

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }




    const gearCollection = async () => {

        if (!auth.currentUser) {
            return;
        }

        const gearCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'gear'));


        try {
            const querySnapshot = await getDocs(gearCollectionQuery);
            const gearArr = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const type = data.type;
                const brand = data.brand;
                const model = data.model;
                console.log(type);
                gearArr.push({ id: doc.id, type, brand, model});
            });
            const camerasArr = gearArr.filter((gear) => gear.type === 'camera')
            const lensesArr = gearArr.filter((gear) => gear.type === 'lens')
            const tripodsArr = gearArr.filter((gear) => gear.type === 'tripod')
            const filtersArr = gearArr.filter((gear) => gear.type === 'filter')
            setCamCollData(camerasArr);
            setLensCollData(lensesArr);
            setTriCollData(tripodsArr);
            setFilCollData(filtersArr);
        } catch (error) {
            console.error("Error fetching sessions:", error);
        }

    }


    return (
        <AnimatePresence>
            <motion.div className='gearCollection-body-container'>
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

                    {deleteModal && (
                        <DeleteModal toggleDeleteModal={toggleDeleteModal} content='Gear removed from collection.' title='Close'/>
                    )}

                    {camCollData.map((camData) => (
                        <motion.div layout transition={{ duration: 0.3 }} key={camData.id} className='collection-tile'
                                    onMouseEnter={() => toggleDeleteBtn(camData.id)}
                                    onMouseLeave={() => toggleDeleteBtn(null)}>
                            <motion.div className='tile-content'>
                                <FontAwesomeIcon icon={faCamera}/>
                                <h2>{camData.brand} {camData.model}</h2>
                            </motion.div>
                            {btnVis === camData.id && (
                                <DeleteButton toggleDeleteModal={setDeleteModal} itemID={camData.id} visibility={setRefresh} />
                            )}
                        </motion.div>
                    ))}

                    {lensCollData.map((lensData) => (
                        <motion.div layout transition={{ duration: 0.3 }} key={lensData.id} className='collection-tile'
                                    onMouseEnter={() => toggleDeleteBtn(lensData.id)}
                                    onMouseLeave={() => toggleDeleteBtn(null)} >
                            <motion.div className='tile-content'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="80"
                                    height="80"
                                    viewBox="0 0 123.45 123.45"
                                    fill='white'
                                >
                                    <path
                                        d="M61.72,0.28c14.77,0,28.33,5.22,38.93,13.9L46.86,45.24V2.1C51.62,0.91,56.6,0.28,61.72,0.28L61.72,0.28z M105.99,19.12c10.63,11.05,17.17,26.06,17.17,42.6c0,3.02-0.22,5.98-0.64,8.89L69.66,40.09L105.99,19.12L105.99,19.12z M121.05,77.76c-4.9,18.16-17.91,32.99-34.91,40.36l0-60.51L121.05,77.76L121.05,77.76z M79.21,120.64 c-5.54,1.64-11.41,2.53-17.48,2.53c-13.75,0-26.44-4.52-36.67-12.14l54.16-31.27L79.21,120.64L79.21,120.64z M19.41,106.27 C7.63,95.07,0.28,79.26,0.28,61.72c0-3.03,0.22-6,0.65-8.92l54.51,32.65L19.41,106.27L19.41,106.27z M2.42,45.62 C7.58,26.57,21.67,11.21,39.91,4.27l-0.44,63.54L2.42,45.62L2.42,45.62z"
                                    />
                                </svg>
                                <h2>{lensData.brand} {lensData.model}</h2>
                            </motion.div>
                            {btnVis === lensData.id && (
                                <DeleteButton toggleDeleteModal={setDeleteModal}  itemID={lensData.id} visibility={setRefresh} />
                            )}
                        </motion.div>
                    ))}

                    {triCollData.map((triData) => (
                        <motion.div layout transition={{ duration: 0.3 }} key={triData.id} className='collection-tile'
                                    onMouseEnter={() => toggleDeleteBtn(triData.id)}
                                    onMouseLeave={() => toggleDeleteBtn(null)} >
                            <motion.div className='tile-content'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="80"
                                    height="80"
                                    viewBox="0 0 96.5 122.88"
                                    fill='white'
                                >
                                    <path
                                        d="M22,6.07V7.45H36.13V3.78A3.79,3.79,0,0,1,39.91,0H72.15a3.79,3.79,0,0,1,3.77,3.78V16a3.79,3.79,0,0,1-3.77,3.78H60.48v5.34h6.67a2.61,2.61,0,0,1,2.6,2.6v1h2.4a3.79,3.79,0,0,1,3.77,3.78v3.9a3.79,3.79,0,0,1-3.77,3.78H59.87a3.4,3.4,0,0,1,1.06,1.22L83.6,84.89l.52-.27a1.9,1.9,0,0,1,2.56.8l9.6,18.43a1.9,1.9,0,0,1-.8,2.56l-.52.27,1,2a3.5,3.5,0,0,1-6.22,3.23l-1-2-.31.16a1.91,1.91,0,0,1-2.56-.8l-9.6-18.43a1.91,1.91,0,0,1,.8-2.56l.31-.16L59.54,53.89V92.54h.34a1.9,1.9,0,0,1,1.9,1.9v20.78a1.9,1.9,0,0,1-1.9,1.89h-.34v2.26a3.51,3.51,0,0,1-7,0v-2.26h-.58a1.9,1.9,0,0,1-1.9-1.89V94.44a1.9,1.9,0,0,1,1.9-1.9h.58V52.07L33.73,88.13l.31.16a1.91,1.91,0,0,1,.8,2.56l-9.6,18.43a1.91,1.91,0,0,1-2.56.8l-.31-.16-1,2a3.5,3.5,0,0,1-6.22-3.23l1-2-.52-.27a1.9,1.9,0,0,1-.8-2.56l9.6-18.43a1.9,1.9,0,0,1,2.56-.8l.52.27L50.18,41.38a3.4,3.4,0,0,1,1.06-1.22H39.91a3.79,3.79,0,0,1-3.78-3.78v-3.9a3.79,3.79,0,0,1,3.78-3.78H42.3v-1a2.61,2.61,0,0,1,2.61-2.6h6.67V19.79H39.91A3.79,3.79,0,0,1,36.13,16V12H22v1.14a1.7,1.7,0,0,1-1.7,1.7H1.69A1.7,1.7,0,0,1,0,13.16V6.07a1.7,1.7,0,0,1,1.69-1.7H20.25A1.7,1.7,0,0,1,22,6.07ZM65.78,4.63a5,5,0,1,1-5,5,5,5,0,0,1,5-5Z"
                                    />
                                </svg>
                                <h2>{triData.brand} {triData.model}</h2>
                            </motion.div>
                            {btnVis === triData.id && (
                                <DeleteButton toggleDeleteModal={setDeleteModal} itemID={triData.id} visibility={setRefresh} />
                            )}
                        </motion.div>
                    ))}

                    {filCollData.map((filData) => (
                        <motion.div layout transition={{ duration: 0.3 }} key={filData.id} className='collection-tile'
                                    onMouseEnter={() => toggleDeleteBtn(filData.id)}
                                    onMouseLeave={() => toggleDeleteBtn(null)} >
                            <motion.div className='tile-content'>
                                <FontAwesomeIcon icon={faCircleHalfStroke}/>
                                <h2>{filData.brand} {filData.model}</h2>
                            </motion.div>
                            {btnVis === filData.id && (
                                <DeleteButton toggleDeleteModal={setDeleteModal} itemID={filData.id} visibility={setRefresh} />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};