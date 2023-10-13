import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faCircleQuestion,
    faCloud, faCloudBolt, faCloudShowersHeavy,
    faCloudSun,
    faSmog,
    faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons";

export const WeatherIcon = ({condition}) => {
    let icon;
    if(condition === 'Sunny') {
        icon =   <FontAwesomeIcon icon={faSun}/>
    } else if (condition === 'Partly cloudy') {
        icon =   <FontAwesomeIcon icon={faCloudSun}/>
    } else if (condition === 'Cloudy' || condition === 'Overcast' ) {
        icon =   <FontAwesomeIcon icon={faCloud}/>
    } else if (condition === 'Mist' || condition === 'Fog' || condition === 'Freezing fog') {
        icon =  <FontAwesomeIcon icon={faSmog}/>
    } else if (condition === 'Snow' || condition.toLowerCase().includes('snow')) {
        icon =  <FontAwesomeIcon icon={faSnowflake}/>
    } else if (condition === 'Heavy rain' || condition.toLowerCase().includes('rain') || condition.toLowerCase().includes('showers')) {
        icon =  <FontAwesomeIcon icon={faCloudShowersHeavy}/>
    } else if (condition.toLowerCase().includes('thunder')) {
        icon =  <FontAwesomeIcon icon={faCloudBolt}/>
    } else {
        icon = <FontAwesomeIcon icon={faCircleQuestion}/>
    }

    return icon
}