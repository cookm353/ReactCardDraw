import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Card.css"

const Card = ({url}) => {
    return (
        <img src={url} className="card"></img>
    )
}

export default Card