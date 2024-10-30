// src/components/Banner/Banner.jsx
import React, { useEffect, useRef } from "react";
import HeaderImage from "../../assets/Header-image.png";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./Banner.modules.css";

const Banner = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    bannerRef.current.classList.add("animate");
                }
            },
            { threshold: 0.3 } // Adjust this threshold to control when the animation starts
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
        };
    }, []);

    return (
        <div className="banner" ref={bannerRef}>
            <div className="banner-image">
                <img src={HeaderImage} alt="Profile" />
            </div>
            <div className="banner-header">
                <h1> MANOSWITA BOSE</h1>
                <p className="secondary-header"> Christ University, Bangalore</p>
                <p className="banner-description">
                    Hello, World!
                    <br />
                    <br />
                    I’m Manoswita, a tech enthusiast and aspiring researcher who loves to dive into the fascinating intersections of artificial intelligence, data science, machine learning, and natural language processing. With a passion for leveraging data to address real-world challenges, my projects span predictive modeling, data visualization, recommendation systems, and so on - all aimed at creating a more supportive digital world.
                    <br />
                    <br />
                    When away from my laptop, you'll find me buried in a gripping novel, working on a new write-up, shedding tears over some heartbreaking film, treating myself to hot chocolate, or indulging in a bit of retail therapy.
                </p>
                <div className="banner-links">
                    <a href="#"><FaGoogleScholar size={35} /></a>
                    <a href="https://github.com/manoswita-bose"><FaGithub size={35} /></a>
                    <a href="https://www.linkedin.com/in/manoswita-bose-467061244/"><FaLinkedin size={35} /></a>
                    <a href="https://www.facebook.com/bose.manoswita.2001"><FaFacebookSquare size={35} /></a>
                    <a href="https://www.instagram.com/bose_manoswita/?igsh=MXhvZXkxMnk2cTMxYg%3D%3D#"><FaInstagram size={35} /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
