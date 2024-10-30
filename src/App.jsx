// src > App.jsx
import React from "react";
import './App.css'
// Components import
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import HorizontalRule from"./components/HorizontalRule/HorizontalRule";
import Experience from "./components/Experience/Experience";
import Publication from "./components/Publications/Publication";

const App = () => {
  return (
    <div class="grid">
      <Navbar/>
      <Banner/>
      <HorizontalRule/>
      <Experience/>
      <HorizontalRule/>
      <Publication/>
    </div>
  )
}
export default App;