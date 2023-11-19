import React from 'react';
import './page2emr.css';
import Timer from './timer';
import {Route, Routes} from "react-router-dom";
import {ButtonContainer} from './Home'
import LoginForm from './LoginForm'
import AsthmaApp from "./Emergency/asthma";
import BleedingApp from "./Emergency/bleeding";
import BrokenbonesApp from "./Emergency/brokenbones";
import ChokeApp from "./Emergency/choke";
import DiabetesApp from "./Emergency/diabetes";
import HeartApp from "./Emergency/heart";
import SeizureApp from "./Emergency/seizure";
import StrokeApp from "./Emergency/stroke";
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

export function App() {

    return (

        <Routes>
            <Route path={'/'} element={<ButtonContainer/>}/>
            <Route path={'/asthma'} element={<AsthmaApp/>}/>
            <Route path={'/bleeding'} element={<BleedingApp/>}/>
            <Route path={'/brokenbones'} element={<BrokenbonesApp/>}/>
            <Route path={'/choke'} element={<ChokeApp/>}/>
            <Route path={'/diabetes'} element={<DiabetesApp/>}/>
            <Route path={'/heart'} element={<HeartApp/>}/>
            <Route path={'/seizure'} element={<SeizureApp/>}/>
            <Route path={'/stroke'} element={<StrokeApp/>}/>
            <Route path={'/emergency'} element={<LoginForm/>}/>
            <Route path={'/reguest'} element={<LoginForm/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
        </Routes>

    );
}

export default App;

