import React from 'react'
import { useState } from 'react'
import avatar from './avatar-15.png'
import './Header.css'

const Header = ({userName}) => {    

  return (
    <header className="header-section">
        <img src={avatar} />
        <p>{userName}</p>
    </header>
)
}

export default Header