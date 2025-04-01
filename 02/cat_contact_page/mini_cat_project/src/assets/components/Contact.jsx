import React from 'react'
import './Contact.css'
import contacts from '../../data/index'

const Contact = () => {
    function ContactCard(props) {
        return (
            <div className="contact-border">
                <div>
                <img src={props.img} />
                </div>
                <div>{props.name}</div>
                <div>{props.email}</div>
                <div>{props.phone}</div>
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
        phone={value.phone}
    />
    ))}    
    </>
  )
}

export default Contact;