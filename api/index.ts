import axios from 'axios';
import { Models } from './models';

const baseURL = 'http://localhost:5000';

const instance = axios.create({
    baseURL
});

export const apiClient = {
    posts: {
        async getListing(): Promise<Models.Mock[]> {
            const { data } = await instance.get('/data');
            return data;
        }
    }
};
