import './Hero.css'

import React from 'react'

const Hero = () => {
  return (
    <main className="main">
        <form className="add-ingredient-form">
            <input 
                type="type"
                placeholder="e.g. oregano"
                aria-label="Add ingredient" />
            <button>Add ingredient</button>
        </form>
    </main>
  )
}

export default Hero;