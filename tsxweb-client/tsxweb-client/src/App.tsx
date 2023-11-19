import React from 'react';
import './page2emr.css';
import Timer from './timer';

const buttonNames = [
  'Seizure',
  'Heart Attack',
  'Stroke',
  'Choke',
  'Sugar',
  'Blood',
  'Asthma',
  'Broken Stuff',
];

export function ButtonContainer() {
  const buttons = buttonNames.map((name, index) => (
      <button key={index} className="button">
        {name}
      </button>
  ));

  return (

      <div className="button-container">
        {buttons}
        <div className="emergency-container">
          <button className="emergency-button">Call 911</button>
        </div>
        <Timer/>
      </div>

  );
}

export default ButtonContainer;

