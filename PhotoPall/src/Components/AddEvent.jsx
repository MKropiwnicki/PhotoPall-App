import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import {AppBody} from "./AppBody.jsx";
import {AppHeader} from "./AppHeader.jsx";
import {AddEventBody} from "./AddEventBody.jsx";

export const AddEvent = () => {
    const navigate = useNavigate();


    const handleHome = () => {
        navigate('/dashboard')

    };

    const handleAddGear = () => {
        navigate('/add-gear')

    };

    const handleGearCollection = () => {
        navigate('/gear-collection')

    };

    const handleAddEvent = () => {
        navigate('/add-event')
    }

    const handleEvents = () => {
        navigate('/events')

    };

    return (
        <div className='dashboard-container'>
            <AppHeader goHome={handleHome} goGear={handleAddGear} goCollection={handleGearCollection} goEvent={handleAddEvent} goEvents={handleEvents} title='Add event'/>
            <AddEventBody/>
        </div>
    );
};