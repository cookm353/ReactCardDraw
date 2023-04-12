import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap'
import { v4 as uuidv4 } from "uuid"
import Card from "./Card";
import "./CardDeck.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDeck = () => {
    const [deckId, setDeckId] = useState(null)
    const [cardsLeft, setCardsLeft] = useState(52)
    const [cardUrls, setCardUrls] = useState([])
    const [isDrawing, setIsDrawing] = useState(false)
    const [intervalId, setIntervalId] = useState(null)
    const [buttonText, setButtonText] = useState("Start drawing")

    // Get a new deck
    useEffect(() => {
        const newDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle"
        const getDeck = async () => {
            try {
                const resp = await axios.get(newDeckURL)
                setDeckId(resp.data.deck_id)
                setCardsLeft(resp.data.remaining)
            } catch (err) {
                console.log(err)
            }
        }
        getDeck()
    }, [])

    // Change drawing state and button text
    const handleDraw = () => {
        setIsDrawing(!isDrawing)
        if (!isDrawing) {
            setButtonText("Stop drawing")
        } else {
            setButtonText("Start drawing")
        }
    }

    // Toggle drawing
    useEffect(() => {
        if(!isDrawing) {
            clearInterval(intervalId)
        } else {
            setIntervalId(setInterval(async () => {
                if (cardsLeft > 0) {
                    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
                    try {
                        const resp = await axios.get(url)
                        const cardUrl = resp.data.cards[0].image
                        setCardUrls([...cardUrls, cardUrl])
                        setCardsLeft(cardsLeft - 1)
                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    alert("Error: No cards remaining!")
                }
            }, 1000))
        }
    }, [isDrawing])

    return (
        <div id="deckDiv">
            <Button onClick={handleDraw} id="drawCard" className="mb-3 mt-3">{buttonText}</Button>
            <div className="cards flex justify-content-center">
                {cardUrls.map(cardUrl => <Card url={cardUrl} key={uuidv4()}/>)}
            </div>
        </div>
    )
}

export default CardDeck