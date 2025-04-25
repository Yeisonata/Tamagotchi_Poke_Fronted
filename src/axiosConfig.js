// src/axiosConfig.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true, // Si usas cookies para auth
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  response => response, // Responde normalmente
  error => {
    if (error.response.status === 401) {
      // Manejo de error de autenticación (ej. redirigir al login)
      window.location.href = '/login'; // O lo que necesites
    }
    return Promise.reject(error);
  }
);

export default api;
