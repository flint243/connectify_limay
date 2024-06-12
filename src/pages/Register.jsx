import {useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Header from '@layouts/Header'
import { Link } from 'react-router-dom';
import '@assets/Register.css'
import '@assets/recups/contact/fd_contact.jpg'
import app from '../firebaseConfig'
import { getDatabase, ref, set, push } from "firebase/database"
import { error } from "jquery"




const element = <FontAwesomeIcon icon={faCoffee} />

//ReactDOM.render(element, document.body)

const USER_REGEX  = /^[a-zA][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = async () => {

    
        
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [user2, setUser2] = useState('')

    const [validName, setValidName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)

    const [userFocus, setUserFocus] = useState(false)
    const [user2Focus, setUser2Focus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [genre, setGenre] = useState('')
    const [validGenre, setValidGenre] = useState(false)
    const [genreFocus, setGenreFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() =>{
        userRef.current.focus()
    }, [])

    useEffect(() =>{
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() =>{
        const result = USER_REGEX.test(user2)
        console.log(result)
        console.log(user2)
        setValidLastName(result)
    }, [user2])

    useEffect(() =>{
        const result = USER_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        console.log(genre)
        setValidGenre('')
    }, [genre])

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

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
            <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}
            </p>
           
            <form>
                <div id="cadreNoms">
                <label htmlFor="username">
                    Nom
                    <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label><br />
                <input 
                type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required 
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote" 
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && 
                !validName ? "instruction" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br/>
                        Must begin with a letter.<br/>
                        Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="userlastname">
                    Prénom
                    <span className={validLastName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validLastName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label><br />
                <input 
                type="text" 
                id="userlastname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser2(e.target.value)}
                required 
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uidnote" 
                onFocus={() => setUser2Focus(true)}
                onBlur={() => setUser2Focus(false)}
                />
                <p id="uidnote" className={user2Focus && user2 && 
                !validLastName ? "instruction" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br/>
                        Must begin with a letter.<br/>
                        Letters, numbers, underscores, hyphens allowed.
                </p>
                </div><br />

                <label htmlFor="email">
                    Email
                    <span className={validEmail ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label><br />
                <input 
                type="email" 
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required 
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote" 
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                />
                <p id="uidnote" className={emailFocus && email && 
                !validEmail ? "instruction" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.<br/>
                        Must begin with a letter.<br/>
                        Letters, numbers, underscores, hyphens allowed.
                </p><br />

                <div className="genreGroup">
                    Genre:
                    <input type="radio" className="radio" name="genre" />
                    <label htmlFor="monsieur">Homme</label>
                    <input type="radio" className="radio" name="genre" />
                    <label htmlFor="femme">Femme</label>
                </div>

            <div className="passGroup">
                <label htmlFor="password">
                    Password
                    <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={setValidPwd || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label><br />
                <input 
                type="password" 
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required aria-invalid={validName ? "false" : "true"}
                aria-describedby="pwdnote" 
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ?
                    "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.<br/>
                        Must include uppercase and lowerscase letters.<br/>
                        Allowed special characters:
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm Password
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label><br />
                <input 
                type="password" 
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote" 
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ?
                    "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                </p>
                </div><br /><br />

                <div id="btnGroup">
                    <button className="btnForm" disabled={!validName || !validPwd || !validMatch ? true : false} >
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
    )
}
export default Register