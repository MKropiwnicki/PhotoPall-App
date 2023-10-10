import React, {useEffect, useState} from 'react';
import {auth, db} from "../firebase.js";
import { collection, doc, getDocs, arrayUnion, addDoc, setDoc, query } from "firebase/firestore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleHalfStroke,
    faCamera,
    faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Button.jsx";
import {ActionSavedModal} from "./ActionSavedModal.jsx";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
import {KitSavedModal} from "./KitSavedModal.jsx";

export const AddGearBody = () => {


    const [cameraBrand, setCameraBrand] = useState('');
    const [cameraModel, setCameraModel] = useState('');
    const [lensBrand, setLensBrand] = useState('');
    const [lensModel, setLensModel] = useState('');
    const [tripodBrand, setTripodBrand] = useState('');
    const [tripodModel, setTripodModel] = useState('');
    const [filterBrand, setFilterBrand] = useState('');
    const [filterModel, setFilterModel] = useState('');
    const [kitName, setKitName] = useState('');
    const [kitCameras, setKitCameras] = useState('');
    const [kitLenses, setKitLenses] = useState('');
    const [kitTripods, setKitTripods] = useState('');
    const [kitFilters, setKitFilters] = useState('');

    const [actionModal, setActionModal] = useState(false);
    const [kitModal, setKitModal] = useState(false);

    const [camerasData, setCamerasData] = useState([]);
    const [lensesData, setLensesData] = useState([]);
    const [tripodsData, setTripodsData] = useState([]);
    const [filtersData, setFiltersData] = useState([]);

    // useEffect(() => {
    //     const fetchGear = async () => {
    //         try {
    //             await getGear();
    //         } catch (error) {
    //             console.error("Error fetching gear:", error);
    //         }
    //     };
    //     fetchGear();
    // }, [cameraBrand, cameraModel, lensBrand, lensModel, tripodBrand, tripodModel, filterBrand, filterModel]);
    //
    //
    // const toggleEventModal = () => {
    //     setActionModal(!actionModal);
    // }
    //
    // const toggleKitModal = () => {
    //     setKitModal(!kitModal);
    // }
    //
    //
    // const handleCamera = async (e) => {
    //     e.preventDefault();
    //
    //     const userDocRef = doc(db, "users", auth.currentUser.uid);
    //     const camerasCollectionRef = collection(userDocRef, "cameras");
    //     console.log(camerasCollectionRef);
    //
    //     const newCamera = {
    //         cameraBrand: cameraBrand,
    //         cameraModel: cameraModel
    //     };
    //
    //     try {
    //         await addDoc(camerasCollectionRef, newCamera)
    //         setCameraBrand('');
    //         setCameraModel('');
    //         setActionModal(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    //
    // }
    //
    // const handleLens = async (e) => {
    //     e.preventDefault();
    //
    //     const userDocRef = doc(db, "users", auth.currentUser.uid);
    //     const lensesCollectionRef = collection(userDocRef, "lenses");
    //     console.log(lensesCollectionRef);
    //
    //     const newLens = {
    //         lensBrand: lensBrand,
    //         lensModel: lensModel
    //     };
    //
    //     try {
    //         await addDoc(lensesCollectionRef, newLens)
    //         setLensBrand('');
    //         setLensModel('');
    //         setActionModal(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // const handleTripod = async (e) => {
    //     e.preventDefault();
    //
    //     const userDocRef = doc(db, "users", auth.currentUser.uid);
    //     const tripodsCollectionRef = collection(userDocRef, "tripods");
    //     console.log(tripodsCollectionRef);
    //
    //     const newTripod = {
    //         tripodBrand: tripodBrand,
    //         tripodModel: tripodModel
    //     };
    //
    //     try {
    //         await addDoc(tripodsCollectionRef, newTripod)
    //         setTripodBrand('');
    //         setTripodModel('');
    //         setActionModal(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // const handleFilter = async (e) => {
    //     e.preventDefault();
    //
    //     const userDocRef = doc(db, "users", auth.currentUser.uid);
    //     const filtersCollectionRef = collection(userDocRef, "filters");
    //     console.log(filtersCollectionRef);
    //
    //     const newFilter = {
    //         filterBrand: filterBrand,
    //         filterModel: filterModel
    //     };
    //
    //     try {
    //         await addDoc(filtersCollectionRef, newFilter)
    //         setFilterBrand('');
    //         setFilterModel('');
    //         setActionModal(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // const handleKit = async (e) => {
    //     e.preventDefault();
    //
    //     const userDocRef = doc(db, "users", auth.currentUser.uid);
    //     const filtersCollectionRef = collection(userDocRef, "kits");
    //     console.log(filtersCollectionRef);
    //
    //     const newKit = {
    //         name: kitName,
    //         cameras: kitCameras,
    //         lenses: kitLenses,
    //         tripods: kitTripods,
    //         filters: kitFilters
    //     };
    //
    //     try {
    //         await addDoc(filtersCollectionRef, newKit)
    //         setKitName('');
    //         setKitCameras('');
    //         setKitLenses('');
    //         setKitTripods('');
    //         setKitFilters('');
    //         setKitModal(true)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    //
    // const getGear = async () => {
    //
    //     if (!auth.currentUser) {
    //                 return;
    // }
    //
    //     const cameraQuery = query(collection(db, 'users', auth.currentUser.uid, 'cameras'));
    //     const lensesQuery = query(collection(db, 'users', auth.currentUser.uid, 'lenses'));
    //     const tripodsQuery = query(collection(db, 'users', auth.currentUser.uid, 'tripods'));
    //     const filtersQuery = query(collection(db, 'users', auth.currentUser.uid, 'filters'));
    //
    //     try {
    //                 const querySnapshot = await getDocs(cameraQuery);
    //                 const camerasArr = [];
    //                 querySnapshot.forEach((doc) => {
    //                     const data = doc.data();
    //                     const brand = data.cameraBrand;
    //                     const model = data.cameraModel;
    //
    //                     camerasArr.push({ id: doc.id, brand, model});
    //                 });
    //                 setCamerasData(camerasArr);
    //             } catch (error) {
    //                 console.error("Error fetching sessions:", error);
    //             }
    //
    //     try {
    //         const querySnapshot = await getDocs(lensesQuery);
    //         const lensesArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.lensBrand;
    //             const model = data.lensModel;
    //
    //             lensesArr.push({ id: doc.id, brand, model});
    //         });
    //         setLensesData(lensesArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //     try {
    //         const querySnapshot = await getDocs(tripodsQuery);
    //         const tripodsArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.tripodBrand;
    //             const model = data.tripodModel;
    //
    //             tripodsArr.push({ id: doc.id, brand, model});
    //         });
    //         setTripodsData(tripodsArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    //     try {
    //         const querySnapshot = await getDocs(filtersQuery);
    //         const filtersArr = [];
    //         querySnapshot.forEach((doc) => {
    //             const data = doc.data();
    //             const brand = data.filterBrand;
    //             const model = data.filterModel;
    //
    //             filtersArr.push({ id: doc.id, brand, model});
    //         });
    //         setFiltersData(filtersArr);
    //     } catch (error) {
    //         console.error("Error fetching sessions:", error);
    //     }
    //
    // }



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
            <div className='add-gear-body-container'>
                <div className='add-gear-icon-container'>
                    <div className='gear-icon'>
                        <FontAwesomeIcon icon={faCamera}/>
                    </div>
                </div>

                <motion.div className='form-container'
                            key='noUser'
                            initial={{opacity: 0, scale: 0 }}
                            animate={{opacity: 1, scale: 1, transition: {type: "spring", stiffness: 100}}}
                            exit={{opacity: 0, scale: 0}}
                            transition={{duration: 0.2, ease: easeInOut}}>
                    {actionModal && (
                        <ActionSavedModal toggleActionModal={toggleEventModal} content='Gear added to collection.' title='Close'/>
                    )}
                    {kitModal && (
                        <KitSavedModal toggleKitModal={toggleKitModal} content='Kit created.' title='Close'/>
                    )}
                    <div className='wrapper'>
                        <div className='gear-wrapper'>
                            <div className='gear-form-box'>
                                <form>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faCamera}/>
                                            <h2>Camera body</h2>
                                        </div>
                                        <label htmlFor='camera-brand'>Brand:</label>
                                        <input value={cameraBrand} onChange={(e) => setCameraBrand(e.target.value)} type='text' id='camera-brand' placeholder='Brand'/>
                                        <label htmlFor='camera-model'>Model:</label>
                                        <input value={cameraModel} onChange={(e) => setCameraModel(e.target.value)} type='text' id='camera-model' placeholder='Model'/>
                                    </div>
                                    <div className='add-btn-box'>
                                        <Button onClick={handleCamera} title='Add' classMod='add-btn' />
                                    </div>
                                </form>

                                <form>
                                    <div className='box'>
                                        <div className='icon-box'>
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
                                            <h2>Lens</h2>
                                        </div>
                                        <label htmlFor='lens-brand'>Brand:</label>
                                        <input value={lensBrand} onChange={(e) => setLensBrand(e.target.value)} type='text' id='lens-brand' placeholder='Brand'/>
                                        <label htmlFor='lens-model'>Model:</label>
                                        <input value={lensModel} onChange={(e) => setLensModel(e.target.value)} type='text' id='lens-model' placeholder='Model'/>
                                    </div>
                                    <div className='add-btn-box'>
                                        <Button onClick={handleLens} title='Add' classMod='add-btn' />
                                    </div>
                                </form>

                            </div>

                            <div className='gear-form-box'>
                                <form>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="48"
                                                height="48"
                                                viewBox="0 0 96.5 122.88"
                                                fill='white'
                                            >
                                                <path
                                                    d="M22,6.07V7.45H36.13V3.78A3.79,3.79,0,0,1,39.91,0H72.15a3.79,3.79,0,0,1,3.77,3.78V16a3.79,3.79,0,0,1-3.77,3.78H60.48v5.34h6.67a2.61,2.61,0,0,1,2.6,2.6v1h2.4a3.79,3.79,0,0,1,3.77,3.78v3.9a3.79,3.79,0,0,1-3.77,3.78H59.87a3.4,3.4,0,0,1,1.06,1.22L83.6,84.89l.52-.27a1.9,1.9,0,0,1,2.56.8l9.6,18.43a1.9,1.9,0,0,1-.8,2.56l-.52.27,1,2a3.5,3.5,0,0,1-6.22,3.23l-1-2-.31.16a1.91,1.91,0,0,1-2.56-.8l-9.6-18.43a1.91,1.91,0,0,1,.8-2.56l.31-.16L59.54,53.89V92.54h.34a1.9,1.9,0,0,1,1.9,1.9v20.78a1.9,1.9,0,0,1-1.9,1.89h-.34v2.26a3.51,3.51,0,0,1-7,0v-2.26h-.58a1.9,1.9,0,0,1-1.9-1.89V94.44a1.9,1.9,0,0,1,1.9-1.9h.58V52.07L33.73,88.13l.31.16a1.91,1.91,0,0,1,.8,2.56l-9.6,18.43a1.91,1.91,0,0,1-2.56.8l-.31-.16-1,2a3.5,3.5,0,0,1-6.22-3.23l1-2-.52-.27a1.9,1.9,0,0,1-.8-2.56l9.6-18.43a1.9,1.9,0,0,1,2.56-.8l.52.27L50.18,41.38a3.4,3.4,0,0,1,1.06-1.22H39.91a3.79,3.79,0,0,1-3.78-3.78v-3.9a3.79,3.79,0,0,1,3.78-3.78H42.3v-1a2.61,2.61,0,0,1,2.61-2.6h6.67V19.79H39.91A3.79,3.79,0,0,1,36.13,16V12H22v1.14a1.7,1.7,0,0,1-1.7,1.7H1.69A1.7,1.7,0,0,1,0,13.16V6.07a1.7,1.7,0,0,1,1.69-1.7H20.25A1.7,1.7,0,0,1,22,6.07ZM65.78,4.63a5,5,0,1,1-5,5,5,5,0,0,1,5-5Z"
                                                />
                                            </svg>
                                            <h2>Tripod</h2>
                                        </div>
                                        <label htmlFor='tripod-brand'>Brand:</label>
                                        <input value={tripodBrand} onChange={(e) => setTripodBrand(e.target.value)} type='text' id='tripod-brand' placeholder='Brand'/>
                                        <label htmlFor='tripod-model'>Model:</label>
                                        <input value={tripodModel} onChange={(e) => setTripodModel(e.target.value)} type='text' id='tripod-model' placeholder='Model'/>
                                    </div>
                                    <div className='add-btn-box'>
                                        <Button onClick={handleTripod} title='Add' classMod='add-btn' />
                                    </div>
                                </form>

                                <form>
                                    <div className='box'>
                                        <div className='icon-box'>
                                            <FontAwesomeIcon icon={faCircleHalfStroke}/>
                                            <h2>Filter</h2>
                                        </div>
                                        <label htmlFor='filter-brand'>Brand:</label>
                                        <input value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)} type='text' id='filter-brand' placeholder='Brand'/>
                                        <label htmlFor='filter-model'>Model:</label>
                                        <input value={filterModel} onChange={(e) => setFilterModel(e.target.value)} type='text' id='filter-model' placeholder='Model'/>
                                    </div>
                                    <div className='add-btn-box'>
                                        <Button onClick={handleFilter} title='Add' classMod='add-btn' />
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className='kit-wrapper'>
                            <form>
                                <div className='box select-box'>
                                    <div className='icon-box'>
                                        <FontAwesomeIcon icon={faScrewdriverWrench}/>
                                        <h2>Create kit</h2>
                                    </div>
                                    <label htmlFor='kit-name'>Kit name:</label>
                                    <input value={kitName} onChange={(e) => setKitName(e.target.value)} type='text' id='kit-name' placeholder='Kit name'/>

                                    <label htmlFor="cameras">Choose camera body:</label>
                                    <select
                                        value={kitCameras}
                                        onChange={(e) => setKitCameras(e.target.value)}
                                        name="cameras"
                                        id="cameras"
                                    >
                                        <option value="">Choose camera body:</option>
                                        {camerasData.map((camera) => (
                                            <option key={camera.id} value={`${camera.brand} ${camera.model}`}>
                                                {camera.brand} {camera.model}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="lenses">Choose lens:</label>
                                    <select
                                        value={kitLenses}
                                        onChange={(e) => setKitLenses(e.target.value)}
                                        name="lenses"
                                        id="lenses"
                                    >
                                        <option value="">Choose lens:</option>
                                        {lensesData.map((lens) => (
                                            <option key={lens.id} value={`${lens.brand} ${lens.model}`}>
                                                {lens.brand} {lens.model}
                                            </option>
                                        ))}
                                    </select>


                                    <label htmlFor="tripods">Choose tripod:</label>
                                    <select
                                        value={kitTripods}
                                        onChange={(e) => setKitTripods(e.target.value)}
                                        name="tripods"
                                        id="tripods"
                                    >
                                        <option value="">Choose tripod:</option>
                                        {tripodsData.map((tripod) => (
                                            <option key={tripod.id} value={`${tripod.brand} ${tripod.model}`}>
                                                {tripod.brand} {tripod.model}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="filters">Choose filter:</label>
                                    <select
                                        value={kitFilters}
                                        onChange={(e) => setKitFilters(e.target.value)}
                                        name="filters"
                                        id="filters"
                                    >
                                        <option value="">Choose filter:</option>
                                        {filtersData.map((filter) => (
                                            <option key={filter.id} value={`${filter.brand} ${filter.model}`}>
                                                {filter.brand} {filter.model}
                                            </option>
                                        ))}
                                    </select>


                                </div>
                                <div className='add-btn-box'>
                                    <Button onClick={handleKit} title='Create' classMod='add-btn' />
                                </div>
                            </form>
                        </div>





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
                </motion.div>
            </div>
        </AnimatePresence>
    );
};