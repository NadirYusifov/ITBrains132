import React, { useEffect, useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="sweet-loading"> {
loading ?
      <ClipLoader
        color={"black"}
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:
    <>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/port" />
      </Routes>
      
    </>
    }
    </div>
  )
}

export default App
