import { createElement } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  function MainSection() {
    const addingList = 
    <main>
      <img width="40px" alt="React Logo" src="../src/images/react-logo.png" />
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, <br /> including mobile apps</li>
      </ul>
    </main>

    return addingList;
  }
  return(
    <MainSection />
  )
}

export default App;













// const App = () => {
//   function Challenge3() {
//     const reactElement = 
//       <main>
//         <h1 className="header">Hello React</h1>
//         <img src="/src/images/react-logo.png"></img>
//       </main>
//     return reactElement
//   }
//   return (
//     <Challenge3 />
//   )
// }

// export default App;





// const App = () => {
//   function MainContent() {
//     return ( <h1 className="header">React is great!</h1> )
//   }

//   return ( 
//       <MainContent />
//   )
// }

// export default App;


// // Challenge: recreate the above line of code in vanilla JS
// // by creating and appending an h1 to our div
// function Appending() {
//   const newElement = document.createElement("h1")
//   newElement.textContent = "This is imperative coding"
//   newElement.className = "header"
//   return document.getElementsById("root").Append(newElement)
// }