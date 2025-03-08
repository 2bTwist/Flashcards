import { useState } from 'react';

const Card = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card" onClick={toggleAnswer}>
      {showAnswer ? card.answer : card.question}
    </div>
  );
};

export default Card;