import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '@assets/NavAccueil.css';
import {FaBars, FaTimes} from 'react-icons/fa'


const NavContact = () => {
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <nav className='navContact'>
            <NavLink to='/'><span id='logo'>Connectify</span> </NavLink>
            <ul>
                <NavLink to='/profil'><li>Profil</li></NavLink>
                <NavLink to='/contact'
            ><li>Contact</li></NavLink>

                <NavLink to='/logOut'><li>Deconnexion</li></NavLink>
                
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

export default NavContact;