import React, { useState } from 'react';
import './App.css';

// Button Component
const Button = ({ label, handleClick }) => {
  return (
    <button className="button" onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

// Calculator Component
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Use eval to calculate the result
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
      console.log(typeof input+value,input+value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      <Button label="C" handleClick={handleClick} />
        <Button label="(" handleClick={handleClick} />
        <Button label=")" handleClick={handleClick} />
        <Button label="/" handleClick={handleClick} />
        <Button label="7" handleClick={handleClick} />
        <Button label="8" handleClick={handleClick} />
        <Button label="9" handleClick={handleClick} />
        <Button label="*" handleClick={handleClick} />
        <Button label="4" handleClick={handleClick} />
        <Button label="5" handleClick={handleClick} />
        <Button label="6" handleClick={handleClick} />
        <Button label="-" handleClick={handleClick} />
        <Button label="1" handleClick={handleClick} />
        <Button label="2" handleClick={handleClick} />
        <Button label="3" handleClick={handleClick} />
        <Button label="+" handleClick={handleClick} />
        <Button label="0" handleClick={handleClick} />
        <Button label="." handleClick={handleClick} />
        <Button label="=" handleClick={handleClick} />
        <Button label="%" handleClick={handleClick} />
        <Button label="testing" handleClick={() => setInput("iam testing")}/>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
};

export default App;