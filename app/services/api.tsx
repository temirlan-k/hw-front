import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts';

export const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const fetchPostById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
