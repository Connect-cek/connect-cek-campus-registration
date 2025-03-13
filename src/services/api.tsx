import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  },
  withCredentials: true
});

// Add request interceptor
api.interceptors.request.use(
    (config) => {
        // Log the request
        console.log('Making request:', {
            url: config.url,
            method: config.method,
            data: config.data
        });
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
api.interceptors.response.use(
    (response) => {
        // Log the response
        console.log('Received response:', {
            status: response.status,
            data: response.data
        });
        return response;
    },
    (error) => {
        // Log the error
        console.error('API Error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        
        if (error.response) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject({ message: 'Network error occurred' });
    }
);

export default api;