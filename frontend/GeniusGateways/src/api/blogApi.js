import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const fetchBlogPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/blog-posts`);
        return response.data.docs;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
};
