import axios from 'axios';

export default axios.create({
    baseURL:'https://124c-2806-1016-a-2b26-5535-d6f2-7365-6e6b.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});