import { Link } from 'react-router-dom';
import "@assets/Header.css";
import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Head = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
    return(
        <>
        <header>
            <span id='logo'>Connectify</span>
            <nav>
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
            </header>
        </>
    )
}

export default Head