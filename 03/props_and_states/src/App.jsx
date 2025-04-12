import React from 'react'
import Header from './Header'
import Body from './Body'
import { useState } from 'react'
import Pads from './Pads.jsx'

const App = () => {
  const [userName, setUserName] = useState("Jose"); 

  return (
    <>
      <Header userName={userName}/>
      <Body userName={userName}/>
      <Pads darkMode={true} />
    </>
  )
}

export default App