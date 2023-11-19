import {record, get_record} from './record'
import React from "react";
export type User={
    username:string,
    id:number,
    email:string,
    record:string,
    password:string
};
export function generate_request(prompt:string, user:User){
    return user.record + prompt;
}
function loginurlbuilder(username:string, password:string){
    return "http://localhost:8080/getuser?username="+username+"&password="+password
}
export async function registerUser(user:User) {
    try {
        // 👇️ const response: Response
        const response = await fetch("http://localhost:8080/create", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: GetUsersResponse
        const result = (await response.json()) as User;

        console.log('result is: ', JSON.stringify(result, null, 4));
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
export async function getUser(username:string, password:string) {
    try {
        // 👇️ const response: Response
        const response = await fetch(loginurlbuilder(username, password), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        // 👇️ const result: GetUsersResponse
        const result = await response.json() as User;
        if(await result.password == '') throw new Error(`Error! status: ${response.status}`);
        console.log('result is: ', JSON.stringify(result, null, 4));
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
        } else {
            console.log('unexpected error: ', error);

        }
    }
}

