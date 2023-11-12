import React, { useEffect, useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Games from "./Pages/Games";
import DetailGames from "./Pages/Detail Games";
import GamesPublishers from "./Pages/Publishers";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/Scroll Top Page/ScrollTopPage";
import BackToTopButton from "./Components/Back To Top Button";
import DetailGameTab from "./Pages/Detail Games/Detail Games Tabs";
import GameDevelopers from "./Pages/Developers";
import ErrorPage from "./Pages/Error";

function App() {

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
      <Route element={<ErrorPage />} path="*" />
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/port" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Games />} path="/games" />
        <Route element={<DetailGames />} path="/detail/:id" />
        <Route element={<DetailGameTab />} path="/detail/" />
        <Route element={<GamesPublishers/>} path="publisher/:id"/>
        <Route element={<GameDevelopers/>} path="developers/:id"/>
      </Routes>
      <BackToTopButton />
      <Footer />
    </>
  )
}

export default App
