import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import NotFound from "./components/pages/NotFound.jsx";

import Footer from './components/Footer.jsx';
import Navigation from "./components/Navigation.jsx";
import './main.css';

function App() {

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path={"gallery"} element={<Gallery/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;