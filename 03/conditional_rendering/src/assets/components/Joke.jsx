import './Joke.css'
import jokes from '../data/index'
import { useState } from 'react'

import React from 'react'
const Joke = () => {
    function SayJoke(props) {
        let [isShown, setIsShown] = useState(false)

        function toggleJoke() {
            setIsShown(prevShown => !prevShown)
        }
        return (
            <div className="container">
                <h3 className="setup">{props.setup}</h3>
                <button className="joke-button" onClick={toggleJoke}>Click on joke</button>
                {isShown === true && <p className="punchline">{props.punchline}</p>}
            </div>
        )

    }

  return (
    <div className="map-container">
        {jokes.map((value, index) => (
            <SayJoke 
                key={index}
                setup={value.setup}
                punchline={value.punchline}
            />
        ))}
    </div>
  )
}

export default Joke