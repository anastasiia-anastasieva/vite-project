import { useSelector, useDispatch } from 'react-redux';
import { incrementLikes, decrementLikes } from '../../store/actions/likesActions';

import DanyaGeelyMK from "../../assets/geely.jpg";
import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import NavHistory from "../NavHistory.jsx";
import "../../main.css";// Імпортуємо файли стилів для компонента Navigation
import { useAuthStatus } from '../../hooks/useAuthStatus';

import { Typography, Box } from '@mui/material';


function Navigation() {
    const { loggedIn } = useAuthStatus();
    // Використовуйте useDispatch, щоб отримати метод для відправки actions
    const dispatch = useDispatch();
    // Використовуйте useSelector, щоб отримати стан лічильника лайків з Redux store
    const likesCount = useSelector(state => state.likes.count);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={DanyaGeelyMK} alt="Logo" width="30" height="24" className="me-2"/> My Website
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gallery" className="nav-link" activeClassName="active">Gallery</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {!loggedIn ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/registration" className="nav-link"
                                             activeClassName="active">Register</NavLink>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <NavLink to="/logout" className="nav-link" activeClassName="active">Logout</NavLink>
                            </li>
                        )}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <Box className="likes-container" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1">Likes: {likesCount}</Typography>
            </Box>

            <Outlet/>
            <NavHistory/>
        </nav>
    );
}

export default Navigation;