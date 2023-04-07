import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap'
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from "./Card";

const CardDeck = () => {
    const [deckId, setDeckId] = useState(null)
    const [cardsLeft, setCardsLeft] = useState(52)
    const [cardURL, setCardURL] = useState(null)

    // Get a new deck
    useEffect(() => {
        const newDeckURL = "https://deckofcardsapi.com/api/deck/new/"
        const getDeck = async () => {
            const resp = await axios.get(newDeckURL)
            setDeckId(resp.data.deck_id)
        }
        getDeck()
    }, [deckId])

    const handleDraw = () => {
        useEffect(() => {
            const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
            console.log(deckId)
            const drawCard = async
            // console.log()
        })
    }

    // Draw a card
    useEffect(() => {
        
    })

    return (
        <div>
            <Button onClick={handleDraw} className="mb-3 mt-3">Hit me!</Button>
            <Card url={"https://deckofcardsapi.com/static/img/QS.png"}/>
        </div>
        // <div>
        //     <Button>Hit me!</Button>
        // </div>
    )
}

export default CardDeck