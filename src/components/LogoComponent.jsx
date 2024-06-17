import React from 'react'
import { Link } from 'react-router-dom';

export default function LogoComponent() {
  return (
    <>
      <span id='logo'>
        <Link to='/'><span style={{color:'yellow'}}> Connectify </span></Link>
        </span>
    </>
  )
}
