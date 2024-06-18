import { useState, useRef, useEffect } from "react";
import { auth } from '../firebaseConfig';
import { Link } from "react-router-dom";
import "@assets/Register.css";
import pexels from "@assets/recups/inscription/pexels-budgeron-bach-5158233.jpg";
import NavAccueil from '@layouts/NavAccueil';
import { createUserWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const SignUp = ({ setUser }) => {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState()
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })
    return unsubscribe;
  }, [])

  const formRef = useRef();
  const [validation, setValidation] = useState("")

  const [nom, setNom] = useState("");
  const [displayName, setPrenom] = useState("");
  const [email, setEmail] = useState(""); 
  const [genre, setGenre] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleForm = async (event) => {
    event.preventDefault();
    if((formRef.current[1].value.length || formRef.current[1].value.length )
      < 6){
          setValidation("6 carractères minimum!")
          return;
    }

    if (password !== confirmpassword) {
      setValidation("Les mots de passe ne correspondent pas!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await generateUserDocument(user, { nom, displayName, genre });

      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
        setValidation("")
        navigate("/private/private-home")
      }

      setUser(user);
      console.log(user);
    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setValidation("Format email invalide")
      }
      if(error.code === "auth/email-already-in-use"){
        setValidation("Email déja utilisé")
      }
      setError("Vous êtes bien inscrit !");
      
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "userNom":
        setNom(value);
        break;
      case "userPrenom":
        setPrenom(value);
        break;
      case "userEmail":
        setEmail(value);
        break;
      case "userGenre":
        setGenre(value);
        break;
      case "userPassword":
        setPassword(value);
        break;
      case "userConfirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
    {/* SECTION HEADER */}
      <NavAccueil />
      {/* LIENS DE NAVIGATION */}
      <Link to="/Home"></Link>
      <Link to="/Login"></Link>

{/* SECTION INSCRIPTION */}
      <div className="inscriptionGroup">
        <img src={pexels} alt="" className="pexel"/>

        <div id="cadreExtInscription">
          <h1>Inscription</h1>
          <div id="cadreForm">
            {error !== null && (
              <div>{error}</div>
            )}
            {/* FORMULAIRE INSCRIPTION */}
            <form ref={formRef} onSubmit={handleForm}>
              <div className="cadreNoms">
                <div id="leNom">
                  <label htmlFor="nom" className="labNoms">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="userNom"
                    value={nom}
                    placeholder="Nom"
                    autoComplete="off"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>

                <div id="lePrenom">
                  <label htmlFor="prenom" className="labNoms">Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    name="userPrenom"
                    value={displayName}
                    placeholder="Prénom"
                    autoComplete="off"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>
              </div>
              <br />

              <div id="cadreEmail">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="userEmail"
                  value={email}
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(event) => onChangeHandler(event)}
                />
                 <p className="text-danger">{validation}</p>
              </div>
              <br />

              <div className="genreGroup">
                Genre:
                <input 
                  type="radio" 
                  className="radio" 
                  name="userGenre" 
                  value="Homme" 
                  checked={genre === "Homme"}
                  onChange={(event) => onChangeHandler(event)}
                />
                <label htmlFor="monsieur">Homme</label>
                <input 
                  type="radio" 
                  className="radio" 
                  name="userGenre" 
                  value="Femme" 
                  checked={genre === "Femme"}
                  onChange={(event) => onChangeHandler(event)}
                />
                <label htmlFor="femme">Femme</label>
              </div>

              <div id="password">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="userPassword"
                  value={password}
                  placeholder="Mot de passe"
                  autoComplete="off"
                  onChange={(event) => onChangeHandler(event)}
                />
              </div>

              <div id="confirmpassword">
                <label htmlFor="confirm_pwd">Confirm Password</label>
                <br />
                <input
                  type="password"
                  id="confirm_pwd"
                  name="userConfirmPassword"
                  value={confirmpassword}
                  placeholder="Confirme mot de passe"
                  autoComplete="off"
                  onChange={(event) => onChangeHandler(event)}
                />
              </div>
              <br />

              <div id="btnGroup">
                <button
                  type="submit"
                  className="btnForm"
                >
                 Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
