import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {DashboardHeader} from "./DashboardHeader.jsx";
import {AppBody} from "./AppBody.jsx";

export const Dashboard = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    console.log(user.email);

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

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className='dashboard-container'>
            <DashboardHeader goHome={handleHome} goGear={handleAddGear} goCollection={handleGearCollection} goEvent={handleAddEvent} goEvents={handleEvents} logout={handleLogout}/>
            <AppBody />
        </div>
    );
};
