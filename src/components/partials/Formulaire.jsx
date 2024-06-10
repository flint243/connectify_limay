import React from 'react';

const Formulaire = () => {
    return (
        <form>
            <label htmlFor="blob">Le label</label>
            <input type="text" id='blob' />
            <button>Envoyer</button>
        </form>
    );
};

export default Formulaire;