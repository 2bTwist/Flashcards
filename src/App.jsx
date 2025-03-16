import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import { cards as originalCards } from './data/cards';
import FlashCardInfo from './components/FlashCardInfo';
import './App.css';
import Guess from './components/Guess';

function App() {
  const [cards, setCards] = useState([...originalCards]); // Store shuffled cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [guessed, setGuessed] = useState('');

  const checkGuess = (e) => {
    e.preventDefault();

    if (input.toLowerCase().trim() === cards[currentIndex].answer.toLowerCase().trim()) {
      setGuessed('right');
    } else {
      setGuessed('wrong');
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInput('');
      setGuessed('');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInput('');
      setGuessed('');
    }
  };

  // 🔀 Shuffle function
  const handleShuffle = () => {
    const shuffled = [...originalCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0); // Reset to first card
    setInput('');
    setGuessed('');
  };

  return (
    <div className="app-container">
      <FlashCardInfo
        title="General Knowledge Trivia"
        description="Are you smarter than a 5-year-old?"
        totalCards={cards.length}
      />
      <div className="flashcard-container">
        <Flashcard card={cards[currentIndex]} key={currentIndex} />

        <Guess handleChange={(e) => setInput(e.target.value)} handleSubmit={checkGuess} currentVal={guessed} />

        <button type="button" onClick={checkGuess} className="button submit">
          Submit
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="button" disabled={currentIndex === 0}>
          Previous Card ⬅️
        </button>
        <button onClick={handleNext} className="button" disabled={currentIndex === cards.length - 1}>
          Next Card ➡️
        </button>

        {/* Shuffle Button */}
        <button onClick={handleShuffle} className="button shuffle">
          Shuffle Cards 🔀
        </button>
      </div>


    </div>
  );
}

export default App;
