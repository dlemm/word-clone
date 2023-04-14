import React from 'react';

function GuessInput({ handleGuess, gameOver }) {
  const [inputValue, setInputValue] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '') return;
    handleGuess(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        value={inputValue.toUpperCase()}
        pattern="[a-zA-Z]{5,}"
        maxLength={5}
        id="guess-input"
        disabled={gameOver}
        onChange={(event) => {
          const nextInputValue = event.target.value;
          setInputValue(nextInputValue);
        }}
      />
    </form>
  );
}

export default GuessInput;
