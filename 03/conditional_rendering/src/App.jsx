import React from 'react'
import Joke from '../src/assets/components/Joke.jsx'
import Message from '../src/assets/components/Message.jsx'
import MessagePart2 from './assets/components/MessagePart2.jsx'
import './App.css'

const App = () => {
  return (
    <>
      <Joke />
      <Message />
      <MessagePart2 />
    </>
  )
}

export default App