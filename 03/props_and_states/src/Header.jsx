import React from 'react'
import { useState } from 'react'
import avatar from './avatar-15.png'

const Header = () => {    
    const [userName, setUserName] = useState("Jose"); 

  return (
    <header>
        <img src={avatar} />
        <p>{userName}</p>
    </header>
)
}

export default Header