// src/App.jsx
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import { cards } from './data/cards';
import FlashCardInfo from './components/FlashCardInfo';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [prevIndex, setPrevIndex] = useState(currentIndex);

  const handleNext = () =>{
    setPrevIndex(currentIndex);
    let nextIndex = Math.floor(Math.random() * (cards.length))

    while(currentIndex === nextIndex){
      nextIndex = Math.floor(Math.random() * (cards.length))
    }

    setCurrentIndex(nextIndex)
  }

  const handlePrevious = () => {
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="app-container">
      <FlashCardInfo 
        title="Do you know your Country Capitals?" 
        description="Guess the country's capital" 
        totalCards={cards.length} 
      />
      <div className="flashcard-container">
        <Flashcard card={cards[currentIndex]} key={currentIndex} />
      </div>
      <button 
        onClick={handlePrevious} 
        className="button"
      >
        Previous Card
      </button>
      <button 
        onClick={handleNext} 
        className="button"
      >
        Next Card
      </button>
    </div>
  );
}

export default App;
