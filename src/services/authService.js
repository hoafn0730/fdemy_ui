import axios from 'axios';
import { toast } from 'react-toastify';
import httpRequest from '~/utils/httpRequest';

const authRequest = axios.create({
    baseURL: process.env.REACT_APP_SSO_BACKEND_URL,
    withCredentials: true,
});

authRequest.interceptors.request.use(
    function (config) {
        // Do something before request is sent

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
authRequest.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response?.data;
    },
    function (error) {
        if (error?.response?.status !== 410) {
            toast.error(error?.response?.data?.message);
        }

        if (error?.response?.status === 410) {
            refreshToken();
            // return error.
        }

        return Promise.reject(error);
    },
);

const login = async (data) => {
    return authRequest.post('/api/v1/auth/login', {
        ...data,
    });
};

const logout = async () => {
    return authRequest.get('/api/v1/auth/logout');
};

const getCurrentUser = async () => {
    const res = await httpRequest.get('/auth/current-user');
    return res;
};

const refreshToken = async () => {
    const res = await authRequest.post('/api/v1/auth/refresh-token', {});
    return res.data;
};

const updateProfile = async (data) => {
    return httpRequest.patch('/auth/update-profile', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, logout, getCurrentUser, refreshToken, updateProfile };
