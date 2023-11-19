import React from 'react';
import './page2emr.css';
import Timer from '../Timer/timer';
import {Route, Routes} from "react-router-dom";
import {HomePage} from '../Home'
import LoginForm from '../Login/LoginForm'
import RegisterForm from "../Registration/registerForm";
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
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/emergency'} element={<LoginForm/>}/>
            <Route path={'/reguest'} element={<LoginForm/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
            <Route path={'/register'} element={<RegisterForm/>}/>
        </Routes>

    );
}

export default App;

