import React from 'react';
import '@assets/ProfilWallsImg.css'
import Avatar from '@assets/recups/profil/hexatar_230720ry32sx.png'

function ProfilComponent() {
        
    return (
        <>
        <div className='ProfilWallsImg'></div>
        <div className='contentProfil'>
            <div className='bannerProfilInt'>
                <div className='elipse'>
                    <img src={Avatar} alt="" className='avatarProfil' />
                </div>
                <div className='nomPrenom'>
                    <div>Nom</div>
                    <div>Prénom</div>
                </div>
            </div>
        </div>
        </>
    );
}


export default ProfilComponent;