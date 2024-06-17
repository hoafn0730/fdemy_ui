import httpRequest from '~/utils/httpRequest';

const login = async (data) => {
    return httpRequest.post('/auth/login', {
        ...data,
    });
};

const logout = async () => {
    return httpRequest.get('/auth/logout');
};

const getCurrentUser = async () => {
    return httpRequest.get('/auth/current-user');
};

const updateProfile = async (data) => {
    return httpRequest.patch('/auth/update-profile', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export { login, logout, getCurrentUser, updateProfile };
