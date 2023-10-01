import React from "react";
import {Button} from "./Button.jsx";

export const Header = ({toggleLogin, toggleRegister}) => {
    return(
        <header className='header'>
            <div className='logo-xs'>
                <h1>PhotoPall</h1>
            </div>
            <nav className='nav'>
              <Button onClick={toggleLogin} title='Login' classMod='btn login-btn'/>
              <Button onClick={toggleRegister} title='Register' classMod='btn register-btn'/>
            </nav>
        </header>
    )
}