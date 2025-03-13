// src/components/FlashCardInfo.jsx
import React from 'react';
import '../styles/FlashCardInfo.css';

function FlashCardInfo({ title, description, totalCards }) {
  return (
    <div className="flashcard-info">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p>Total Cards: {totalCards}</p>
    </div>
  );
}

export default FlashCardInfo;
