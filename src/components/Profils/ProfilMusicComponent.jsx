import React from 'react';
import hiphop1 from '@assets/recups/profil/album-hip-hop.png'
import hiphop2 from '@assets/recups/profil/album-hop.png'

const ProfilMusicComponent = () => {
    return (
        <>
            
            <div className='audios'>
                <div className='titreMusic'>
                <h2>Music</h2>
                </div>
                <div className='audio1'>
                    <img src={hiphop1} alt="" className='hiphop' />
                    <div className='contentAudio'>
                        <h2>RioGane - Down</h2>
                        <audio src=""></audio>
                    </div>
                </div>
                <div className='audio2'>
                    <img src={hiphop2} alt="" className='hiphop' />
                    <div className='contentAudio'>
                        <h2>Grange - WAP</h2>
                        <audio src=""></audio>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfilMusicComponent;