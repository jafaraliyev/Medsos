import Timer from "./timer";
import React from "react";

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

function HandleClick() {

}

export function ButtonContainer() {
    const buttons = buttonNames.map((name, index) => (
        <button key={index} className="button" onClick={HandleClick}>
            {name}
        </button>
    ));

    return (
            <div className="button-container">
                {buttons}
                <div className="emergency-container">
                    <button className="emergency-button">Et </button>
                </div>
                <Timer/>
            </div>
    );
}

export default ButtonContainer;