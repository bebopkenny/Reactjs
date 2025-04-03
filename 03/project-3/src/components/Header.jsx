import React from 'react'
import ratatouille from '../assets/images/rat.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={ratatouille} />
        <h1 className="title">Chef Claude</h1>
    </div>
  )
}

export default Header;