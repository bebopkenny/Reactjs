import React from 'react'
import './Contact.css'
import contacts from '../../data/index'

const Contact = () => {
    function ContactCard(props) {
        return (
            < div className="card">
                <img className="image" src={props.img} />
                <h3 className="name">{props.name}</h3>
                <p className="email">{props.email}</p>
                <p className="phone">{props.phone}</p>
            </div>
        )
    }
  return (
    <div className="contact-wrap">
    {contacts.map((value, index) => (
        <ContactCard 
        key={index}
        img={value.img}
        name={value.name}
        email={value.email}
        phone={value.phone}
        />
    ))}
    </div>
  )
}

export default Contact;