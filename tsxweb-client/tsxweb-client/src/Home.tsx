import Timer from "./Timer/timer";
import React from "react";
import {useNavigate} from "react-router-dom";

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
export function HomePage() {
    const buttons = buttonNames.map((name, index) => (
        <button key={index} className="button" onClick={HandleClick}>
            {name}
        </button>
    ));
    const navigation = useNavigate();

    return (<div>
            <button id={'login'} className={"loginButton"} onClick={() => navigation('login')}>Login</button>
            <button id={'register'} className={"registerButton"} onClick={() => navigation('register')}>Register</button>
            <div className="button-container">
                {buttons}
                <div className="emergency-container">
                    <button className="emergency-button">EMERGENCY</button>
                </div>
                <Timer/>
            </div>
        </div>
    );
}

export default HomePage;