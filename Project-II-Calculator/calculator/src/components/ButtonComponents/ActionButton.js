import React from 'react';
import './Button.css';

import { faDivide } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActionButton = () => {
  return (
    <div className="SymbolSide">
      <button className="Symbol"><FontAwesomeIcon icon={faDivide} /></button>
      <button className="Symbol"><FontAwesomeIcon icon={faTimes} /></button>
      <button className="Symbol"><FontAwesomeIcon icon={faMinus} /></button>
      <button className="Symbol"><FontAwesomeIcon icon={faPlus} /></button>
      <button className="Symbol"><FontAwesomeIcon icon={faEquals} /></button>
    </div>
  );
}

export default ActionButton;