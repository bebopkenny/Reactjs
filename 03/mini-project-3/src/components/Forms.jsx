import React from 'react'
import './Forms.css'

const Forms = () => {
  return (
    <form action="/api/my-server-code.php" method="POST" id="my-form">
    <label htmlFor="first-name">First Name: </label>
    <input type="text" id="first-name" name="firstName" className="input" />
    <br />
    <label htmlFor="last-name">Last Name: </label>
    <input type="text" id="last-name" name="lastName" className="input" />
    <br />
    <input type="submit" value="Submit" />
</form>
  )
}

export default Forms