import React from 'react';
import { NavLink } from "react-router-dom";
import '@assets/NavAccueil.css';
import {FaBars, FaTimes} from 'react-icons/fa'

const NavSign = () => {
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <nav className='navSign'>
            <NavLink to='/'><span id='logo'>Connectify</span> </NavLink>
            <ul>
                <NavLink to='/'><li>Accueil</li></NavLink>
                <NavLink to='/Login'><li>Connexion</li></NavLink>

                <NavLink to='/register'><li>Inscription</li></NavLink>
            </ul>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </nav>
    );
};

export default NavSign;