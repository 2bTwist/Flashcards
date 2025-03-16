// src/App.jsx
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import { cards } from './data/cards';
import FlashCardInfo from './components/FlashCardInfo';
import './App.css';
import Guess from './components/Guess';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [prevIndex, setPrevIndex] = useState(currentIndex);

  const [input, setInput] = useState("");

  const [guessed, setGuessed] = useState("")

  const checkGuess = () => {
    if (input.toLowerCase().trim() === cards[currentIndex].answer.toLowerCase().trim()) {
      setGuessed('right'); // Apply green border
    } else {
      setGuessed('wrong'); // Apply red border
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInput(''); // Reset input field
      setGuessed(''); // Reset border styling
    }
  };

  // Move to the previous card
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInput('');
      setGuessed('');
    }
  };


  return (
    <div className="app-container">
      <FlashCardInfo 
        title="General Knowledge Trivia" 
        description="Are you smarter than a 5 year old?" 
        totalCards={cards.length} 
      />
      <div className="flashcard-container">
        <Flashcard card={cards[currentIndex]} key={currentIndex} />

        <Guess handleChange={(e) => setInput(e.target.value)} currentVal={guessed}/>
        
        <button type='submit' onClick={checkGuess} className='button submit'> Submit</button>
      </div>

      <button 
        onClick={handlePrevious} 
        className="button"
        disabled={currentIndex === 0}
      >
        Previous Card
      </button>
      <button 
        onClick={handleNext} 
        className="button"
        disabled={currentIndex === cards.length - 1}
      >
        Next Card
      </button>
    </div>
  );
}

export default App;
