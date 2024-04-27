import axios from 'axios';

const getCourses = async () => {
    return await axios.get('http://localhost:5000/api/v1/combined-courses').then((res) => res.data.data);
};

const getCourseBySlug = async (slug) => {
    return await axios.get('http://localhost:5000/api/v1/courses/' + slug).then((res) => res.data.data);
};

export { getCourses, getCourseBySlug };
