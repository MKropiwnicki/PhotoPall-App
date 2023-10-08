import React from "react";
import {ActionTile} from "./ActionTile.jsx";
import {useNavigate} from "react-router-dom";


export const AppTile = ({size}) => {
    const navigate = useNavigate();
    const goToGear = () => {
        navigate('/add-gear')
    }

    return(
        <div className={size}>
            <ActionTile goToGear={goToGear}/>
            <ActionTile/>
        </div>
    )
}