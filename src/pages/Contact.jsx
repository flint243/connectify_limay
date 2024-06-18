import React from 'react';
import contact from '@assets/recups/contact/fd_contact.jpg'
import '@assets/Contact.css'
import Footer from '@layouts/Footer'

const Contact = () => {
    return (
        <>
            <div id='cadreContact'>
                <img src={ contact } alt=""className='contactImg'/>
                <div className='contactForm'>
                    <h1>Nous contacter</h1>
                    <form action="" style={{backgroundColor:'#2f5e2f', fontFamily:'verdana'}}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" /><br />
                <label htmlFor="sujet">Sujet:</label><br />
                <input type="sujet" /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea name="message" id="message" style={{backgroundColor:'white', color:'black', height:'150px'}}></textarea><br /><br />
                <div style={{textAlign:'center'}}>
                  <button type='button' style={{backgroundColor:'yellow', paddingLeft:'50px', paddingRight:'50px'}}>Valider</button>
                </div>
              </form>
                </div>
          </div>
        </>
    );
};

export default Contact;