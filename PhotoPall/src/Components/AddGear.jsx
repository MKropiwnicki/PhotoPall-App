import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AppHeader} from "./AppHeader.jsx";
import {AddGearBody} from "./AddGearBody.jsx";

export const AddGear = () => {
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
            <AppHeader goHome={handleHome} goGear={handleAddGear} goCollection={handleGearCollection} goEvent={handleAddEvent} goEvents={handleEvents} title='Add gear'/>
            <AddGearBody/>
        </div>
    );
};
