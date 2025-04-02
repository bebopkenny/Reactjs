import React from 'react'
import './Header.css'
import earth from '../images/earth.png'

const Header = () => {
  return (
    <header className="header">
            <img className="earth-image" src={earth} alt="Earth icon"/>
            <h1 className="header-title">my travel journal.</h1>
    </header>    
  )
}

export default Header;