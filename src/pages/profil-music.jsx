import HeaderProfil from '@layouts/HeaderProfil';
import '@assets/Music.css';
import NavProfil from '@layouts/NavProfil'
import MusicComponent from '@Profils/ProfilMusicComponent';


const Music = () => {
    return (
        <>
        <HeaderProfil/>
        <NavProfil />
        <div className='myWall'>
            <div className='wallInt'>
            <article>
                <div id='all' className='wallrow'>All</div>
                <div id='wall' className='wallrow'>Wall</div>
                <div id='galerry' className='wallrow'>Galerry</div>
                <div id='video' className='wallrow'>Video</div>
                <div id='music' className='wallrow'>Music</div>
            </article>
            <MusicComponent/>
        </div>
    </div>
</>
    );
};



export default Music;