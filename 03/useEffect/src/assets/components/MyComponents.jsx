import React from 'react'
import { useState, useEffect } from 'react';

/*
useEffect()
React Hook that tells React to DO THIS CODE WHEN:
(pick one) 
This component re-renders
This component mounts
The state of a value changes

useEffect(function, [dependencies])

1. useEffect(() => {})          Runs after every re-render
2. useEffect(() => {}, [])      Runs only on mount
3. useEffect(() => {}, [value]) Runs on mount AND when value changes

USES
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real-time updates)
#4 Fetching Data from an API
#5 Clean up when a component unmounts
*/

const MyComponents = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    // useEffect(function, [dependencies]);
    useEffect(() => {
        document.title = `Count: ${count} ${color}` // title will update and say color
    }, [count, color]);


    function addButton() {
        setCount(prevCount => prevCount + 1)
    }

    function subButton() {
        setCount(prevCount => prevCount - 1)
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green")
    }
  return (
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addButton}>Add</button>
    <button onClick={subButton}>Subtract</button>
    <button  onClick={changeColor}>Change Color</button>
    </>
)
}

export default MyComponents