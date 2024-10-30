// src > App.jsx
import React from "react";
import './App.css'
// Components import
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import HorizontalRule from"./components/HorizontalRule/HorizontalRule";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div class="container">
      <Navbar/>
      <Banner/>
      <HorizontalRule/>
      <Experience/>
    </div>
  )
}
export default App;