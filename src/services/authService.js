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

export { login, logout, getCurrentUser };
