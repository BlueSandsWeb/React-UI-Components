import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="Calc">
      <Display />
      <div className="NumPad">
        <NumberButton />
        <ActionButton />
      </div>
    </div>
  );
};

export default App;
