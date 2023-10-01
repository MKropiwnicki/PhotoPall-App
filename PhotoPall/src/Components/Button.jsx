import React from "react";

export const Button = ({onClick, title, classMod}) => {
    return(
        <button onClick={onClick} className={classMod}>{title}</button>
    )
}