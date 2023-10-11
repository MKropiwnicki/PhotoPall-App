import React from "react";

export const AddGearButton = ({title, classMod}) => {
    return(
        <button type='submit' className={classMod}>{title}</button>
    )
}