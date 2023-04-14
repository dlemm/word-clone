import React from 'react';

function GuessInput({ handleGuess, gameOver }) {
  const [inputValue, setInputValue] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    handleGuess(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        value={inputValue}
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5-letter word. 💖"
        maxLength={5}
        minLength={5}
        id="guess-input"
        disabled={gameOver}
        onChange={(event) => {
          const nextInputValue = event.target.value.toUpperCase();
          setInputValue(nextInputValue);
        }}
      />
    </form>
  );
}

export default GuessInput;
