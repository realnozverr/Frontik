import axios from 'axios';

async function authRequest(code: string) {
    const response = await axios.post('https://localhost:7102/Auth', JSON.stringify(code), { 
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });
    return response.data;
}

async function registerRequest(email: string) {
    const response = await axios.post("https://localhost:7102/Registration", JSON.stringify(email), {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });
    return response.data;
}

export { authRequest, registerRequest };