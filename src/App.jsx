import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import { cards as originalCards } from './data/cards';
import FlashCardInfo from './components/FlashCardInfo';
import './App.css';
import Guess from './components/Guess';
import stringSimilarity from 'string-similarity';


function App() {
  const [cards, setCards] = useState([...originalCards]); // Store shuffled cards
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [guessed, setGuessed] = useState('');
  const [masteredIndex, setMasteredIndex] = useState([]);

  const checkGuess = (e) => {
    if (e) e.preventDefault(); // Prevent form refresh

    const userInput = input.toLowerCase().trim();
    const correctAnswer = cards[currentIndex].answer.toLowerCase().trim();

    if (correctAnswer.includes(userInput) || userInput.includes(correctAnswer)) {
      setGuessed('right'); // Mark as correct
      setCurrentStreak(currentStreak + 1)
    } else {
      setGuessed('wrong'); // Mark as incorrect
      if(currentStreak > longestStreak){
        setLongestStreak(currentStreak);
        setCurrentStreak(0);
      }
    }
  };

  const saveMastered = () => {
    const newMastered = [...masteredIndex, currentIndex]
    setMasteredIndex(newMastered);
  }

  const handleNext = () => {
    let theIndex = currentIndex + 1; // Start from the next index

    while (theIndex < cards.length && masteredIndex.includes(theIndex)) {
      theIndex++; // Keep moving forward if the card is mastered
    }

    if (theIndex < cards.length) {
      setCurrentIndex(theIndex);
      setInput('');
      setGuessed('');
    }
  };

  const handlePrevious = () => {
    let theIndex = currentIndex - 1; // Start from the previous index

    while (theIndex >= 0 && masteredIndex.includes(theIndex)) {
      theIndex--; // Keep moving backward if the card is mastered
    }

    if (theIndex >= 0) {
      setCurrentIndex(theIndex);
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
      <div className="stats-container">
        <p>Current Streak: {currentStreak} , Longest Streak: {longestStreak}</p>
      </div>
      <div className="flashcard-container">
        <Flashcard card={cards[currentIndex]} key={currentIndex} />

        <Guess handleChange={(e) => setInput(e.target.value)} handleSubmit={checkGuess} currentVal={guessed} />

        <button type="button" onClick={checkGuess} className="button submit">
          Submit
        </button>
        <button type="button" onClick={saveMastered} className="button mastered">
          Mastered
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
