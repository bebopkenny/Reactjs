import React from 'react'
import ratatouille from '../assets/images/rat.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={ratatouille} alt="Chef logo"/>
        <h1 className="title">Chef Remy</h1>
    </div>
  )
}

export default Header;