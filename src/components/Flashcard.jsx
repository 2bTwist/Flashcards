import { useState } from "react";
import "../styles/Flashcard.css";

function Flashcard({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flip-card" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                <div className={`flip-card-front ${card.category ? card.category.toLowerCase() : ""}`}>
                    <h2>{card.question}</h2>
                    {card.category && <div className="card-category">({card.category})</div>}
                    {card.image && <img src={card.image} alt="card visual" className="card-image" />}
                </div>
                <div className="flip-card-back">
                    <h2>{card.answer}</h2>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
