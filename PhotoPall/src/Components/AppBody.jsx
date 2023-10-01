import React from "react";
import {AppTile} from "./AppTile.jsx";
import {AppTileBig} from "./AppTileBig.jsx";

export const AppBody = () => {
    return(
        <div class='app-body-container'>
            <AppTile size='tile-normal'/>
            <AppTile size='tile-normal'/>
            <AppTileBig size='tile-big'/>
        </div>
    )
}