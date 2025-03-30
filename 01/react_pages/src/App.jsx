import { createElement } from "react";
import { createRoot } from "react-dom/client";
import './App.css'

const App = () => {
  function Header() {
    const practice = 
    <header>
    <img className="react-logo-one" width="40px" src="../src/images/react-logo.png"/>
    <nav>
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header> 
  return practice
  }

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



  function MainContent() {
    const main =
    <>
        <h1>Reasons I am excited</h1>
        <ol>
          <li>Sweet</li>
          <li>Cool</li>
          <li>Awesome</li>
        </ol>
    </>     
    return main;
  }

  function Footer() {
    return (
      <footer>
        <small>© 2024 Garcia development. All rights reserved.</small>
      </footer>
    )
  }

  return (
  <>
    <Header />
    <MainSection />
    <MainContent />
    <Footer />
  </>
  )
}

export default App;

// What is react Component?
// A function that returns React elements. (UI)





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