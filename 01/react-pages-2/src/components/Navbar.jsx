import React from 'react'
import reactlogo from '../assets/images/react-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={reactlogo} alt="React logo" />
        <span className="reactfacts">React Facts</span>
      </nav>
    </header>
  )
}

export default Navbar;