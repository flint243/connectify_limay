import React from 'react';
import kampus from '@assets/recups/profil/kampus.jpg'
import mathias from '@assets/recups/profil/matthias.jpg'
import sound from '@assets/recups/profil/sound.jpg'
import fd from '@assets/recups/profil/fd_qsn.jpg'

const ProfilGalleryComponent = () => {
    return (
        <>
            <div className='cadreDescriptionGallery'>
                    <div className='titreGallery'>
                    <h2>Gallery</h2>
                    </div>
                        <div className='contentImgFlex'>
                            <img src={kampus} alt="" className='imgRow' />
                            <img src={mathias} alt="" className='imgRow' />
                            <img src={sound} alt="" className='imgRow' />
                            <img src={fd} alt="" className='imgRow' />
                    </div>
                </div>
        </>
    );
};

export default ProfilGalleryComponent;