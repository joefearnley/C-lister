import axios from 'axios';

const urls = {
    local: 'localhost:8000',
    test: 'c-lister.herokuapp.com'
};

const host = window.location.hostname;
const baseUrl = host === 'localhost' ? urls.local : urls.test;
const apiUrl = `http://${baseUrl}/api/v1`;

const defaultOptions = {
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
};

let instance = axios.create(defaultOptions);
instance.interceptors.request.use(config => {
        const token = localStorage.getItem('auth_token');
        config.headers.Authorization =  token ? `Token ${token}` : null;
        return config;
    },
    error => {
        return Promise.reject(error);
    });

export default instance;