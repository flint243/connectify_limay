import React from 'react';
import contact from '@assets/recups/contact/fd_contact.jpg'
import '@assets/Contact.css'
import Header from '@layouts/Header'
import NavAccueil from '@layouts/NavAccueil'
import Footer from '@layouts/Footer'

const Contact = () => {
    return (
        <>
        <Header/>
        <NavAccueil/>
            <div id='cadreContact'>
                <img src={ contact } alt=""className='contactImg'/>
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