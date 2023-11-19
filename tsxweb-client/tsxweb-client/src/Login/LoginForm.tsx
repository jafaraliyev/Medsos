import React from 'react';
import {getUser, User} from '../models/User.components'
import {useNavigate} from "react-router-dom";


const LoginForm: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let response= await getUser(username, password);
        debugger;
        if (response) {
            console.log("Sign in success", response);
            localStorage.setItem('user', JSON.stringify(response));
            const url = "/"+username+"/main_chat"
            navigate(url);
            return response;
        }
        console.log("credentials problem");
        return null;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;