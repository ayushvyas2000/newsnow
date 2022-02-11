import React from "react";
import './header.scss'
const Header=()=>{
    return(
        <header className="app-bar">
        <div className=" app-bar-container">
        <h2 className="app-title">News Now</h2>
        <p className="app-maker">Get the latest news by category</p>
        </div>
        </header>
    )
}

export default Header