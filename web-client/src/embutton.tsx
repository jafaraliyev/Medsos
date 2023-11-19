import './button.css';
import Header from './header1.tsx';
import React from 'react';
//import {useNavigate} from "react-router-dom";

function EmButton() {
    ////onClick={()=>useNavigate("")}
    return (
        <button className='btn' >
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