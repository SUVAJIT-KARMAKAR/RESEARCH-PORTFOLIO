// src > components > Experience > Experience.jsx
import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import "./Experience.modules.css";

const Experience = () => {
    return (
        <>
            <div id="experience-header"> EXPERIENCE </div>
            <div className="timeline">
                {/* Experience */}
                <div className="container left-container">
                    <LuCalendarClock size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Experience1</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="left-container-arrow"></span>
                    </div>
                </div>

                {/* Experience */}
                <div className="container right-container">
                    <LuCalendarClock size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Experience1</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="right-container-arrow"></span>
                    </div>
                </div>

                {/* Experience */}
                <div className="container left-container">
                    <LuCalendarClock size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Experience1</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="left-container-arrow"></span>
                    </div>
                </div>

                {/* Experience */}
                <div className="container right-container">
                    <LuCalendarClock size={40} className="logo"/>
                    <div className="text-box">
                    <h2>Experience1</h2>
                    <small>2018-2019</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente eius alias facilis! Voluptas eaque quae ex veritatis blanditiis explicabo.</p>
                    <span className="right-container-arrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Experience;