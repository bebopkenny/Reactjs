import './Message.css'
import React from 'react'
import { useState } from 'react'

const Message = () => {
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"]) 

  return (
    <div>
        {unreadMessages.length > 0 && <h1>You have _ unread messages!</h1>}
    </div>
  )
}

export default Message