import React, {useRef, useState} from "react";
import {Header} from "./Header.jsx";
import {motion, useScroll, useTransform} from "framer-motion";
import {HeroText} from "./HeroText.jsx";
import {LoginModal} from "./LoginModal.jsx";
import {RegisterModal} from "./RegisterModal.jsx";
import {SuccessModal} from "./SuccessModal.jsx";
import {ErrorModal} from "./ErrorModal.jsx";
import {NoUser} from "./NoUser.jsx";

export const Parallax = () => {

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [noUser, setNoUser] = useState(false)


    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const toggleLogin = () => {
      setLoginModal(!loginModal);
      setRegisterModal(false);
    }

    const toggleRegister = () => {
        setRegisterModal(!registerModal);
        setLoginModal(false);
    }


    const openSuccess = () => {
        setSuccessModal(true);
    }

    const openError = () => {
        setErrorModal(true);
    }

    const closeSuccess = () => {
        setSuccessModal(false);
    }
    const closeError = () => {
        setErrorModal(false);
    }

    const openNoUser = () => {
        setNoUser(true);
    }

    const closeNoUser = () => {
        setNoUser(false);
    }

    const smallCloudAxisX = useTransform(scrollYProgress, [0,1], ['0%', '-30%']);
    const mediumCloudAxisX = useTransform(scrollYProgress, [0,1], ['0%', '80%']);
    const bigCloudAxisX= useTransform(scrollYProgress, [0,1], ['0%', '-50%']);

    const skyAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
    const starsAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '110%']);
    const farCloudsAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '140%']);
    const moonAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '150%']);
    const smallCloudAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
    const mediumCloudAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
    const bigCloudAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '100%']);
    const mtFarAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '130%']);
    const mtCloseAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '110%']);
    const balloonBigAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '30%']);
    const balloonSmallAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '70%']);
    const foregroundAxisY  = useTransform(scrollYProgress, [0,1], ['0%', '90%']);


    return(
            <div ref={ref} className='main-container'>
                <Header toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>
                <HeroText/>
                {loginModal && (
                    <LoginModal toggleModal={toggleLogin} toggleRegister={toggleRegister} openNoUser={openNoUser} title='Login'/>
                )}
                {registerModal && (
                    <RegisterModal toggleModal={toggleRegister} toggleLogin={toggleLogin} openSuccess={openSuccess} openError={openError} isVisible={registerModal} title='Register'/>
                )}

                {successModal && (
                    <SuccessModal closeModal={closeSuccess}  title='Close'/>
                )}

                {errorModal && (
                    <ErrorModal closeModal={closeError} title='Close'/>
                )}

                {noUser && (
                    <NoUser closeModal={closeNoUser} title='Close'/>
                )}


                <motion.div style={{y: balloonBigAxisY}} className='balloon-big'></motion.div>
                <motion.div style={{y: foregroundAxisY}} className='foreground'></motion.div>
                <motion.div style={{y: balloonSmallAxisY}} className='balloon-small'></motion.div>
                <motion.div style={{y: mtCloseAxisY}} className='mt-close'></motion.div>
                <motion.div style={{y: mtFarAxisY}} className='mt-far'></motion.div>
                <motion.div style={{x: bigCloudAxisX, y: bigCloudAxisY}} className='big-cloud'></motion.div>
                <motion.div style={{x: mediumCloudAxisX, y: mediumCloudAxisY}} className='medium-cloud'></motion.div>
                <motion.div style={{x: smallCloudAxisX, y: smallCloudAxisY}} className='small-cloud'></motion.div>
                <motion.div style={{y: moonAxisY}} className='moon'></motion.div>
                <motion.div style={{y: farCloudsAxisY}} className='far-clouds'></motion.div>
                <motion.div style={{y: starsAxisY}} className='stars'></motion.div>
                <motion.div style={{y: skyAxisY}} className='sky'></motion.div>
            </div>
        )
}