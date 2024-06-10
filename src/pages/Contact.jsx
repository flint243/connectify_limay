import React from 'react';
//import '@assets/recups/accueil/fd_qsn.jpg'
import '@assets/Contact.css'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

const Contact = () => {
    return (
        <>
        <Header/>
            <div id='cadreContact'>
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
          </div>
        </>
    );
};

export default Contact;