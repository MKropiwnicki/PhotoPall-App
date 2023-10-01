import React from "react";
import {ActionTile} from "./ActionTile.jsx";

export const AppTile = ({size}) => {
    return(
        <div className={size}>
            <ActionTile/>
            <ActionTile/>
        </div>
    )
}