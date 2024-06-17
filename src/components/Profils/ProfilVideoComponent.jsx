import React from 'react';
import Mamie from '@assets/recups/profil/pexels-rodnae-productions-7017804 (1080p).mp4'

const ProfilVideoComponent = () => {
    return (
        <>
            <div className='cadreVideoWall'>
                    <div className='titrevideo'><h2>Video</h2></div>
                    <div className='Video-video1'>
                        <video src={Mamie} className='videoWall'></video>
                    </div>
                </div>
        </>
    );
};

export default ProfilVideoComponent;