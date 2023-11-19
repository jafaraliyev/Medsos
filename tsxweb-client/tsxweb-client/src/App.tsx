import React from 'react';
import './page2emr.css';
import Timer from './timer';
import {Route, Routes} from "react-router-dom";
import {ButtonContainer} from './Home'
import LoginForm from './LoginForm'
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
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/emergency'} element={<LoginForm/>}/>
            <Route path={'/reguest'} element={<LoginForm/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
        </Routes>

    );
}

export default App;

