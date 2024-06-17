import React from 'react';

const Video = () => {
    return (
        <div id='video1'>
              <video id="background-video" autoPlay loop muted>
                <source src="/src/assets/recups/accueil/fd_accueil.mp4" type='video/mp4'/>
              </video>
        </div>
    );
};

export default Video;