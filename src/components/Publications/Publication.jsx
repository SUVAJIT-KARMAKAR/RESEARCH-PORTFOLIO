// src > componenets > Publications > Publications.jsx
// src > components > Experience > Experience.jsx
import React from "react";
import { SlNotebook } from "react-icons/sl";
import "./Publication.modules.css";

const Publication = () => {
    return (
        <>
            <div id="publication-header"> PUBLICATIONS </div>
            <div className="timeline">
                {/* Publication */}
                <div className="container left-container">
                    <SlNotebook size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Publication1</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="left-container-arrow"></span>
                    </div>
                </div>

                {/* Publication */}
                <div className="container right-container">
                    <SlNotebook size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Publication2</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="right-container-arrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Publication;