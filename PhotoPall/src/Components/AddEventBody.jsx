import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase.js";
import { collection, doc, getDocs, arrayUnion, addDoc, setDoc, query } from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarPlus,
    faClock,
    faMapLocationDot,
    faMountainSun,
    faScrewdriverWrench,
    faPersonCircleQuestion, faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Button.jsx";
import {ActionSavedModal} from "./ActionSavedModal.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";

export const AddEventBody = () => {


    const [type, setType] = useState('');
    const [kit, setKit] = useState('')
    const [street, setStreet] = useState('');
    const [houseNum, setHouseNum] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [poi, setPoi] = useState('');
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')
    const [status, setStatus] = useState(true);
    const [actionModal, setActionModal] = useState(false);
    const [kitsData, setKitsData] = useState([]);

    useEffect(() => {
        const fetchKits = async () => {
            try {
                await getKits();
            } catch (error) {
                console.error("Error fetching gear:", error);
            }
        };
        fetchKits();
    }, []);

    const toggleEventModal = () => {
        setActionModal(!actionModal);
    }


    const handleEvent = async (e) => {
        e.preventDefault();

        const address = `${street}+${houseNum}+${postalCode}+${city}+${country}+${poi}`;
        const geoCodeURL = `https://geocode.maps.co/search?q=${address}`


        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const photoSessionsCollectionRef = collection(userDocRef, "sessions");
        console.log(photoSessionsCollectionRef);

        const getCoordinates = async () => {
            try {
                const response = await fetch(geoCodeURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                if (data.length === 0 || data[0].lon === undefined || data[0].lat === undefined) {
                    console.log('Incorrect data or coordinates dont exist');
                    return ['0', '0'];
                } else {
                    const coordinates = [data[0].lat, data[0].lon];
                    console.log(coordinates);
                    return coordinates;
                }
            } catch (error) {
                console.error('Data fetch error:', error);
                return ['0', '0'];
            }
        }

        const coordinates = await getCoordinates();

        const newEvent = {
            coordinates: coordinates,
            date: {
                date: date,
                time: time
            },
            info: info,
            kit: kit,
            location: {
                city: city,
                country: country,
                houseNumber: houseNum,
                poi: poi,
                postalCode: postalCode,
                street: street
            },
            model: {
                email: email,
                name: name,
                phone: phone,
                surname: surname
            },
            type: type,
            isActive: status
        };

        try {
            await addDoc(photoSessionsCollectionRef, newEvent)

            setStatus(true);
            setType('');
            setKit('');
            setStreet('');
            setHouseNum('');
            setPostalCode('');
            setCity('');
            setCountry('');
            setPoi('');
            setDate('');
            setTime('');
            setName('');
            setSurname('');
            setPhone('');
            setEmail('');
            setInfo('');
            setActionModal(true)
        } catch (error) {
            console.log(error)
        }



    }

    const getKits = async () => {

        if (!auth.currentUser) {
            return;
        }

        const kitsQuery = query(collection(db, 'users', auth.currentUser.uid, 'kits'));


        try {
            const querySnapshot = await getDocs(kitsQuery);
            const kitsArr = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const name = data.name;

                kitsArr.push({ id: doc.id, name});
            });
            setKitsData(kitsArr);
        } catch (error) {
            console.error("Error fetching sessions:", error);
        }


    }

    // const handleInfo = async (e) => {
    //     e.preventDefault();
    //     if (!auth.currentUser) {
    //         return;
    //     }
    //
    //     const q = query(collection(db, "users", auth.currentUser.uid, "sessions"));
    //
    //     try {
    //         const querySnapshot = await getDocs(q);
    //         const events = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const location = data.coordinates;
    //             const date = data.date.date;
    //             const time = data.date.time;
    //             const eventType = data.type;
    //             const eventInfo = data.info;
    //             events.push({ id: doc.id, type: eventType, location, date, time, info: eventInfo });
    //         });
    //         setEventData(events);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //     // const querySnapshot = await getDocs(q);
    //     // querySnapshot.forEach((doc) => {
    //     //     const data = doc.data();
    //     //     const location = data.coordinates;
    //     //     const date = data.date.date;
    //     //     const time = data.date.time
    //     //     const type = data.type
    //     //     const info = data.info
    //     //     console.log(doc.id, " => ", type, location, date, info, time);
    //     //
    //     // });
    //
    //
    // }





    return (
        <AnimatePresence>
            <div className='add-event-body-container'>
                <div className='add-event-icon-container'>
                    <div className='event-icon'>
                        <FontAwesomeIcon icon={faCalendarPlus}/>
                    </div>
                </div>

                <motion.div className='event-form-container'
                            key='noUser'
                            initial={{opacity: 0, scale: 0 }}
                            animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{duration: 0.2, ease: easeInOut}}>
                    {actionModal && (
                        <ActionSavedModal toggleActionModal={toggleEventModal} content='Event saved.' title='Close'/>
                    )}
                    <div className='event-wrapper'>
                        <div className='form-box'>
                            <form>
                                <div className='element-box'>
                                    <div className='box select-box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faMountainSun}/>
                                            <h2>Event type</h2>
                                        </div>

                                        <label htmlFor="event-select">Choose an event type:</label>
                                        <select onChange={(e) => setType(e.target.value)} name="events" id="event-select">
                                            <option value="">Event type</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="model session">Model session</option>
                                            <option value="wildlife">Wildlife</option>
                                            <option value="landscape">Landscape</option>
                                            <option value="astro">Astro</option>
                                            <option value="product">Product</option>
                                        </select>
                                    </div>
                                    <div className='box select-box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faScrewdriverWrench}/>
                                            <h2>Kit</h2>
                                        </div>

                                        <label htmlFor="kit-select">Choose kit:</label>
                                        <select
                                            value={kit}
                                            onChange={(e) => setKit(e.target.value)}
                                            name="kit-select"
                                            id="kit-select"
                                        >
                                            <option value="">Kits:</option>
                                            {kitsData.map((kit) => (
                                                <option key={kit.id} value={kit.name}>
                                                    {kit.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className='element-box'>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faMapLocationDot}/>
                                            <h2>Location</h2>
                                        </div>
                                        <label htmlFor='street'>Street:</label>
                                        <input value={street} onChange={(e) => setStreet(e.target.value)} type='text' id='street' placeholder='Street'/>
                                        <label htmlFor='houseNumber'>House number:</label>
                                        <input value={houseNum} onChange={(e) => setHouseNum(e.target.value)} type='text' id='houseNumber' placeholder='House number'/>
                                        <label htmlFor='postalCode'>Postal code:</label>
                                        <input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type='text' id='postalCode' placeholder='Postal code'/>
                                        <label htmlFor='city'>City:</label>
                                        <input value={city} onChange={(e) => setCity(e.target.value)} type='text' id='city' placeholder='City'/>
                                        <label htmlFor='country'>Country:</label>
                                        <input value={country} onChange={(e) => setCountry(e.target.value)} type='text' id='country' placeholder='Country'/>
                                        <label htmlFor='poi'>Point of interest:</label>
                                        <input value={poi} onChange={(e) => setPoi(e.target.value)} type='text' id='poi' placeholder='Point of interest'/>
                                    </div>
                                </div>

                                <div className='element-box'>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faClock}/>
                                            <h2>Date and time</h2>
                                        </div>
                                        <label htmlFor='date'>Date:</label>
                                        <input value={date} onChange={(e) => setDate(e.target.value)} type='date' id='date' placeholder='Date'/>
                                        <label htmlFor='time'>Time:</label>
                                        <input value={time} onChange={(e) => setTime(e.target.value)} type='time' id='time' placeholder='Time'/>
                                    </div>
                                </div>

                                <div className='element-box'>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faPersonCircleQuestion}/>
                                            <h2>Model info</h2>
                                        </div>
                                        <label htmlFor='name'>Name:</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type='text' id='street' placeholder='Name'/>
                                        <label htmlFor='surname'>Surname:</label>
                                        <input value={surname} onChange={(e) => setSurname(e.target.value)} type='text' id='street' placeholder='Surname'/>
                                        <label htmlFor='phone'>Phone number:</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' id='phone' placeholder='Phone number'/>
                                        <label htmlFor='email'>E-mail:</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' id='email' placeholder='E-mail'/>
                                    </div>
                                </div>

                                <div className='element-box'>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faCircleInfo}/>
                                            <h2>Additional info</h2>
                                        </div>
                                        <textarea value={info} onChange={(e) => setInfo(e.target.value)} placeholder='Here you can write additional info'/>
                                        {/*<button type='submit'>Save event</button>*/}
                                    </div>
                                </div>

                            </form>

                            {/*<button onClick={handleInfo}>get info</button>*/}

                            {/*{eventData.map((event) => (*/}
                            {/*    <div key={event.id}>*/}
                            {/*        <p>event.id</p>*/}
                            {/*        <p>Type: {event.type}</p>*/}
                            {/*        <p>Location: {event.location}</p>*/}
                            {/*        <p>Date: {event.date}</p>*/}
                            {/*        <p>Time: {event.time}</p>*/}
                            {/*        <p>Info: {event.info}</p>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                        </div>
                    </div>
                    <div className='event-btn-box'>
                        <Button onClick={handleEvent} title='Save event' classMod='event-btn' />
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};