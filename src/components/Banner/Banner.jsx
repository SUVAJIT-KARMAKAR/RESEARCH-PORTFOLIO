// src > components > Banner > Banner.jsx 
import React from "react";
import HeaderImage from "../../../public/Header-image.png";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./Banner.modules.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-image">
                <img src={HeaderImage} alt="Profile"/>
            </div>
            <div className="banner-header">
                <h1> MANOSWITA BOSE</h1>
                <p className="secondary-header"> Christ University, Bangalore</p>
                <p className="banner-description">
                    Hello, World!
                    <br />
                    I’m Manoswita, a tech enthusiast and aspiring researcher who loves to dive into the fascinating intersections of artificial intelligence, data science, machine learning, and natural language processing. With a passion for leveraging data to address real-world challenges, my projects span predictive modeling, data visualization, recommendation systems, and so on - all aimed at creating a more supportive digital world.
                    <br />
                    <br />
                    When away from my laptop, you'll find me buried in a gripping novel, working on a new write-up, shedding tears over some heartbreaking film, treating myself to hot chocolate, or indulging in a bit of retail therapy.
                </p>
                <div className="banner-links">
                    <a href="#"><FaGoogleScholar size={35}/></a>
                    <a href="#"><FaGithub size={35}/></a>
                    <a href="#"><FaLinkedin size={35}/></a>
                    <a href="#"><FaSquareXTwitter size={35}/></a>
                    <a href="#"><FaFacebookSquare size={35}/></a>
                    <a href="#"><FaInstagram size={35}/></a>
                </div>
            </div>
    </div>
    )
};
export default Banner;