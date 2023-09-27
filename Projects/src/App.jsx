import React, { useEffect, useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Games from "./Pages/Games";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/port" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Games/>} path="/games"/>
      </Routes>

    </>
  )
}

export default App
