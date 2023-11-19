// MyApp.js
import './button.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header1';
import EmButton from './embutton'; // Import your components/pages
import LogButton from './App';
import ButtonContainer from './App';

export default function MyApp() {
    return (
        <Router>
            <div className='first'>
                <Header />
                <Route path="/" element={EmButton()} />
                <Route path="/login" element={LogButton()} />
                <Route path="/buttons" element={ButtonContainer()} />
            </div>
        </Router>
    );
}
