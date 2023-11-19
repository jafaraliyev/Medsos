import './button.css';
import Header from './header1';
import React from 'react';
import {useNavigate} from "react-router-dom";

function EmButton() {
    return (
        <button className='btn' onClick={()=>useNavigate("")}>
            Emergency
        </button>
    );
}
function LogButton(){
    return (<button className='mtl'>
            Log In
        </button>
    );
}

export default function MyApp() {
    return (
        <div className='first'>
            <Header/>
            <EmButton />
            <div className='sec'>
                <LogButton />
            </div>
        </div>
    );
}