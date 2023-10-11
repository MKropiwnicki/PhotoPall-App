import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase.js";
import { collection, getDocs, query } from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faRectangleList, faCamera, faCircleHalfStroke, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {DeleteButton} from "./DeleteButton.jsx";
import {DeleteModal} from "./DeleteModal.jsx";
import {EventIcon} from "./EventIcon.jsx";
import {EventDetails} from "./EventDetails.jsx";
import {DeleteEventButton} from "./DeleleEventBtn.jsx";

export const EventsBody = () => {


    const [eventsCollData, setEventsCollData] = useState([]);
    const [btnVis, setBtnVis] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                await eventsCollection()
            } catch (error) {
                console.error("Error fetching gear:", error);
            }
        };
        fetchEvents();
    }, [refresh]);


    // const toggleDeleteBtn = (index) => {
    //     setBtnVis(index);
    // }

    const toggleDeleteBtn = (index) => {
        // Toggle the clicked state for the event tile
        if (btnVis === index) {
            setBtnVis(null); // Close if already open
        } else {
            setBtnVis(index);
        }
    };

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    }




    const eventsCollection = async () => {

        if (!auth.currentUser) {
            return;
        }

        const eventsCollectionQuery = query(collection(db, 'users', auth.currentUser.uid, 'sessions'));


        try {
            const querySnapshot = await getDocs(eventsCollectionQuery);
            const eventsArr = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const date = data.date.date;
                const time = data.date.time;
                const info = data.info;
                const kit = data.kit;
                const city = data.location.city;
                const country = data.location.country;
                const houseNumber = data.location.houseNumber;
                const postalCode = data.location.postalCode;
                const street = data.location.postalCode;
                const poi = data.location.postalCode;
                const modelName = data.model.name;
                const modelSurname = data.model.surname;
                const modelPhone = data.model.phone;
                const modelEmail = data.model.email;
                const type = data.type;
                const isActive = data.isActive;

                eventsArr.push({ id: doc.id,
                    date,
                    time,
                    info,
                    kit,
                    city,
                    country,
                    houseNumber,
                    postalCode,
                    street,
                    poi,
                    modelName,
                    modelSurname,
                    modelPhone,
                    modelEmail,
                    type,
                    isActive });
            });
            // const camerasArr = gearArr.filter((gear) => gear.type === 'camera')

            setEventsCollData(eventsArr);
        } catch (error) {
            console.error("Error fetching sessions:", error);
        }

    }


    return (
        <AnimatePresence>
            <motion.div className='eventsCollection-body-container'>
                <div className='eventsCollection-icon-container'>
                    <div className='events-icon'>
                        <FontAwesomeIcon icon={faCalendarDays}/>
                    </div>
                </div>

                <motion.div className='eventsCollection-list-container'
                            key='gearCollection'
                            initial={{opacity: 0, scale: 0 }}
                            animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{duration: 0.2, ease: easeInOut}}>

                    {deleteModal && (
                        <DeleteModal toggleDeleteModal={toggleDeleteModal} content='Event deleted.' title='Close'/>
                    )}

                    {/*{eventsCollData.map((eventData) => (*/}
                    {/*    <motion.div key={eventData.id} className='event-tile'*/}
                    {/*                onMouseEnter={() => toggleDeleteBtn(eventData.id)}*/}
                    {/*                onMouseLeave={() => toggleDeleteBtn(null)}>*/}
                    {/*        <motion.div className='event-tile-content'>*/}
                    {/*            <EventIcon condition={eventData.type} />*/}
                    {/*            <h2>{eventData.type}</h2>*/}
                    {/*            <h2>{eventData.date} <br/> {eventData.time}</h2>*/}
                    {/*        </motion.div>*/}
                    {/*        {btnVis === eventData.id && (*/}
                    {/*            <>*/}
                    {/*                <EventDetails kit={eventData.kit}*/}
                    {/*                              info={eventData.info}*/}
                    {/*                              city={eventData.city}*/}
                    {/*                              country={eventData.country}*/}
                    {/*                              houseNumber={eventData.houseNumber}*/}
                    {/*                              postalCode={eventData.postalCode}*/}
                    {/*                              street={eventData.street}*/}
                    {/*                              poi={eventData.poi}*/}
                    {/*                              modelName={eventData.modelName}*/}
                    {/*                              modelSurname={eventData.modelSurname}*/}
                    {/*                              modelPhone={eventData.modelName}*/}
                    {/*                              modelEmail={eventData.modelEmail}*/}
                    {/*                              isActive={eventData.isActive} />*/}
                    {/*                <DeleteButton itemID={eventData.id} visibility={setRefresh} />*/}
                    {/*            </>*/}

                    {/*        )}*/}
                    {/*    </motion.div>*/}
                    {/*))}*/}
                    {eventsCollData.map((eventData) => (
                        <motion.div layout transition={{ duration: 0.3 }} key={eventData.id} className='event-tile'
                                    onClick={() => toggleDeleteBtn(eventData.id)}
                        >
                            <motion.div className='event-tile-content'>
                                <EventIcon condition={eventData.type} />
                                <h2>{eventData.type}</h2>
                                <h2>{eventData.date} <br /> {eventData.time}</h2>
                            </motion.div>
                            {btnVis === eventData.id && (
                                <>
                                    <EventDetails kit={eventData.kit}
                                                  info={eventData.info}
                                                  city={eventData.city}
                                                  country={eventData.country}
                                                  houseNumber={eventData.houseNumber}
                                                  postalCode={eventData.postalCode}
                                                  street={eventData.street}
                                                  poi={eventData.poi}
                                                  modelName={eventData.modelName}
                                                  modelSurname={eventData.modelSurname}
                                                  modelPhone={eventData.modelName}
                                                  modelEmail={eventData.modelEmail}
                                                  isActive={eventData.isActive} />
                                    <DeleteEventButton toggleDeleteModal={setDeleteModal} itemID={eventData.id} visibility={setRefresh} />
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};