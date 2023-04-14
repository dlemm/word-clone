import React from 'react';
import Replay from '../Replay/Replay';

function Toast({ variant, guesses, answer }) {
  return (
    <>
      {variant ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {' '}
              {guesses} {guesses > 1 ? 'guesses' : 'guess'}
            </strong>
          </p>
          <Replay />
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <Replay />
        </div>
      )}
    </>
  );
}

export default Toast;
