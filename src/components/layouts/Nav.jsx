import React from 'react';
import { Link } from 'react-router-dom';
import '@assets/Nav.css';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '@components/LogoComponent'

const Nav = () => {
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <nav className='navGeneral'>
            <Logo/>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Register'><li>Enregistrement</li></Link>
                <Link to='/Login'><li>Connexion</li></Link>
                <Link to='/Contact'><li>Contact</li></Link>
                {/*<Link to='/profil_music'><li>Profil music</li></Link>
                <Link to='/profil_video'><li>Profil video</li></Link>
                <Link to='/profil_gallery'><li>Profil gallery</li></Link>
                 <Link to='/profil_wall'><li>Profil wall</li></Link>
*/}
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

export default Nav;