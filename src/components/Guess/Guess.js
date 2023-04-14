import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guessData, answer}) {
  const emptyStringArray = Array(5).fill({ letter: ''});
  const validatedLetters = guessData
    ? checkGuess(guessData.string, answer)
    : emptyStringArray;

  return (
    <p className="guess">
      {validatedLetters.map(({ letter, status }, index) => {
        const classNames = status ? `cell ${status}` : "cell";
        return (
          <span key={index} className={classNames}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
