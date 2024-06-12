import {useState } from "react"
import Header from '@layouts/Header'
import { Link } from 'react-router-dom';
import '@assets/Register.css'
import '@assets/recups/contact/fd_contact.jpg'
import {storage} from '../firebaseConfig'
import { getDatabase, ref, set, push } from "firebase/database"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import React from 'react';


const Register2 = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        genre: '',
        password: '',
        confirmPassword: ''
    })

    const saveData = async () => {
        const db = getDatabase(storage)
        const newDocRef = push(ref(db, "contacts"))
        set(newDocRef, {
            nom: '',
            prenom: '',
            email: '',
            genre: '',
            password: '',
            confirmPassword: ''
        }).then(() => {
            alert("Données sauvées avec succès !")
        }).catch((error) =>{
            alert("erreure:", error.message)
        })
    }

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
    })
}

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.nom.trim()){
            validationErrors.nom = "Saisissez votre nom !"
        }

        if(!formData.prenom.trim()){
            validationErrors.prenom = "Saisissez votre prénom !"
        }

        if(!formData.email.trim()){
            validationErrors.email = "saisissez votre email !"
        }else if(!/\S+@\S+\.\S+/ .test(formData.email)){
            validationErrors.email = "Email non valide !"
        }

        if(!formData.password.trim()){
            validationErrors.password = "saisissez votre password !"
        }else if(formData.password.length < 6){
            validationErrors.password = "Votre mot de passe doit contenir au moins 6 caractères !"
        }

        if(formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Votre mot de passe n'est pas identique !"
        }
        
        setErrors(validationErrors)

        if(Object.keys().length === 0) {
            alert("Formulaire validé avec succès !")
        }

        createUserWithEmailAndPassword(database, nom, prenom, email, genre, password, confirmPassword).then(data=>(
            console.log(data, "auth")
        ))

    }
    return (
         <>
        <Header/>
        <Link to='/Home'></Link>
        <Link to='/Login'></Link>

        <div className="inscriptionGroup">
            <img src="src/assets/recups/inscription/pexels-budgeron-bach-5158233.jpg" alt="" width="50%"/>

            <div id="cadreExtInscription">
            <h1>Inscription</h1>
            <div id="cadreForm">
            
            <form onSubmit={handleSubmit}>
                <div id="cadreNom">
                <label htmlFor="nom">
                    Nom
                </label><br />
                <input 
                type="text" 
                id="nom"
                placeholder="Nom"
                autoComplete="off"
                onChange={handleChange}/>
                {errors.nom && <span> {errors.nom} </span>}
                </div>

                <div id="cadrePrenom">
                <label htmlFor="prenom">
                    Prénom
                </label><br />
                <input 
                type="text" 
                id="prenom"
                placeholder="Prénom"
                autoComplete="off"
                onChange={handleChange}/>
                {errors.prenom && <span> {errors.prenom} </span>}
                </div><br />

                <div id="cadreEmail">
                    <label htmlFor="email">
                        Email
                    </label><br />
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handleChange}/>
                    {errors.email && <span> {errors.email} </span>}
                </div><br />

                <div className="genreGroup">
                    Genre:
                    <input type="radio" className="radio" name="genre" />
                    <label htmlFor="monsieur">Homme</label>
                    <input type="radio" className="radio" name="genre" />
                    <label htmlFor="femme">Femme</label>
                </div>

            <div id="password">
                <label htmlFor="password">
                    Password
                    </label><br />
                <input 
                type="password" 
                id="password"
                placeholder="Mot de passe"
                autoComplete="off"
                onChange={handleChange}/>
                {errors.password && <span> {errors.password} </span>}
                </div><br />

                <div id="confirmpassword">
                <label htmlFor="confirm_pwd">
                    Confirm Password
                </label><br />
                <input 
                type="password" 
                id="confirm_pwd"
                placeholder=" Confirme mot de passe"
                autoComplete="off"
                onChange={handleChange}/>
                {errors.confirmPassword && <span> {errors.confirmPassword} </span>}
                </div><br />

                <div id="btnGroup">
                    <button onClick={saveData} className="btnForm">
                    Sign Up
                    </button>
                </div>
            </form>
            </div>
            <p>
                Pas enregistré? <br />
                <span className="line">
                    {/*lien router*/}
                    <a href="/">Inscri toi</a>
                </span>
            </p>
            </div>
        </div>
        </>
    );
};

export default Register2;