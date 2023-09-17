import React, { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/taskai/" element={<Home />} />
          <Route path="/taskai/about" element={<About />} />
          <Route path="/taskai/contact" element={<Contact />} />
          <Route path="/taskai/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
