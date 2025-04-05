import React from "react"
import avatar from "../assets/images/user.png"
import starFilled from "../assets/images/star-filled.png"
import starEmpty from "../assets/images/star-empty.png"
import './Objects.css'

export const Objects = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite === false ? starEmpty : starFilled;

    function toggleFavorite() {
        setContact(prevContact => ({ // accessing the useState of contact and retreiving the information that is on contact setting it as prevContact
            ...prevContact, // we are accessing all the information on contact
            isFavorite: !prevContact.isFavorite // changing isFavorite key value as not prevContact
        }))
    }



    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}