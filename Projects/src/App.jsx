import React from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/port" />
      </Routes>
    </>
  )
}

export default App
