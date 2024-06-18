import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '@assets/Nav.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '@components/LogoComponent'

const NavProfil = () => {
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <nav className='navGeneral'>
            <Logo/>
            <ul>
                <NavLink to='/profil'><li>Profil</li></NavLink>
                <NavLink to='/Contact'><li>Contact</li></NavLink>

                <NavLink to='/deconnexion'><li>Deconnexion</li></NavLink>
                
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

export default NavProfil;