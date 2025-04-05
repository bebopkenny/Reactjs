import './SignUp.css'
import React from 'react'

const SignUp = () => {

    function signUp() { // much faster and cleaner way to capture the email and send it to a database 
        const email = FormData.get("email") // gets the name="email"
        const password = FormData.get("password") // gets the name="password"
    }

  return ( // Don't forget to add a function to action for this to work  
    <section>
        <h1>Signup form</h1>
        <form action={signUp}> 
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
            <br />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" placeholder="Stars123!"/>
            <br />
            <button>Submit</button>
        </form>
    </section>
  )
}

export default SignUp

/*
import './SignUp.css'

import React from 'react'

const SignUp = () => {
    function handleSubmit(event) {
        event.preventDefault()
        console.log("submitted")
        const formEl = event.current.Target
        const formData = new FormData(formEl) 
        const email = formData.get("email") // grabs the name = "email" then saves it as variable named email
        // console.log(email) 
        // Gather the info from the form
        // Submit it to a backend
        formEl.reset() // erases user input
    }

  return (
    <section>
        <h1>Signup form</h1>
        <form action="phpfile.php" onSubmit={handleSubmit} method="POST">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
            <br />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" placeholder="Stars123!"/>
            <br />
            <button>Submit</button>
        </form>
    </section>
  )
}

export default SignUp

*/