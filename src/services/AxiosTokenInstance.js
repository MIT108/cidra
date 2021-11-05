import axios from 'axios';
import store from '../store/store';
import { GET_USER_TOKEN_GETTER } from '../store/storeconstants';
const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    // let params = new URLSearchParams();
    // let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    // params.append('auth', token);
    // config.params = params;
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
