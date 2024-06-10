import { useRef, useState, useEffect} from 'react'
import Header from '@layouts/Header'
import '@assets/Login.css'
import { Link } from 'react-router-dom';


const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
/*
    useEffect(() => {
        userRef.curent.focus()
    }, [])
*/
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUser('')
        setPwd('')
        setSuccess(true)
    }

    return (
        <>
        <Header/>
        <div id='cadreLogin'>
            <img src="/src/assets/recups/connexion/fd_connexion.jpg" alt=""  width="45%"/>
        <Link to='/Home'></Link>
        <Link to='/Register'></Link>
        {success ? (
            <div id='textConnect'>
                <h1>Vous êtes connécté</h1><br/>
                <p>
                    <a href="/">Retour à l'accueil</a>
                </p>
             </div>
        ) : (
            
        <div className='cadreForm'>
            <p ref={errRef} className={errMsg ? "erreur" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit} className='formulaireLogin'>
            <div className='inputs'>
                <label htmlFor="Nom">Nom:</label> <br />
                <input type="text" 
                    id="nom"
                    ref={userRef} 
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                </div>
                <br /><br />

                <div className='inputs'>
                <label htmlFor="password">Password:</label><br />
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                </div>
               
                <br /><br />
                <div className='divBtn'>
                <button className='btnConnect'>Connexion</button>
                </div>
            </form>
            <p>
                besoin d'un compte ?  
                <span className='line'>
                    {/*put router lin here*/}
                    <a href="/Register">Enregistrez-vous</a>
                </span>
            </p>
        </div>
        
        )}
        </div>
        </>
    )
};

export default Login;