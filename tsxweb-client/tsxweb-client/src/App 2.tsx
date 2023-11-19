import React from 'react';
import './page2emr.css';
import Timer from './timer';
import {Route, Routes} from "react-router-dom";
import {ButtonContainer} from './Home'
import LoginForm from './LoginForm'
import SeizureApp from "./seizure";
import HeartApp from "./heart";
import StrokeApp from "./stroke";
import ChokeApp from "./choke";
import DiabetesApp from "./diabetes";
import BleedingApp from "./bleeding";
import AsthmaApp from "./asthma";
import BrokenbonesApp from "./brokenbones";
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
            <Route path={'/seizure'} element={<SeizureApp/>}/>
            <Route path={'/heart'} element={<HeartApp/>}/>
            <Route path={'/stroke'} element={<StrokeApp/>}/>
            <Route path={'/diabetes'} element={<DiabetesApp/>}/>
            <Route path={'/asthma'} element={<AsthmaApp/>}/>
            <Route path={'/brokenbones'} element={<BrokenbonesApp/>}/>
            <Route path={'/bleeding'} element={<BleedingApp/>}/>
            <Route path={'/choke'} element={<ChokeApp/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/emergency'} element={<LoginForm/>}/>
            <Route path={'/reguest'} element={<LoginForm/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
        </Routes>

    );
}

export default App;

