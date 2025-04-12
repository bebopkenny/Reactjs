import React from 'react'
import { useState } from 'react'
import padsData from './pads.js'
import Pad from './Pad.jsx'
import './Pads.css'

const Pads = ({darkMode}) => {
    let [pads, setPads] = useState(padsData)
    


  return (
    <main>
        <div className="pad-container">
          {pads.map((item) => (
            <Pad key={item.id} color={item.color} on={item.on}/>
          ))}          
        </div>
    </main>
  )
}

export default Pads