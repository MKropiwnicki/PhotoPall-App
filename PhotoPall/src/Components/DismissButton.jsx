import React from "react";

export const DismissButton = ({onClick, title}) => {
    return(
        <button onClick={onClick}  className='dismiss-btn'>{title}</button>
    )
}