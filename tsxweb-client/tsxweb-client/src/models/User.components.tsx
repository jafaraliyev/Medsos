import {record, get_record} from './record'
type User={
    username:string,
    id:number,
    email:string,
    record1:record
};
export function generate_request(prompt:string, user:User){
    return get_record(user.record1) + prompt;
}
type GetUsersResponse = {
    data: User[];
};

export async function getUser(username:string, password:string) {
    try {
        // 👇️ const response: Response
        const response = await fetch('http://localhost:8080/getuser', {
            method: 'GET',
            headers: {
                username:username,
                password:password,
                Accept: 'application/json',
            },
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

