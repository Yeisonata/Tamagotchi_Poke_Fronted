import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Register.css';
import '../styles/App.css';
import logo from '../assets/poke_gotchi_final.png';

import api from '../axiosConfig';
import cloud1 from '../assets/Cloud-1.png';
import cloud2 from '../assets/Cloud-2.png';
import cloud3 from '../assets/Cloud-3.png';
import loadingGif from '../assets/loading.gif';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', {
        username,
        email,
        password,
      });
      

      setSuccessMessage('¡Registro realizado! Redirigiendo al inicio de sesión...');
      setErrorMessage('');

      setUsername('');
      setEmail('');
      setPassword('');

      
      setTimeout(() => {
        navigate('/'); 
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage('Registro fallido. Por favor, inténtelo de nuevo.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="App">
      <div className="background-clouds">
        <img src={cloud1} alt="Cloud 1" className="cloud cloud1" />
        <img src={cloud2} alt="Cloud 2" className="cloud cloud2" />
        <img src={cloud3} alt="Cloud 3" className="cloud cloud3" />
        <img src={cloud2} alt="Cloud 4" className="cloud cloud4" />
      </div>

     
      {successMessage && (
      <div className="success-container">
      <p className="success-title">{successMessage}</p> 
          <img
            src={loadingGif} 
            alt="Loading GIF"
            className="loading-gif"
          />
        </div>
      )}

      <div className="login-container">
        <form onSubmit={handleRegister}>
          <img src={logo} alt="Logo" className="logo" />
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Registrar</button>
        </form>
        <p className="register-text">
          ¿Ya tienes una cuenta? Ingresa {' '}
          <a href="/" className="register-link">aquí.</a>
        </p>
      </div>
    </div>
  );
}

export default Register;