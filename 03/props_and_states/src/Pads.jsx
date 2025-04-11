import React from 'react'
import { useState } from 'react'
import pads from './pads.js'

const Pads = () => {
    let [pads, setPads] = useState(pads)
  return (
    <main>
        <div className="pad-container">

        </div>
    </main>
  )
}

export default Pads