import React from 'react'
import App from './App'
import './Body.css'

const Body = ({ userName }) => {
  return (
    <section className="welcome-section">
        <h1>Welcome back, {userName}!</h1>
    </section>
  )
}

export default Body