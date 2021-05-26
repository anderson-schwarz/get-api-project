import axios from 'axios';

const api = axios.create({
    baseURL: 'http://metabrasil.com.br:3001/api/test'
});

export default api;