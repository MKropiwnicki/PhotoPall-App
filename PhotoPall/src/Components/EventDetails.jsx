import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";

export const EventDetails = ({info, kit, city, country, houseNumber, postalCode, street, poi, modelName, modelSurname, modelPhone, modelEmail, isActive}) => {


 return (
     <div className='event-info-container'>
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
             <div className='kit'>
                 <h2>Kit:</h2>
                 <ul>
                     <li><span>{kit}</span></li>
                 </ul>
             </div>
         </div>
         <div className='block'>
             <div className='model'>
                 <h2>Model:</h2>
                 <ul>
                     <li>Name: <span>{modelName}</span> </li>
                     <li>Surname: <span>{modelSurname}</span> </li>
                     <li>Phone: <span>{modelPhone}</span> </li>
                     <li>Email: <span>{modelEmail}</span></li>
                 </ul>
             </div>
             <div className='info'>
                 <h2>Additional info:</h2>
                 <p>{info}</p>
             </div>
         </div>
     </div>
 )
}