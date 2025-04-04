import './Arrays.css'
import { useState } from 'react';
import React from 'react'

const Arrays = () => {
    
    let [myFavoriteThings, setMyFavoriteThings] = useState([]);

    const allFavoriteThings = ["Pizza", "Coding", "Music", "Space", "Cats", "React.js", "Gaming"];
    
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing() {
        setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]]) // use the newState to create a call back function to create a new vector with the previous items inside while adding new items to it
    }
    return (
    <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">
            {thingsElements}
        </section>
    </main>
  )
}

export default Arrays