import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-v2-4725d-default-rtdb.firebaseio.com/'
});

export default instance;