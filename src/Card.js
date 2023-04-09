import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css"

const Card = ({url}) => {
    return (
        <img src={url} className="card mt-3" alt="card"></img>
    )
}

export default Card