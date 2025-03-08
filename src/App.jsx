import { useState } from 'react';
import { cards } from './data/cards';
import CardSetInfo from './components/CardSetInfo';
import Card from './components/Card';
import NextButton from './components/NextButton';
import './App.css';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const getRandomCardIndex = () => {
    return Math.floor(Math.random() * cards.length);
  };

  const handleNextCard = () => {
    setCurrentCardIndex(getRandomCardIndex());
  };

  return (
    <div className="app">
      <CardSetInfo
        title="General Knowledge Flashcards"
        description="Test your knowledge on a variety of topics!"
        totalCards={cards.length}
      />
      <Card card={cards[currentCardIndex]} />
      <NextButton onClick={handleNextCard} />
    </div>
  );
};

export default App;