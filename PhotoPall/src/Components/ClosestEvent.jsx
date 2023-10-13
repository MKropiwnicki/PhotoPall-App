import React from "react";


export const ClosestEvent = ({ city, country, houseNumber, postalCode, street, poi }) => {


    return (
        <div className='closest-event-info-container'>
            <div className='block'>
                <div className='location'>
                    <h2>Location:</h2>
                    <ul>
                        <li>Street: <span>{street}</span> </li>
                        <li>House number:<span>{houseNumber}</span></li>
                        <li>Postal code: <span>{postalCode}</span></li>
                        <li>City:<span>{city}</span> </li>
                        <li>Country: <span>{country}</span></li>
                        <li>Point of interest: <span>{poi}</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}