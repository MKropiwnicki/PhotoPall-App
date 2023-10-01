import React from "react";
import {Button} from "./Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserGear, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

export const DashboardHeader = ({logout}) => {
    return(
        <header className='dashboard-header'>
            <div className='logo-xs'>
                <h1>PhotoPall</h1>
            </div>
            <nav className='nav'>
                <Button title={<FontAwesomeIcon icon={faUserGear} />} classMod='btn user-btn'/>
                <Button onClick={logout} title={<FontAwesomeIcon icon={faRightFromBracket} />} classMod='btn logout-btn'/>
            </nav>
        </header>
    )
}