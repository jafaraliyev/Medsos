import React, {useState} from "react";
import axios from 'axios';
import BasicCard, {Message} from './message'
import {User, generate_request, getUser} from "../models/User.components";
import Timer from "../Timer/timer";
import {BottomNavigation} from "@mui/material";

const user: User = JSON.parse(localStorage.getItem("user")!);

function urlbuilder(propt: string) {
    return "http://localhost:8080/chat?prompt=" + propt;
}
let messages : Message[] = [];
const helloMessage :Message = {
    text:"Hello, how are you feeling today?"
}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
export async function getResponse(prompt: string) {
    const text = generate_request(prompt, user);

    try {
        const response = await fetch(urlbuilder(text), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.text();

        console.log('result is: ', result);
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }

}

const Chat : React.FC = () => {
    const [tempMessage, setTempMessage] = React.useState('');
    const [tempAnswer, setTempAnswer] = React.useState('');
    let messages1 = messages.length !=0 ? messages.map((message, index) => (
        BasicCard(message, index)
    )) : BasicCard(helloMessage, 0);
    let handleSubmit = async () => {
        let quest: Message = {
            text: tempMessage
        }
        debugger;
        messages = [...messages, quest];
        let response = await getResponse(tempMessage);
        if (response != null) {
            console.log("Message");
            let temp_mes: Message = {
                text: response.toString()
            }
            messages = [...messages, temp_mes];
            return tempMessage;
        }
        console.log("credentials problem");

        return tempMessage
    };
    return(
        <div >
            {messages1}
            <div>
                    <input type="temp_message" value={tempMessage} onChange={(event) => setTempMessage(event.target.value)}/>
                <button onClick={()=>handleSubmit()} >send</button>
            </div>
        </div>
    );
}
export default Chat;


