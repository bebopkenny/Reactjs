import './SignUp.css'
import React from 'react'

const SignUp = () => {

    function signUp(event) { // much faster and cleaner way to capture the email and send it to a database 
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let user_email = formData.get("email")
        let user_password = formData.get("password")
    }

    function employmentStatus(event) {
      const selected = event.target.value; // gets the value from the selected radio
      console.log("Employment status: ", selected);
    }

  return ( // Don't forget to add a function to action for this to work  
    <section>
        <h1>Signup form</h1>
        <form onSubmit={signUp}> 
            <label htmlFor="email">Email:</label>
            <input id="email" defaultValue="joe@schmore.com" type="email" name="email" placeholder="joe@schmoe.com" />
            <br />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" placeholder="Stars123!"/>
            <br />
            
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" defaultValue="This is a description"></textarea>
            
            <fieldset>
              <legend>Employment Status:</legend>
              <label>
                <input onChange={employmentStatus} type="radio" name="employmentStatus" value="unemployed"/>
                Unemployed
              </label>
              <label>
                <input onChange={employmentStatus} type="radio" name="employmentStatus" value="part-time"/>
                Part-Time
              </label>
              <label>
                <input onChange={employmentStatus} type="radio" name="employmentStatus" value="full-time"/>
                Full-Time
              </label>
            </fieldset>
            
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