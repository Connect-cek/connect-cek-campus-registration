import axios from 'axios';

// Define default values for environment variables
// Use import.meta for Vite or window for general compatibility
const API_URL = import.meta?.env?.REACT_APP_API_URL || 
               window?.ENV?.REACT_APP_API_URL || 
               'http://localhost:8000';

const NODE_ENV = import.meta?.env?.NODE_ENV || 
                window?.ENV?.NODE_ENV || 
                'development';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // For demonstration purposes, if the API is not yet set up, mock the responses
    const isDevelopment = NODE_ENV === 'development';
    const noApiUrl = !API_URL || API_URL === 'http://localhost:8000';
    
    if (isDevelopment && noApiUrl) {
      console.log('Using mock API responses...');
      
      const { url, method, data } = error.config;
      const requestData = data ? JSON.parse(data) : {};
      
      // Mock responses for different endpoints
      if (url.includes('/send-otp') || url.includes('/resend-otp')) {
        return Promise.resolve({
          data: { 
            success: true, 
            message: 'OTP sent successfully' 
          }
        });
      }
      
      if (url.includes('/verify-otp')) {
        // Check for both possible parameter names
        const otpCode = requestData.otpCode || requestData.otp_code;
        
        console.log('Verifying OTP:', otpCode); // Add logging for debugging
        
        // For testing, accept any 6-digit OTP (or use '123456' for a specific test code)
        if (otpCode && otpCode.length === 6) {
          return Promise.resolve({
            data: { 
              success: true, 
              message: 'OTP verified successfully',
              access_token: 'mock-jwt-token-12345'
            }
          });
        } else {
          // Return proper error format
          return Promise.reject({
            response: {
              status: 400,
              data: {
                success: false,
                message: 'Invalid OTP code'
              }
            }
          });
        }
      }
    }
    
    // Handle server errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response.data);
      
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        // Clear local storage and redirect to login if token expired
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      return Promise.reject(error.response.data || error);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;