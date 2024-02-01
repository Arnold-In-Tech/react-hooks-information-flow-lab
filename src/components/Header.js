import React from "react";


function Header({onDarkModeClick, isDarkModeValue}){

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {isDarkModeValue ? "Dark" : "Light"} Mode
            </button>
        </header>
    )

}

export default Header
