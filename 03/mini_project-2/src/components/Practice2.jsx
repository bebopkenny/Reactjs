import './Practice2.css'
import { useState } from 'react'

import React from 'react'

const Practice2 = () => { 
    let counter = 0;
    function counterFormula() {
        let [counter, setCounter] = useState(0);
        setCounter(counter + 1)
    }

  return (
    <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
            <button className="minus" aria-label="Decrease count">-</button>
            <h2 className="count" onClick={counterFormula}>{counter}</h2>
            <button className="plus" aria-label="Increase count">+</button>
        </div>
    </main>
  )
}

export default Practice2