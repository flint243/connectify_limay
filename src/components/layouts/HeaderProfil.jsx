import "@assets/HeaderProfil.css";
import ProfilComponent from '@Profils/ProfilComponent';



const HeaderProfil = () => {

    return(
        <>
        <header className="headerProfil">
            {/* COMPONENT BANNIERE IMAGE PROFIL */}
            <ProfilComponent />
            </header>
        </>
    )
}

export default HeaderProfil