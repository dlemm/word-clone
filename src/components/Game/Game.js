import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Toast from '../Toast';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// TODO: put this in a state and reset the state instead of just reload the entire page.
const answer = sample(WORDS);
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const handleGuess = (guess) => {
    const nextGuess = [...guesses, { id: Math.random(), string: guess }];
    setGuesses(nextGuess);
    if(guess === answer) {
      setIsCorrect(true);
      setGameOver(true);
    }

    if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
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
