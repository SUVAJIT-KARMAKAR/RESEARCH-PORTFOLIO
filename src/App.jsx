// src > App.jsx
import React from "react";
import './App.css'
// Components import
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <div class="container">
      <Navbar/>
      <Banner/>
    </div>
  )
}
export default App;