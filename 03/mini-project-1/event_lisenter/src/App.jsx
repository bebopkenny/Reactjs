import React from 'react'
import tiger from '../src/assets/images/tiger.jpg'
import './App.css'

const App = () => {
  function handleClick() { // Click on button
    console.log("I was clicked!")
  }

  function handleMouseOver() { // Hover over image
    console.log("I was hovered!")
  }

  return (
    <main className="container">
      <img 
        src={tiger}
        alt="Placeholder image"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

export default App;