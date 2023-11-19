import React from 'react';
import {getUser} from '../models/User.components'
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let response = getUser(username, password);
        if (response != null) {
            console.log("Sign in success");
            localStorage.setItem('user', JSON.stringify(response));
            navigate("/chat")
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