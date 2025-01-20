import axios from 'axios';

async function authRequest(code: string) {
    const response = await axios.post('/auth', { code });
    return response.data;
}

async function registerRequest(email: string) {
    const response = await axios.post('/register', { email });
    return response.data;
}

export { authRequest, registerRequest };