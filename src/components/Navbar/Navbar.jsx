// src > components > Navbar > Navbar.jsx 
import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import './Navbar.modules.css';

const Navbar = () => {
    // useRef hook for responsive navigation
    const navigationRef = useRef();
    // function for toggle 
    const showNavigationBar = () => {
        navigationRef.current.classList.toggle("navigation-toggle");
    }

    return ( 
        <header className="navbar">
            <div className="navbar-text"> <h2> MANOSWITA </h2> </div>
            <nav className="navbar-links" ref={navigationRef}>
                <a href="#experience-header"> EXPERIENCE </a>
                <a href="#publication-header"> PUBLICATIONS </a>
                <a href="#"> AWARDS </a>
                <a href="#" className="cv-button"> DOWNLOAD CV </a>
                {/* Navigation close button */}
                <button className="navbar-button navbar-close-button"onClick={showNavigationBar}>
                    <RxCrossCircled
                    size={40}
                    />
                </button>
            </nav>
            {/* Navigation open button */}
            <button className="navbar-button" onClick={showNavigationBar}>
                <GiHamburgerMenu
                size={30}
                />
            </button>
        </header>
    )
};
export default Navbar;