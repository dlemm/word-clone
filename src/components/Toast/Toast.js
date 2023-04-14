import React from 'react';

function Toast({ variant, guesses, answer }) {
  return (
    <>
      {variant ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses} {guesses > 1 ? "guesses" : "guess"}</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Toast;
