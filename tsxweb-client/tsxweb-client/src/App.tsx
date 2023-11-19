import React from 'react';
import './page2emr.css';
import Timer from './timer';
import {Route, Routes} from "react-router-dom";
import {HomePage} from './Home'
import LoginForm from './LoginForm'
import RegisterForm from "./registerForm";
import Chat from "./chat"
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
            <Route path={':username/main_chat'} element={<Chat/>}/>
        </Routes>

    );
}

export default App;

