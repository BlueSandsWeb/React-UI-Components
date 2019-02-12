import React from 'react';
import './Button.css';

const NumberButton = () => {
  return (
    <div className="NumSide">
      <button className="Row Clear">Clear</button>
      <div className="Row threebtn">
        <button className="RowThree">7</button>
        <button className="RowThree">8</button>
        <button className="RowThree">9</button>
      </div>
      <div className="Row">
        <button className="RowThree">4</button>
        <button className="RowThree">5</button>
        <button className="RowThree">6</button>
      </div>
      <div className="Row">
        <button className="RowThree">1</button>
        <button className="RowThree">2</button>
        <button className="RowThree">3</button>
      </div>
      <button className="Row Zero">0</button>
    </div>
    );
}

export default NumberButton;