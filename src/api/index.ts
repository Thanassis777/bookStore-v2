import axios, {AxiosRequestConfig} from 'axios';
import {ToastUtils} from '../shared/utilities';
import {ToastTypes} from '../shared/models/ApplicationTypes';

const BASE_ULR = 'http://localhost:9000/';

const axiosInstance = axios.create({
    baseURL: BASE_ULR,
    timeout: 5000,
    headers: {'Content-Type': 'application/json'},
});

axios.interceptors.request.use(
    () => {},
    (error) => {
        Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response?.status === 404) {
            return ToastUtils.notifyToast(ToastTypes.ERROR, err.response.data.message);
        }
        ToastUtils.notifyToast(ToastTypes.ERROR, err.message);
    }
);

export const getService = async (url: string, config?: AxiosRequestConfig) =>
    axiosInstance
        .get(url, config)
        .then((res) => Promise.resolve(res))
        .catch((err) => Promise.reject(err));

export const postService = (url: string, data: any, config?: AxiosRequestConfig) =>
    axiosInstance
        .post(url, data, config)
        .then((res) => Promise.resolve(res))
        .catch((err) => Promise.reject(err));
