import httpRequest from '~/utils/httpRequest';

const search = (query) => {
    return httpRequest
        .get('search', {
            params: {
                q: query,
            },
        })
        .then((res) => res.data);
};

export { search };
