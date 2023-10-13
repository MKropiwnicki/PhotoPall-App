import React, { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { collection, doc, getDocs, query } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import {WeatherIcon} from "./WeatherIcon.jsx";
import {EventIcon} from "./EventIcon.jsx";
import {
    faCalendarTimes,
    faCalendarXmark,
    faCamera, faCircleHalfStroke,
    faFaceFrown,
    faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ClosestEvent} from "./ClosestEvent.jsx";

export const AppBody = () => {

    const [eventData, setEventData] = useState([]);
    const [weatherData, setWeatherData] = useState(null);
    const [data, setData] = useState(null);

    const [camerasCounter, setCamerasCounter] = useState([]);
    const [lensesCounter, setLensesCounter] = useState([]);
    const [tripodsCounter, setTripodsCounter] = useState([]);
    const [filtersCounter, setFiltersCounter] = useState([]);
    const [gearCounter, setGearCounter] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Combine the queries for events and gear here
                await getEvents();
                await getGearNumbers();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (eventData.length > 0) {
            const getData = async () => {
                try {
                    await getWeatherData(eventData[0].lat, eventData[0].lon)
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            };
            getData();
        }
    }, [eventData]);


    const getEvents = async () => {
        if (!auth.currentUser) {
            return [];
        }

        const eventsCollectionQuery = query(
            collection(db, "users", auth.currentUser.uid, "sessions")
        );

        try {
            const querySnapshot = await getDocs(eventsCollectionQuery);
            const eventsArr = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const lon = data.coordinates.lon;
                const lat = data.coordinates.lat;
                const date = data.date.date;
                const time = data.date.time;
                const city = data.location.city;
                const country = data.location.country;
                const houseNumber = data.location.houseNumber;
                const postalCode = data.location.postalCode;
                const street = data.location.street;
                const poi = data.location.poi;
                const type = data.type;

                eventsArr.push({
                    id: doc.id,
                    date,
                    time,
                    lon,
                    lat,
                    city,
                    country,
                    houseNumber,
                    postalCode,
                    street,
                    poi,
                    type,
                });
            });
            console.log(eventsArr);
            eventsArr.sort((a, b) => new Date(a.date) - new Date(b.date));
            setEventData(eventsArr);
        } catch (error) {
            console.error("Error fetching sessions:", error);
            return [];
        }
    };



    const getWeatherData = async (lat, lon) => {
        if (lat && lon) {
            const weatherAPIKey = "f3aaf679dbd2405c9f765639231210";
            const weatherCodeURL = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${lat},${lon}`;

            try {
                const response = await fetch(weatherCodeURL);
                if (response.ok) {
                    const data = await response.json();
                    setWeatherData(data);
                } else {
                    console.error("Network response was not ok");
                }
            } catch (error) {
                console.error("Data fetch error:", error);
            }
        }
    };



     useEffect(() => {
        if (eventData.length > 0) {
            const firstEvent = eventData[0];
            showEvent(
                firstEvent.date,
                firstEvent.time,
                firstEvent.info,
                firstEvent.city,
                firstEvent.country,
                firstEvent.houseNumber,
                firstEvent.postalCode,
                firstEvent.street,
                firstEvent.poi,
                firstEvent.modelName,
                firstEvent.modelSurname,
                firstEvent.modelPhone,
                firstEvent.modelEmail,
                firstEvent.type
            );
            console.log(firstEvent.type)
        }
    }, [eventData]);

    const showEvent = ( date,
                        time,
                        info,
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
                        type) => {

        let newData = {
            date: date,
            time: time,
            city: city,
            country: country,
            houseNumber: houseNumber,
            postalCode: postalCode,
            street: street,
            poi: poi,
            type: type
        }
        if (type) {
            setData(newData)
          } else {
           console.log('Event data not available')
            setData(null)
       }


    }


    const getGearNumbers = async () => {

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
            setCamerasCounter(camerasArr);
            setLensesCounter(lensesArr);
            setTripodsCounter(tripodsArr);
            setFiltersCounter(filtersArr);
            setGearCounter(gearArr);
        } catch (error) {
            console.error("Error fetching sessions:", error);
        }

    }

    return (
        <AnimatePresence>
            <motion.div
                className="app-body-container"
                key="app-body"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, ease: easeInOut }}
                    >
                <motion.div className='tile-container'>
                    <div className='gear'>
                        <h2>You currently have <span>{gearCounter.length}</span> gear items in collection.</h2>
                        <div className='gear-stats-wrapper'>
                            <div className='gear-container'>
                                <div className='gear-item'>
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <h2>: {camerasCounter.length}</h2>
                                </div>
                                <div className='gear-item'>
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
                                    <h2>: {lensesCounter.length}</h2>
                                </div>
                            </div>
                            <div className='gear-container'>
                                <div className='gear-item'>
                                    <FontAwesomeIcon icon={faCircleHalfStroke}/>
                                    <h2>: {filtersCounter.length}</h2>
                                </div>
                                <div className='gear-item'>
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
                                    <h2>: {tripodsCounter.length}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='events-counter'>
                        <h2>You have <span>{eventData.length}</span>  planned events.</h2>
                    </div>
                </motion.div>


                <motion.div className='tile-container'>

                    <div className='weather-tile'>
                        {eventData.length > 0 && weatherData ? (
                            <div className='weather-icon'>
                                <WeatherIcon condition={weatherData.current.condition.text} />
                            </div>
                        ) : (
                            <div className='weather-icon'>
                                <FontAwesomeIcon icon={faFaceFrown} />
                            </div>
                        )}
                        <div className='temp'>
                            {eventData.length > 0 && weatherData ? (
                                <>
                                    <p>{weatherData.current.temp_c}°C</p>
                                    <span>Current weather at event location.</span>
                                </>
                            ) : (
                                <p className='no-weather'>No weather data available for event location or date.</p>
                            )}
                        </div>
                    </div>

                    <div className='event-tile'>
                        {eventData.length > 0 ? (
                                <div className='eventIcon'>
                                    <EventIcon condition={data.type} />
                                </div>
                        ) : (
                            <div className='no-eventIcon'>
                                <FontAwesomeIcon icon={faCalendarXmark} />
                            </div>
                            )}

                        {eventData.length > 0 ? (
                            <div className='event-info-box'>
                                <h2 className='type'>{data.type}</h2>
                                <h2>{data.date}</h2>
                                <h2>{data.time}</h2>
                            </div>
                        ) : null }

                        {eventData.length > 0 ? (
                            <ClosestEvent
                                city={data.city}
                                country={data.country}
                                houseNumber={data.houseNumber}
                                postalCode={data.postalCode}
                                street={data.street}
                                poi={data.poi}
                            />
                        ) : (
                            <div className='no-event'>
                                <h2>No scheduled events.</h2>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};