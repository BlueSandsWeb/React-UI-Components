import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="Calc">
      <CalculatorDisplay text={0} />
      <div className="NumPad">
        <div className="NumSide">
          <ActionButton ButtonStyle="Row Action btn" text={`Clear`}/>
          <div className="Row three btn">
            <NumberButton ButtonStyle="RowThree btn" text={7} />
            <NumberButton ButtonStyle="RowThree btn" text={8} />
            <NumberButton ButtonStyle="RowThree btn" text={9} />
          </div>
          <div className="Row">
            <NumberButton ButtonStyle="RowThree btn" text={4} />
            <NumberButton ButtonStyle="RowThree btn" text={5} />
            <NumberButton ButtonStyle="RowThree btn" text={6} />
          </div>
          <div className="Row">
            <NumberButton ButtonStyle="RowThree btn" text={1} />
            <NumberButton ButtonStyle="RowThree btn" text={2} />
            <NumberButton ButtonStyle="RowThree btn" text={3} />
          </div>
          <ActionButton ButtonStyle="Row Action btn" text={0}/>
        </div>
        <div className="SymbolSide">
          <NumberButton ButtonStyle="Symbol btn" text={`/`} />
          <NumberButton ButtonStyle="Symbol btn" text={`X`} />
          <NumberButton ButtonStyle="Symbol btn" text={`-`} />
          <NumberButton ButtonStyle="Symbol btn" text={`+`} />
          <NumberButton ButtonStyle="Symbol btn" text={`=`} />
        </div>
      </div>
    </div>
  );
};

export default App;
