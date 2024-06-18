import HeaderProfil from '@layouts/HeaderProfil';
import '@assets/Gallery.css';
import NavProfil from '@layouts/NavProfil'
import GalleryComponent from '@Profils/ProfilGalleryComponent';

const Gallery = () => {
    return (
        <>
        {/* SECTION HEADER */}
        <HeaderProfil/>
        <NavProfil />
       
        {/* SECTION MAIN */}
        <div className='myWall'>
            <div className='wallInt'>
                <article>
                    <div id='all' className='wallrow'>All</div>
                    <div id='wall' className='wallrow'>Wall</div>
                    <div id='galerry' className='wallrow'>Galerry</div>
                    <div id='video' className='wallrow'>Video</div>
                    <div id='music' className='wallrow'>Music</div>
                </article>

                {/* COMPONENT SECTION GALLERY */}
                <GalleryComponent/>
            </div>
        </div>
        </>
    );
};



export default Gallery;