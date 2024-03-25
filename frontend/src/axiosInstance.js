import axios from 'axios';

const baseURL = 'http://localhost:3003';
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
