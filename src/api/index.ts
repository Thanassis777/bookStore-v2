import axios from 'axios';

const BASE_ULR = 'http://localhost:9000/';

const axiosInstance = axios.create({
    baseURL: BASE_ULR,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getService = (url: string) =>
    axiosInstance
        .get(url)
        .then((res) => Promise.resolve(res))
        .catch((err) => Promise.reject(err));

export const postService = (url: string, data: any) =>
    axiosInstance
        .post(url, data)
        .then((res) => Promise.resolve(res))
        .catch((err) => Promise.reject(err));
