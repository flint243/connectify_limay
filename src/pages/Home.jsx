import Header from '@layouts/Header'
import '@assets/Home.css'
import fd_contact from '@assets/recups/contact/fd_contact.jpg'
import fd_actualite from  '@assets/recups/accueil/fd_actualite.jpg'
import fd_qsn from  '@assets/recups/accueil/fd_qsn.jpg'
import NavAccueil from '@layouts/NavAccueil'
import Video from '/src/components/Video'

const Home = () => {
  return (
    <>
    <Video />
    <div className='content'>
                <h1>
                    Connectify
                </h1>
              </div>
      <Header/>
      <NavAccueil />
      
        <div className='container'>
          <div id='video2'>
            <div id='filtre'></div>
            <Video />
              <div className='content2'>
                <h1>
                  Bienvenue
                </h1>
                <p id='harmoniParag'>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
              </div>
          </div>

          <section id='quadri'>
            <img src={fd_actualite} alt="" className='fd_actu'/>
            <div className='text1'>
              <h1>Actualité</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa atque mollitia architecto! At pariatur est autem reprehenderit, enim alias vero repudiandae dicta temporibus doloremque, sint optio, quisquam nulla commodi!</p>
            </div>
            <div className='text1'>
              <h1>Qui sommes nous ?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum voluptates est? Distinctio quod voluptatum nesciunt minima quo, voluptas nobis recusandae! Obcaecati tempore quaerat commodi ratione impedit enim nemo animi.</p>
            </div>
            <img src= {fd_qsn} alt="" className='fd_qsn'/>
          </section>

          <section id='contact'>
            <img src= {fd_contact} alt="" className='fd_contact'/>
            <div className='contactForm'>
              <h1>Nous contacter</h1>
              <form action="">
                <label htmlFor="email">Email:</label><br />
                <input type="email" /><br />
                <label htmlFor="sujet">Sujet:</label><br />
                <input type="sujet" /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea name="message" id="message"></textarea><br /><br />
                <button type='button'>Valider</button>
              </form>
            </div>
          </section>

          <div id='newsletter'>
            <div className='cadreNews'>
                <div className='content3'>
                    <h1>
                      Newsletter
                    </h1>
                    <form action="" className='newsForm'>
                      <input name="message" id="message" /><br /><br />
                      <button type='button'>Valider</button>
                    </form>
                </div>
                <Video />
            </div>
          </div>
        </div>
    </>
  )
}



export default Home