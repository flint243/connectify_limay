import HeaderProfil from '@layouts/HeaderProfil';
import '@assets/video.css';
import NavProfil from '@layouts/NavProfil'
import VideoComponent from '@Profils/ProfilVideoComponent';

const Video = () => {
    return (
        <>
        {/* SECTION HEADER */}
        <HeaderProfil/>
        <NavProfil />

        {/* SECTION MAIN */}
        <div className='myWall'>
            <div className='wallVideoInt'>
                <article>
                    <div id='all' className='wallrow'>All</div>
                    <div id='wall' className='wallrow'>Wall</div>
                    <div id='galerry' className='wallrow'>Galerry</div>
                    <div id='video' className='wallrow'>Video</div>
                    <div id='music' className='wallrow'>Music</div>
                </article>

                {/* SECTION COMPONENT VIDEO */}
                <VideoComponent/>
            </div>
        </div>
</>
    );
};



export default Video;