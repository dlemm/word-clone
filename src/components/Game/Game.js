import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import Toast from '../Toast/Toast';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const handleGuess = (guess) => {
    const nextGuess = guess.toUpperCase();
    setGuesses([...guesses, { id: Math.random(), string: nextGuess }]);
    if(nextGuess === answer) {
      setIsCorrect(true);
      setGameOver(true);
    }

    if (guesses.length === (NUM_OF_GUESSES_ALLOWED - 1)) {
      setGameOver(true)
    };
    
  };

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameOver={gameOver}/>
      <Keyboard guesses={guesses} answer={answer} />
      {gameOver && (
        <Toast variant={isCorrect} answer={answer} guesses={guesses.length} />
      )}
    </>
  );
}

export default Game;
