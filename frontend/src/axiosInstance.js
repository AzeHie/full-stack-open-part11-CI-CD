import axios from 'axios';

/* eslint-disable no-undef */
const baseURL = process.env.NODE_ENV === 'production' ? 'https://full-stack-open-part11-ci-cd.onrender.com/' : 'http://localhost:3003';
/* eslint-disable no-undef */
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config here if needed (e.g., add headers)
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
