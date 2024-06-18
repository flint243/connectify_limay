import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import '@assets/NavAccueil.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavAccueil = () => {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
        <nav className='navAccueil'>
            <NavLink to='/'><span id='logo'>Connectify</span></NavLink>
            <ul ref={navRef}>
                    <NavLink to='/'><li>Accueil</li></NavLink>
                   <NavLink to='/Register'><li>Inscription</li></NavLink>
                    <NavLink to='/Login'><li>Connexion</li></NavLink>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className='btnDeconnect'>Déconnexion</button>
                ) : (
                   <>
                    <NavLink to='/Contact'><li>Contact</li></NavLink>
                    <NavLink to='/profil'><li>Profil</li></NavLink>
                    </>
                )}
            </ul>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </nav>
        </>
    );
};

export default NavAccueil;
