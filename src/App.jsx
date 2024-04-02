import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import Logout from "./components/Logout.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CurrencyRates from './components/CurrencyRates';


// import ThemeContext from "./ThemeContext";

import Footer from './components/blocks/Footer.jsx';
import Navigation from "./components/blocks/Navigation.jsx";
import './main.css';

function App() {

    return (
        
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/gallery" element=
                        {
                            <PrivateRoute >
                                <Gallery />
                            </ PrivateRoute >
                        } />

                    <Route path="/currency" element={<CurrencyRates />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/services" element={<Services />} />

                    <Route path="/login" element=
                        {
                            <PublicRoute >
                                <Login />
                            </ PublicRoute >
                        } />
                    <Route path="/registration" element={
                        <PublicRoute >
                            <Registration />
                        </ PublicRoute >
                    } />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App;