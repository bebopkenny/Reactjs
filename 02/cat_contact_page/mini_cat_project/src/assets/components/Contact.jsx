import React from 'react'
import './Contact.css'
import contacts from '../../data/index'

const Contact = () => {
    function ContactCard(props) {
        return (
            <div className="contact-border">
                <img src={props.img} />
                <div>{props.name}</div>
                <div>{props.email}</div>
                <div>{props.number}</div>
            </div>
        )
    }
  return (
    <>
    {contacts.map((value, index) => (
        <ContactCard 
        key={index}
        img={value.img}
        name={value.name}
        email={value.email}
        number={value.number}
    />
    ))}    
    </>
  )
}

export default Contact;