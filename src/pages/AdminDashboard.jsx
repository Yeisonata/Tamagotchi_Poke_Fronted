import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/AdminDashboard.css';
// import logo from '../assets/logo.png';


import BulbasaurImg from '../assets/card/bulbasaur.png';
import IvysaurImg from '../assets/card/ivysaur.png';
import VenusaurImg from '../assets/card/venusaur.png';
import CharmanderImg from '../assets/card/charmander.png';
import CharmeleonImg from '../assets/card/charmeleon.png';
import CharizardImg from '../assets/card/charizard.png';
import SquirtleImg from '../assets/card/squirtle.png';
import WartortleImg from '../assets/card/wartortle.png';
import BlastoiseImg from '../assets/card/blastoise.png';
import EeveeImg from '../assets/card/eevee.png';
import VaporeonImg from '../assets/card/vaporeon.png';
import JolteonImg from '../assets/card/jolteon.png';
import FlareonImg from '../assets/card/flareon.png';
import EspeonImg from '../assets/card/espeon.png';
import UmbreonImg from '../assets/card/umbreon.png';
import LeafeonImg from '../assets/card/leafeon.png';
import GlaceonImg from '../assets/card/glaceon.png';
import SylveonImg from '../assets/card/sylveon.png';

const speciesCardImage = {
  Bulbasaur: BulbasaurImg,
  Ivysaur: IvysaurImg,
  Venusaur: VenusaurImg,
  Charmander: CharmanderImg,
  Charmeleon: CharmeleonImg,
  Charizard: CharizardImg,
  Squirtle: SquirtleImg,
  Wartortle: WartortleImg,
  Blastoise: BlastoiseImg,
  Eevee: EeveeImg,
  Vaporeon: VaporeonImg,
  Jolteon: JolteonImg,
  Flareon: FlareonImg,
  Espeon: EspeonImg,
  Umbreon: UmbreonImg,
  Leafeon: LeafeonImg,
  Glaceon: GlaceonImg,
  Sylveon: SylveonImg,
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/",
  withCredentials: true,
});

const AdminDashboard = () => {
  const [petsData, setPetsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [manageMode, setManageMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
      return;
    }

    const fetchPetsData = async () => {
      try {
        const response = await api.get('/admin/getAll', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPetsData(response.data);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error al cargar los datos. Asegúrate de tener los permisos adecuados.');
      }
    };

    fetchPetsData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };


  const handleDelete = async (pokemonId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este Pokémon?');
    if (!confirmDelete) return;

    try {
      await api.delete('/delete', {
        data: { id: pokemonId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPetsData((prevData) =>
        prevData.filter((pokemon) => pokemon.id !== pokemonId)
      );
    } catch (error) {
      console.error('Error eliminando el Pokémon:', error);
      alert('No se pudo eliminar el Pokémon. Intenta nuevamente.');
    }
  };


  const groupedData = petsData.reduce((acc, pet) => {
    const user = acc.find((u) => u.userId === pet.userId);
    if (user) {
      user.pets.push(pet);
    } else {
      acc.push({ userId: pet.userId, username: pet.username, pets: [pet] });
    }
    return acc;
  }, []);

  return (
    <div className="admindashboard">
      <div className="dashboardcontainer">
        
        <div className="header">
          <a href="/" onClick={handleLogout} className="logoutlink">
            Salir
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
            >
                <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
            </svg>
          </a>
        </div>
        <div className="logocontainer">
          <img src={{}} alt="Logo" className="dashboardlogo" />
        </div>
        {errorMessage ? (
          <p className="errormessage">{errorMessage}</p>
        ) : (
          groupedData.map((user, index) => (
            <div key={index} className="usersection">
              <div className="usertitlecontainer">
                <h2 className="usertitle">
                  ID: {user.userId} - {user.username}
                </h2>
                <button
                  className="managepokemonbutton"
                  onClick={() => setManageMode((prev) => !prev)}
                >
                  Gestionar Pokémon
                </button>
              </div>
              <div className="pokemoncards">
                {user.pets.map((pokemon) => (
                  <div key={pokemon.id} className="pokemoncardcontent">
                    {manageMode && (
                      <button
                        className="deletebutton"
                        onClick={() => handleDelete(pokemon.id)}
                      >
                        &times;
                      </button>
                    )}
                    <div className="pokemonimagewrapper2">
                      <img
                        src={speciesCardImage[pokemon.species]}
                        alt={pokemon.species}
                        className="pokemonimage2"
                      />
                      <div className="pokemonimagebackground"></div>
                    </div>
                    <div className="pokemoninfo">
                      <div className="pokemonheader">
                        <h3 className="pokemonalias">{pokemon.alias || pokemon.species}</h3>
                        <span className="pokemonlevel">Nv. {pokemon.lvl}</span>
                      </div>
                      <div className="pokemonstats">
                        <div className="progressbarcontainer">
                          <div className="progressbartext">HP</div>
                          <div
                            className="progressbar"
                            style={{ width: `${pokemon.ph}%` }}
                          ></div>
                        </div>
                        <div className="progressbarcontainer">
                          <div className="progressbartext">EX</div>
                          <div
                            className="progressbar"
                            style={{ width: `${pokemon.experience}%` }}
                          ></div>
                        </div>
                        <div className="progressbarcontainer">
                          <div className="progressbartext">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              fill="currentColor"
                              className="bi bi-emoji-smile"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                            </svg>
                          </div>
                          <div
                            className="progressbar"
                            style={{ width: `${pokemon.happiness}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
