import React from 'react';
import '@assets/principal.css'
import NavProfil from '@layouts/NavProfil'
import ProfilComponent from '@Profils/ProfilComponent';
import WallComponent from '@Profils/ProfilWallComponent';
import VideoComponent from '@Profils/ProfilVideoComponent';
import MusicComponent from '@Profils/ProfilMusicComponent';
import GalleryComponet from '@Profils/ProfilGalleryComponent';
import ArticlesComponent from '@partials/ArticlesPartialComponent';

const Principal = () => {
    return (
        <>
        <NavProfil/>
        <ProfilComponent/>
            <div className='cadrePrincipal'>
                <div className='cadreFlex'>
                    <ArticlesComponent/>
                    <div className="cadreAll">
                        <WallComponent/>
                        <GalleryComponet/>
                        <div className='videoPrincipalExt'>
                            <div className='videoPrincipal'>
                                <VideoComponent/>
                            </div>
                        </div>
                                <MusicComponent/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Principal;