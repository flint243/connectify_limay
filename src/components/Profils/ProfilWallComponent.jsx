import React from 'react';
import imgDefaut from '@assets/recups/profil/homer.jpeg'

const ProfilWallComponent = () => {
    return (
        <>
            <div className='cadreDescriptionWallExt'>
                <div className='titreWall'> <h2>My Wall</h2></div>
                <div className='cadreDescriptionWallInt'>
                    <div className='bannierWall'><p>Le Rap us</p></div>
                    <div className='contentImgWall'>
                        <img src={imgDefaut} />
                        <p>J'aime le classique...</p>
                    </div>
                </div>

                    <div className='footerWall'>
                        <textarea name="" id="textarea"></textarea>
                        <div className='icons'>
                            <div className='icon1'></div>
                            <div className='icon2'></div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default ProfilWallComponent;