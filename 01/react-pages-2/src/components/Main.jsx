import React from 'react'
import './Main.css'
import reactbackground from '../assets/images/react-background.png'

const Main = () => {
  return (
    <main className="main">
      <h1 classname="title">Fun Facts about React</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default Main;