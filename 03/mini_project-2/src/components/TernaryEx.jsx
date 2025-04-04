import './TernaryEx.css'
import { useState } from 'react';

import React from 'react'

const TernaryEx = () => {
    let [isGoingOUt, setIsGoingOut] = useState(true)
    
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    return (
    <main>
        <h1 className="title">Do I feel like going out tonight?</h1>
        <button 
            className="value" 
            onClick={changeMind}
            aria-label={`Current answer is ${isGoingOUt ? "Yes": "No"}. Click to change it.`}
            >
                {isGoingOUt === true ? "Yes" : "No"}
                </button>
    </main>
  )
}

export default TernaryEx