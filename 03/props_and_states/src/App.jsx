import React from 'react'
import Header from './Header'
import Body from './Body'
import { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState("Jose"); 

  return (
    <>
      <Header userName={userName}/>
      <Body userName={userName}/>
    </>
  )
}

export default App