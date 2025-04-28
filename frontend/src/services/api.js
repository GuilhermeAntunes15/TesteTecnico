import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getUsers   = (q = '') =>
    api.get('/users', { params: q ? { q } : {} });
export const getUser    = id => api.get(`/users/${id}`);
export const createUser = data => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = id => api.delete(`/users/${id}`);
