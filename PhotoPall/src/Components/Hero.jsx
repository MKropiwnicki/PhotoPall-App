import React from "react";
import {Card} from "./Card.jsx";
import {motion, useScroll, useTransform} from "framer-motion";

export const Hero = () => {
    return (
        <motion.section className='hero'>
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
            <div className='card-container'>
                <Card />
                <Card />
                <Card />
            </div>
        </motion.section>)
}