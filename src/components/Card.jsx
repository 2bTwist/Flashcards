import { useState } from 'react';
import './Card.css'; // Import the CSS for flipping animation

const Card = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setTimeout(() => setShowAnswer(!showAnswer), 150); // Delay to sync with flip animation
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          {card.question}
        </div>
        <div className="card-back">
          {card.answer}
        </div>
      </div>
    </div>
  );
};

export default Card;