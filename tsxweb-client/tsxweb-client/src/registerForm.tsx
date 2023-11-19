import React, {useState} from "react";
import {registerUser, User} from "./models/User.components"

type SignUpFormState = {
    username: string;
    record: string;
    email: string;
    password: string
}


const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormState>({
        username: '',
        record: '',
        email: '',
        password: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user: User = {
            id: 0,
            record: formData.record,
            username: formData.username,
            email: formData.email,
            password: formData.password,
        }
        try {
            const response = registerUser(user)
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className={"Registration"}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"username"}>username:</label>
                    <br/>
                    <input type={'text'} name={'username'} id={'usr'} onChange={handleChange} value={formData.username}
                           required maxLength={20}/>
                    <br/>
                </div>
                <div>
                    <label htmlFor={"password"}>password:</label>
                    <br/>
                    <input type={'text'} name={'password'} id={'psw'} onChange={handleChange} value={formData.password}
                           required maxLength={20}/>
                    <br/>
                </div>
                <div>
                    <label htmlFor={"record"}>record:</label>
                    <br/>
                    <input type={'text'} name={'record'} id={'rcd'} onChange={handleChange} value={formData.record}
                           required maxLength={400}/>
                    <br/>
                </div>
                <div>
                    <label htmlFor={"email"}>email:</label>
                    <br/>
                    <input type={'text'} name={'email'} id={'eml'} onChange={handleChange} value={formData.email}
                           required maxLength={30}/>
                    <br/>
                </div>
                <button>sign up</button>
            </form>
        </div>
    )
}
export default RegisterForm;