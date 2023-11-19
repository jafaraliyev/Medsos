import './button.css';
import Header from './header1';
import React from 'react';
import ButtonContainer from "./Home";
import {useNavigate} from "react-router-dom";


function HandleClick() {

}



function EmButton() {
    const navigationn = useNavigate();
    ////onClick={()=>useNavigate("")}
    return (

        <button className='btn' onClick={()=>navigationn('/emergency')}>
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