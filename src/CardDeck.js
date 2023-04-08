import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap'
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDeck = () => {
    const [deckId, setDeckId] = useState(null)
    const [cardsLeft, setCardsLeft] = useState(52)
    const [cardURL, setCardURL] = useState(null)

    // Get a new deck
    useEffect(() => {
        const newDeckURL = "https://deckofcardsapi.com/api/deck/new/"
        const getDeck = async () => {
            try {
                const resp = await axios.get(newDeckURL)
                setDeckId(resp.data.deck_id)
            } catch (err) {
                console.log(err)
            }
            
        }
        getDeck()
    }, [])

    /**
     * 
     */

    // Handle drawing new card
    useEffect(() => {
        const drawBttn = document.querySelector("#drawCard")
        const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
        
        const handleDraw = async () => {
            try {
                console.log(`Deck id: ${deckId}`)
                const resp = await axios.get(url)
                console.log(resp.data)
            } catch (err) {
                console.log(err)
            }
        }
        drawBttn.addEventListener("click", handleDraw)
    })

    return (
        <div>
            <Button id="drawCard" className="mb-3 mt-3">Hit me!</Button>
            <Card url={"https://deckofcardsapi.com/static/img/QS.png"}/>
        </div>
    )
}

export default CardDeck