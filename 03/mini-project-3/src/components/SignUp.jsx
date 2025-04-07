import './SignUp.css'
import React from 'react'

const SignUp = () => {

  function signUp(event) { // much faster and cleaner way to capture the email and send it to a database 
    event.preventDefault();
    const formData = new FormData(event.currentTarget) // grabs the data from all the entries
    console.log(Object.fromEntries(formData))
    const data = Object.fromEntries(formData)   // saves the data of all entries as a data object
    const dietaryData = formData.getAll("dietaryRestrictions") // grabs the info from the check box
    const allData = { // creates a new object with all data and dietRestrictions into one object
      ...data,
      dietaryRestrictions: dietaryData // replaces what hte old diet checkbox was and sets it as the new options
    }
    console.log(allData)
    
    /*
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      let user_email = formData.get("email")
      let user_password = formData.get("password")
      let employmentStatus = formData.get("employmentStatus")
      let dietaryRestrictions = formData.getAll("dietaryRestrictions")
      let favGame = formData.get("favGame")
      
      console.log(user_email)
      console.log(user_password)
      console.log(dietaryRestrictions)
      console.log(employmentStatus)
      console.log(favGame)
    */
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
                <input type="radio" name="employmentStatus" value="unemployed"/>
                Unemployed
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="part-time"/>
                Part-Time
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true}/>
                Full-Time
              </label>
            </fieldset>

            <fieldset>
              <legend>Dietary Restrictions:</legend>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                Kosher
              </label>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                Vegan
              </label>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked={true}/>
                Gluten-Free
              </label>
            </fieldset>
            
            <label htmlFor="favGame">What is your favorite video game?</label>
            <select id="favGame" name="favGame" defaultValue="" required>
            <option value="" disabled>-- Choose your favorite game --</option>
              <option value="lol">League of Legends</option>
              <option value="mc">Minecraft</option>
              <option value="bo1">Black Ops</option>
              <option value="bo2">Black Ops 2</option>
              <option value="halo">Halo Reach</option>
            </select>

            <button>Submit</button>
        </form>
    </section>
  )
}

export default SignUp



    // function employmentStatus(event) {
    //   const selected = event.target.value; // gets the value from the selected radio
    //   console.log("Employment status: ", selected);
    // }


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