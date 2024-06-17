import "@assets/Header.css";
import {useRef} from 'react'




const Head = ({ profilImg }) => {
    const navRef = useRef();

    
    return(
        <>
        <header>
        {profilImg && (
                    <img src={profilImg} alt="Profile" />
            )}    
            </header>
        </>
    )
}

export default Head