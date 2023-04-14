import React from 'react';

function Guess({ guessData }) {
  const emptyStringArray = Array(5).fill('');
  const letters = guessData ? guessData.string.split('') : emptyStringArray;

  return (
    <p className="guess" key={Math.random()}>
      {letters.map((letter, index) => {
        return (
          <span key={index} className="cell">
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
