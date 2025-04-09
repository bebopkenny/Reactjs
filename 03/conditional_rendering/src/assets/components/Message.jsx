import './Message.css'
import React from 'react'
import { useState } from 'react'

const Message = () => {
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"]) 

  return (
    <div>
        {
          unreadMessages.length > 0 && 
          <h1>You have {unreadMessages.length} unread messages!</h1>
        }

        {
          unreadMessages.length === 0 &&
          <p>You have no unread messages</p>
        }

    </div>
  )
}

export default Message