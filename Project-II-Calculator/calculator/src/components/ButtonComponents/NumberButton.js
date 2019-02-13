import React from 'react';
import './Button.css';

const Buttonstyle = {

}

const NumberButton = (props) => {
  return (
        <button className={props.ButtonStyle}>{props.text}</button>
    );
}

export default NumberButton;