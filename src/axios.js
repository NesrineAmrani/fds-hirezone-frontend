import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';

const instance = axios.create({
    baseURL: apiUrl,
    //headers: { "Authorization": `Bearer ${token}` ,
});

export default instance;