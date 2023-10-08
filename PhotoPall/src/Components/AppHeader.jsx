import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUserGear,
    faRightFromBracket,
    faHouse,
    faMountainSun,
    faCamera,
    faRectangleList, faCalendarPlus, faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

export const AppHeader = ({goHome, goGear, goCollection, goEvents, goEvent, title}) => {
    return(
        <header className='dashboard-header'>
            <div className='logo-xs'>
                <h1>{title}</h1>
            </div>
            <nav className='menu-container'>
                    <button className='nav-btn' onClick={goHome}><FontAwesomeIcon icon={faHouse}/><br/><span>Home</span></button>
                    <button className='nav-btn' onClick={goGear}><FontAwesomeIcon icon={faCamera}/><br/><span>Add gear</span></button>
                    <button className='nav-btn' onClick={goCollection}><FontAwesomeIcon icon={faRectangleList}/><br/><span>Gear collection</span></button>
                    <button className='nav-btn' onClick={goEvent}><FontAwesomeIcon icon={faCalendarPlus}/><br/><span>Add event</span></button>
                    <button className='nav-btn' onClick={goEvents}><FontAwesomeIcon icon={faCalendarDays}/><br/><span>Events</span></button>
            </nav>
        </header>)
}