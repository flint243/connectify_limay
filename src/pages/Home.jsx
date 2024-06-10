import Header from '@layouts/Header'
import '@assets/Home.css'
import  '@assets/recups/accueil/fd_accueil.mp4'
import '@assets/recups/accueil/fd_actualite.jpg'
import '@assets/recups/accueil/fd_qsn.jpg'

const Home = () => {
  return (
    <>
    
      <Header/>
        <div className='container'>
          <div className='content'>
              <h1>
                Connectify
              </h1>
            </div>
          <div id='video1'>
              <video id="background-video" autoPlay loop muted>
                <source src="/src/assets/recups/accueil/fd_accueil.mp4" type='video/mp4'/>
              </video>
          </div>

          <div id='video2'>
            <div id='filtre'></div>
              <video id="background-video2" autoPlay loop muted>
                <source src="/src/assets/recups/accueil/fd_accueil.mp4" type='video/mp4'/>
              </video>
              <div className='content2'>
                <h1>
                  Bienvenue
                </h1>
                <p id='harmoniParag'>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
              </div>
          </div>

          <section id='quadri'>
            <img src="/src/assets/recups/accueil/fd_actualite.jpg" alt=""  width="50%"/>
            <div className='text1'>
              <h1>Actualité</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa atque mollitia architecto! At pariatur est autem reprehenderit, enim alias vero repudiandae dicta temporibus doloremque, sint optio, quisquam nulla commodi!</p>
            </div>
            <div className='text1'>
              <h1>Qui sommes nous ?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum voluptates est? Distinctio quod voluptatum nesciunt minima quo, voluptas nobis recusandae! Obcaecati tempore quaerat commodi ratione impedit enim nemo animi.</p>
            </div>
            <img src="/src/assets/recups/accueil/fd_qsn.jpg" alt=""  width="50%"/>
          </section>

          <section id='contact'>
            <img src="/src/assets/recups/contact/fd_contact.jpg" alt=""  width="50%"/>
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
                <video id="background-video3" autoPlay loop muted>
                  <source src="/src/assets/recups/accueil/fd_accueil.mp4" type='video/mp4'/>
                </video>
            </div>
          </div>
        </div>
    </>
  )
}



export default Home