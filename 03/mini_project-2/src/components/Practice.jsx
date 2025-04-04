import React from 'react'
import './Practice.css'
import { useState } from 'react'

const Practice = () => {
    let [result, setResult] = useState("Hell yes")

    function handleClick() {
        setResult("Definitely")
    }

  return (
    <main>
        <h1 className="title">Is state important to know?</h1>
        <button className="value" onClick={handleClick}>{result}</button>
    </main>
  )
}

export default Practice