import React from "react";
import { GoLocation } from "react-icons/go";
import './Cards.css'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={`images/${props.location}.jpg`} alt="Location" className="card--image" />
            <div className="card--stats">
                <div className="google-location">
                    <a href={props.googleMapsUrl}><GoLocation /></a>
                    <p>{props.location}</p>
                    <p className="card-maps">View on Google Maps</p>
                </div>

                <h3>{props.title}</h3>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>



        </div>
    )



}