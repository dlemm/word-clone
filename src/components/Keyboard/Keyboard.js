import React from 'react';
import {KEYBOARD_ROW_1, KEYBOARD_ROW_2, KEYBOARD_ROW_3} from '../../constants';
import { checkGuess } from '../../game-helpers';

const keys = [KEYBOARD_ROW_1, KEYBOARD_ROW_2, KEYBOARD_ROW_3];

function Keyboard({answer, guesses}) {
  
  const validatedLetters = guesses.map((guess) => {
    return checkGuess(guess.string, answer)
  })

  keys.forEach((row) => {
    row.forEach((key) => {
      const letters = validatedLetters.map((guess) =>
        guess.find((letter) => letter.letter === key.letter)
      );

      letters.map((letter) => {
        if (letter) {
          key.status = letter.status
        }
      })
    })
  })
    
  return (
    <div className="keyboard">
      {keys.map((row, index) => {
        return (
        <div className="keyboard__row" key={index}>
          {row.map((key) => {
            const classNames =`keyboard__key ${key.status}`;
              return (
                <span key={key.id} className={classNames}>
                  {key.letter}
                </span>
              );
            })}
        </div>
      )})}
    </div>
  );
}

export default Keyboard;
