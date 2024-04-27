import axios from 'axios';

const getBanner = async (page) => {
    return await axios
        .get('http://localhost:5000/api/v1/banners', {
            params: {
                page: page,
            },
        })
        .then((res) => res.data.data);
};

export { getBanner };
