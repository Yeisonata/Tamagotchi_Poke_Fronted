import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // cambia esto si usas Vite proxy o despliegas en producción
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
