import axios from 'axios';
// import Cookies from 'js-cookie';
import { Config } from '../config/config';

const getToken = () => {
//   return Cookies.get('auth_token');
};

const apiClient = axios.create({
  baseURL: Config.BASE_API_URL,
  timeout: 30000,
});
console.log(Config.BASE_API_URL,"Config.BASE_API_URL")

// @ts-ignore
apiClient.interceptors.request.use((config) => {
  const currentToken = getToken();

  // If there is a token and the request has headers, update the Authorization header
  if (currentToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${currentToken}`;
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});

// Response interceptor
apiClient.interceptors.response.use((response) => {
  return response;
});

export default apiClient;
