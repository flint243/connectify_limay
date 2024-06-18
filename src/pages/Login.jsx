import React, { useRef, useState } from "react";
import '@assets/Login.css'
import Header from '@layouts/Header'
import NavAccueil from '@layouts/NavAccueil'
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import imgContact from "@assets/recups/contact/fd_contact.jpg";
import {getFirestore, collection} from 'firebase/firestore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Connexion réussie");
        } catch (error) {
          if (error.code === 'auth/invalid-credential') {
            setError("Informations d'identification invalides.");
          } else if (error.code === 'auth/user-not-found') {
            setError("Utilisateur non trouvé.");
          } else if (error.code === 'auth/wrong-password') {
            setError("Mot de passe incorrect.");
          } else {
            setError("Erreur lors de la connexion. Veuillez réessayer.");
          }
          console.error("Erreur lors de la connexion", error);
        }
      };
  

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }

    if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <>
    <NavAccueil/>
      <div>
        <div id="cadreLogin">
          <img src={imgContact} className="LoginImg" alt="" />
          <div className="cadreForm">
          <h1>Connexion</h1>
          {error !== null && <div>{error}</div>}
          <form  onSubmit={handleLogin} className="formulaireLogin">
            <label htmlFor="userEmail">Email :</label>
            <input
              type="email"
              name="userEmail"
              value={email}
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
            <label htmlFor="userPassword">Mot de passe :</label>
            <input
              type="password"
              name="userPassword"
              value={password}
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            /> 
            {" "}
            <div className="divBtn">
            <button className="btnConnect">
              Se connecter
            </button>
            </div>
          </form>
          <p>
            Pas de compte ? <NavLink to="/Register">Créez en un ici</NavLink>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
