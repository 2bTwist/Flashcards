import { useState } from "react";
import "../styles/Flashcard.css";

function Flashcard({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flip-card" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                    <h2>{card.question}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>{card.answer}</h2>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
