import './Practice2.css'
import { useState } from 'react'

import React from 'react'

const Practice2 = () => { 
    let [count, setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount + 1)
        console.log("add")
        console.log(count)
    }

    function minus() {
        setCount(prevCount => prevCount - 1)
        console.log("minus")
        console.log(count)
    }

  return (
    <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
            <button className="minus" onClick={minus} aria-label="Decrease count">-</button>
            <h2 className="count">{count}</h2>
            <button className="plus" onClick={add} aria-label="Increase count">+</button>
        </div>
    </main>
  )
}

export default Practice2