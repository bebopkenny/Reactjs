import React from 'react'
import './Pads.css'
import { useState } from 'react'

const Pad = (props) => {
    let [flipSwitch, setFlipSwitch] = useState(props.on) // flipSwitch = props.on value

    function toggleSwitch() {
        setFlipSwitch(prevFlipSwitch => !prevFlipSwitch) // toggle between true and false
    }
 
    return (
    <button
        onClick={toggleSwitch}
        className={flipSwitch === true ? "on" : "off"} 
        style={{backgroundColor: props.color}}
    ></button>
  )
}

export default Pad