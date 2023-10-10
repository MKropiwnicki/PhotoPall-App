import React from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faCamera, faGears} from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
    return (
        <section className='hero'>
            <AnimatePresence>
                <motion.div className='logo-container'
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                    <h1>PhotoPall</h1>
                </motion.div>
                <motion.div className='card-container'>

                    <motion.div className='card'>
                        <FontAwesomeIcon icon={faCamera} />
                        <h2>Gear</h2>
                        <div className='card-content'>
                            <p>Create collections and kits to easily manage your photography equipment. Attach prepared kits to your planned sessions to never forget about essential gear again.</p>
                        </div>


                    </motion.div>

                    <motion.div className='card'>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <h2>Events</h2>
                        <div className='card-content'>
                            <p>Plan and organize your events, from weddings to landscape shoots. With PhotoPall, you'll never miss even the smallest detail.</p>
                        </div>

                    </motion.div>

                    <motion.div className='card'>
                        <FontAwesomeIcon icon={faGears} />
                        <h2>Features</h2>
                        <div className='card-content'>
                            <p>New features are on the way. Don't miss out on anything by subscribing to our newsletter.</p>
                        </div>

                    </motion.div>

                </motion.div>
            </AnimatePresence>

        </section>)
}