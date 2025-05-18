import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
import axios from "axios";

import cloud1 from "../assets/Cloud-1.png";
import cloud2 from "../assets/Cloud-2.png";
import cloud3 from "../assets/Cloud-3.png";
import themeSong from "../assets/sonid/opening.mp3";

import logo from "../assets/pokelogo.png"; 

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/",
  withCredentials: true,
});

function App() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");  // Permitir usuario o email
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 🎵 Estados para música
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(themeSong));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    const storedPref = localStorage.getItem("music");

    if (storedPref === "off") {
      setIsPlaying(false);
      audio.pause();
    } else {
      setIsPlaying(true);
      // ⚠️ No llames a audio.play() aquí directamente
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem("music", "off");
    } else {
      audio
        .play()
        .catch((err) => console.warn("Error al reproducir audio:", err));
      setIsPlaying(true);
      localStorage.setItem("music", "on");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const loginField = usernameOrEmail.includes('@') ? 'email' : 'username';  // Verifica si contiene '@'
      const loginData = {
        [loginField]: usernameOrEmail,  // Usa 'email' o 'username' dinámicamente
        password,
      };
  
      const response = await api.post("/auth/login", loginData);
  
      localStorage.setItem("token", response.data.token);
      const role = response.data.role;
      if (role === "ADMIN") {
        window.location.href = "/admin/getAll";
      } else if (role === "USER") {
        window.location.href = "/user-dashboard";
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Error al iniciar sesión. Por favor, compruebe sus credenciales"
      );
    }
  };
  
  
  
  

  return (
    <div className="App">
      {/* ☁️ Fondo de nubes */}
      <div className="background-clouds">
        <img src={cloud1} alt="Cloud 1" className="cloud cloud1" />
        <img src={cloud2} alt="Cloud 2" className="cloud cloud2" />
        <img src={cloud3} alt="Cloud 3" className="cloud cloud3" />
        <img src={cloud2} alt="Cloud 4" className="cloud cloud4" />
      </div>

      {/* 📝 Contenedor principal */}
      <div className="login-container">
        {/* 🔊 Botón de música dentro del contenedor */}
        <button onClick={toggleMusic} className="music-toggle">
          {isPlaying ? "🔊 " : "🔇 "}
        </button>

        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleLogin}>
          <div>
            <img src={logo} alt="Logo" className="logo" />
            <label htmlFor="usernameOrEmail">Usuario o Email:</label>
            <input
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
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
          <button type="submit">Iniciar Sesión</button>
        </form>

        <p className="register-text">
          ¿No tienes una cuenta? Regístrate{" "}
          <a href="/register" className="register-link">
            aquí.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
