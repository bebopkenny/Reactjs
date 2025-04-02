import React from 'react'
import marker from '../images/map-marker.webp'
import './Entry.css'
import travel from '../../data/index'

const Entry = () => {
    function TravelLog(props) {
        return (
          <div className="container">
            <img src={props.image} alt={props.location} />
            <div className="text-content">
              <div className="location">
              <img src={marker} className="marker" alt="Location Pin" />
                <span>{props.country_name.toUpperCase()}</span>
                <a href={props.google_maps_link} target="_blank" rel="noopener noreferrer">
                  {props.google_maps}
                </a>
              </div>
              <h3>{props.location}</h3>
              <h4>{props.date}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        )
      }
      

    return (
        <div className="container-wrapper">
            {travel.map((value, index) => (
                <TravelLog 
                    key={index}
                    image={value.image}
                    country_name={value.country_name}
                    google_maps_link={value.google_maps_link}
                    google_maps={value.google_maps}
                    location={value.location}
                    date={value.date}
                    description={value.description}
                />
            ))}
        </div>
  )
}

export default Entry