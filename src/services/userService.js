import httpRequest from '~/utils/httpRequest';

const getUser = (username) => {
    return httpRequest.get('/users/' + username).then((res) => res.data);
};

export { getUser };
