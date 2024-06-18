import HeaderProfil from '@layouts/HeaderProfil';
import '@assets/walls.css';
import NavProfil from '@layouts/NavProfil'
import ProfilWallComponent from '@Profils/ProfilWallComponent';
import ArticlesComponent from '@partials/ArticlesPartialComponent';



const Walls = () => {
    return (
        <>
        {/* SECTION HEADER */}
        <HeaderProfil/>
        <NavProfil />

        {/* SECTION MAIN WALLS */}
        <div className='myWall'>
            <div className='titreWall'>
             </div>
            <div className='wallInt'>

                {/* SECTION COMPONENTS */}
            <ArticlesComponent/>
            <ProfilWallComponent />
        </div>

    </div>
        </>
    );
};



export default Walls;