import React from 'react'
import './Forms.css'

const Forms = () => {
  return (
    <form action="/api/my-server-code.php" method="POST" id="my-form">
    <label for="first-name">First Name: </label>
    <input type="text" id="first-name" name="firstName" class="input" />
    <br />
    <label for="last-name">Last Name: </label>
    <input type="text" id="last-name" name="lastName" class="input" />
    <br />
    <input type="submit" value="Submit" />
</form>
  )
}

export default Forms