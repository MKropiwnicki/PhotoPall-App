import React from "react";
import {Button} from "./Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUserGear,
    faRightFromBracket,
    faHouse,
    faCamera,
    faRectangleList,
    faCalendarPlus, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

export const DashboardHeader = ({goHome, goGear, goCollection, goEvents, goEvent, logout}) => {
    return(
        <header className='dashboard-header'>
            <div className='logo-xs'>
                <h1>PhotoPall</h1>
            </div>
                <nav className='menu-container'>
                    <button className='nav-btn' onClick={goHome}><FontAwesomeIcon icon={faHouse}/><br/><span>Home</span></button>
                    <button className='nav-btn' onClick={goGear}><FontAwesomeIcon icon={faCamera}/><br/><span>Add gear</span></button>
                    <button className='nav-btn' onClick={goCollection}><FontAwesomeIcon icon={faRectangleList}/><br/><span>Gear collection</span></button>
                    <button className='nav-btn' onClick={goEvent}><FontAwesomeIcon icon={faCalendarPlus}/><br/><span>Add event</span></button>
                    <button className='nav-btn' onClick={goEvents}><FontAwesomeIcon icon={faCalendarDays}/><br/><span>Events</span></button>
                    <button className='nav-btn logout-btn' onClick={logout}><FontAwesomeIcon icon={faRightFromBracket}/><br/><span>Logout</span></button>
                </nav>
        </header>
    )
}