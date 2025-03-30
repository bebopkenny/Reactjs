import React from 'react'
import './App.css'

const Header = () => {
  function HeaderContent() {
    const practice = 
    <header className="header">
    <img className="react-logo-one" src="../src/images/react-logo.png"/>
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">Pricing</li>
        <li className="nav-list-item">About</li>
        <li className="nav-list-item">Contact</li>
      </ul>
    </nav>
  </header> 
  return practice
}
return (
  <>
  <HeaderContent />
  </>
)
}

export default Header;