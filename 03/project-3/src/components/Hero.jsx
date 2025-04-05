import './Hero.css'
import { useState } from 'react';
import React from 'react'

const Hero = () => {
  let [foods, setFoods] = useState([]) // created an empty list for foods with a useState setFoods so we can modify the list

    function inputIngredient(event) { // get the user input from the form
      event.preventDefault(); // doesn't refresh the page
      const formData = new FormData(event.currentTarget); 
      let user_ingredient = formData.get("ingredient"); // gets the input name
      setFoods(prevFoods => [...prevFoods, user_ingredient]);
    }

  return (
    <main className="main">
        <form onSubmit={inputIngredient} className="add-ingredient-form">
            <input 
                type="type"
                placeholder="e.g. oregano"
                aria-label="Add ingredient" 
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
        <ul>
          {foods.map((item, value) => ( // map over the foods list 
            <li key={value}>{item}</li> // display the items as a <li></li>
          ))}
        </ul>
    </main>
  );
}

export default Hero;

/*

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
  const formData = new FormData(event.currentTarget)
  const newIngredient = formData.get("ingredient") // get the item of what the user typed in
  setFoods(prevFoods => [...prevFoods, newIngredient]) // going to add the ingredient the user typed in onto the foods list
}

*/