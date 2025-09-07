import axios from 'axios';

// This creates an Axios client that automatically uses the base URL
// from your .env file, making it easy to change for deployment.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getAllUsers = () => apiClient.get('/users');
export const getUserById = (id) => apiClient.get(`/users/${id}`);
export const createUser = (userData) => apiClient.post('/users', userData);
export const updateUser = (id, userData) => apiClient.put(`/users/${id}`, userData);
export const deleteUser = (id) => apiClient.delete(`/users/${id}`);