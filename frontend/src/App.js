// ButtonContainer.js
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

function ButtonContainer() {
    const buttons = buttonNames.map((name, index) => (
        <button key={index} className="button">
            {name}
        </button>
    ));

    return (
        <Router>
            <div className="button-container">
                {buttons}
                <div className="emergency-container">
                    <button className="emergency-button">Call 911</button>
                </div>
                <Timer/>
            </div>
        </Router>
    );
}

export default ButtonContainer;
