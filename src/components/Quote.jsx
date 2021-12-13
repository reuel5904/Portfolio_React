import React, { useState, useEffect } from 'react'
import quotes from "../data/quotes.json"
import "../css/quote.css"

export default function Quote() {
    const [quote, setQuote] = useState([])

    useEffect(() => {
        setQuote(
            quotes[
                Math.floor(Math.random() * quotes.length)
            ]
        )
    }, [])

    return (
        <section id="quote__section">
            <div className="quote__box">
                <div className="corner left_top"></div>
                <div className="corner left_bottom"></div>
                <div className="corner right_top"></div>
                <div className="corner right_bottom"></div>
                <span className="quote__title">{quote.author}</span>
                <blockquote>
                    <p className="quote__paragraph"><i>&ldquo;{quote.quote}&rdquo; </i></p>
                </blockquote>
            </div>
        </section>
    )
}
