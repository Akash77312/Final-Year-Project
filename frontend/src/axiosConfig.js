import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('authToken');
  if (token) req.headers['x-auth-token'] = token;
  return req;
});

export default API;
