import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/PokemonDetails.css";
// import pokeIcon from '../assets/poke.png';
import logo from "../assets/logo.png";
import poke from "../assets/poke.png";

import PropTypes from "prop-types";
import heart from "../assets/emojis/heart.png";
import sleep from "../assets/emojis/sleep.gif";

import yummy from "../assets/emojis/yummy.png";

// --- speciesImages ---
// Importaciones (van primero)
// --- Pokémon GIFs ---
import Blastoise from "../assets/pokemon/blastoise.gif";
import Bulbasaur from "../assets/pokemon/bulbasaur.gif";
import Charizard from "../assets/pokemon/charizard.gif";
import Charmeleon from "../assets/pokemon/charmeleon.gif";
import Charmander from "../assets/pokemon/charmander.gif";
import Eevee from "../assets/pokemon/eevee.gif";
import Espeon from "../assets/pokemon/espeon.gif";
import Flareon from "../assets/pokemon/flareon.gif";
import Glaceon from "../assets/pokemon/glaceon.gif";
import Ivysaur from "../assets/pokemon/ivysaur.gif";
import Jolteon from "../assets/pokemon/jolteon.gif";
import Leafeon from "../assets/pokemon/leafeon.gif";
import Squirtle from "../assets/pokemon/squirtle.gif";
import Sylveon from "../assets/pokemon/sylveon.gif";
import Umbreon from "../assets/pokemon/umbreon.gif";
import Vaporeon from "../assets/pokemon/vaporeon.gif";
import Venusaur from "../assets/pokemon/venusaur.gif";
import Wartortle from "../assets/pokemon/wartortle.gif";

// --- Objeto con las imágenes ---
export const speciesImages = {
  Blastoise,
  Bulbasaur,
  Charizard,
  Charmeleon,
  Charmander,
  Eevee,
  Espeon,
  Flareon,
  Glaceon,
  Ivysaur,
  Jolteon,
  Leafeon,
  Squirtle,
  Sylveon,
  Umbreon,
  Vaporeon,
  Venusaur,
  Wartortle,
};

// --- typeImages ---
import normalType from "../assets/types/normal.gif";
import aguaType from "../assets/types/agua.gif";
import electricoType from "../assets/types/electrico.gif";
import fuegoType from "../assets/types/fuego.gif";
import psiquicoType from "../assets/types/psiquico.gif";
import siniestroType from "../assets/types/siniestro.gif";
import plantaType from "../assets/types/planta.gif";
import hieloType from "../assets/types/hielo.gif";
import hadaType from "../assets/types/hada.gif";
import voladorType from "../assets/types/volador.gif";
import venenoType from "../assets/types/veneno.gif";

export const typeImages = {
  Normal: normalType,
  Agua: aguaType,
  Eléctrico: electricoType,
  Fuego: fuegoType,
  Psíquico: psiquicoType,
  Siniestro: siniestroType,
  Planta: plantaType,
  Hielo: hieloType,
  Hada: hadaType,
  Volador: voladorType,
  Veneno: venenoType,
};

// --- locationBackgrounds ---
import cave from "../assets/locations/cave.png";
import forest from "../assets/locations/forest.png";
import lake from "../assets/locations/lake.png";
import beach from "../assets/locations/beach1.jpg";
import snow from "../assets/locations/snow.png";
import pokecenter from "../assets/locations/PokeCenter2.png";
import nolight from "../assets/locations/nolight.png";
import exploreBg from "../assets/locations/explore.png";
import battleground from "../assets/locations/battleground.png";
import evolution from "../assets/locations/evolution.png";

export const locationBackgrounds = {
  CAVE: cave,
  FOREST: forest,
  LAKE: lake,
  BEACH: beach,
  SNOW: snow,
  POKECENTER: pokecenter,
  NOLIGHT: nolight,
  EXPLORE: exploreBg,
  BATTLEGROUND: battleground,
  EVOLUTION: evolution,
};

// --- trainingImages ---
import bulbasaurAtk from "../assets/training/bulbasaur-attack.gif";
import ivysaurAtk from "../assets/training/ivysaur-attack.gif";
import venusaurAtk from "../assets/pokemon/venusaur.gif";
import charmanderAtk from "../assets/training/charmander-attack.gif";
import charmeleonAtk from "../assets/training/charmeleon-attack.gif";
import charizardAtk from "../assets/training/charizard-attack2.gif";
import squirtleAtk from "../assets/training/squirtle-attack.gif";
import wartortleAtk from "../assets/training/wartortle-attack.gif";
import blastoiseAtk from "../assets/training/blastoise-attack.gif";
import eeveeAtk from "../assets/training/eevee-attack.gif";
import vaporeonAtk from "../assets/training/vaporeon-attack.gif";
import jolteonAtk from "../assets/pokemon/jolteon.gif";
import flareonAtk from "../assets/training/flareon-attack.gif";
import espeonAtk from "../assets/pokemon/espeon.gif";
import umbreonAtk from "../assets/pokemon/umbreon.gif";
import leafeonAtk from "../assets/training/leafeon-attack.gif";
import glaceonAtk from "../assets/training/glaceon-attack.gif";
import sylveonAtk from "../assets/pokemon/sylveon.gif";

export const trainingImages = {
  Bulbasaur: bulbasaurAtk,
  Ivysaur: ivysaurAtk,
  Venusaur: venusaurAtk,
  Charmander: charmanderAtk,
  Charmeleon: charmeleonAtk,
  Charizard: charizardAtk,
  Squirtle: squirtleAtk,
  Wartortle: wartortleAtk,
  Blastoise: blastoiseAtk,
  Eevee: eeveeAtk,
  Vaporeon: vaporeonAtk,
  Jolteon: jolteonAtk,
  Flareon: flareonAtk,
  Espeon: espeonAtk,
  Umbreon: umbreonAtk,
  Leafeon: leafeonAtk,
  Glaceon: glaceonAtk,
  Sylveon: sylveonAtk,
};

// --- explorationImages ---
import bulbasaurExp from "../assets/explore/bulbasaur.gif";
import ivysaurExp from "../assets/explore/ivysaur.gif";
import venusaurExp from "../assets/explore/venusaur.gif";
import charmanderExp from "../assets/explore/charmander.gif";
import charmeleonExp from "../assets/explore/charmaleon.gif";
import charizardExp from "../assets/explore/chaizard.gif";
import squirtleExp from "../assets/explore/squirtle.gif";
import wartortleExp from "../assets/explore/wartortle.gif";
import blastoiseExp from "../assets/explore/blastoise.gif";
import eeveeExp from "../assets/explore/eevee.gif";
import vaporeonExp from "../assets/explore/vaporeon.gif";
import jolteonExp from "../assets/explore/jolteon.gif";
import flareonExp from "../assets/explore/flareon.gif";
import espeonExp from "../assets/explore/espeon.gif";
import umbreonExp from "../assets/explore/umbreon.gif";
import leafeonExp from "../assets/explore/leafon.gif";
import glaceonExp from "../assets/explore/glaceon.gif";
import sylveonExp from "../assets/explore/espeon.gif";

export const explorationImages = {
  Bulbasaur: bulbasaurExp,
  Ivysaur: ivysaurExp,
  Venusaur: venusaurExp,
  Charmander: charmanderExp,
  Charmeleon: charmeleonExp,
  Charizard: charizardExp,
  Squirtle: squirtleExp,
  Wartortle: wartortleExp,
  Blastoise: blastoiseExp,
  Eevee: eeveeExp,
  Vaporeon: vaporeonExp,
  Jolteon: jolteonExp,
  Flareon: flareonExp,
  Espeon: espeonExp,
  Umbreon: umbreonExp,
  Leafeon: leafeonExp,
  Glaceon: glaceonExp,
  Sylveon: sylveonExp,
};

// --- sleepingImages ---
import bulbasaurSleep from "../assets/sleep/bulbasaur-sleep.png";
import ivysaurSleep from "../assets/sleep/ivysaur-sleep.png";
import venusaurSleep from "../assets/sleep/venusaur-sleep.png";
import charmanderSleep from "../assets/sleep/charmander-sleep.png";
import charmeleonSleep from "../assets/sleep/charmaleon-sleep.png";
import charizardSleep from "../assets/sleep/chaizard-sleep.png";
import squirtleSleep from "../assets/sleep/squirtel-sleep.png";
import wartortleSleep from "../assets/sleep/wartortle-sleep.png";
import blastoiseSleep from "../assets/sleep/blastoise-sleep.png";
import eeveeSleep from "../assets/sleep/Eevee-sleep.png";
import vaporeonSleep from "../assets/sleep/vaporeon-sleep.png";
import jolteonSleep from "../assets/sleep/jolteon-sleep.png";
import flareonSleep from "../assets/sleep/flareon-sleep.png";
import espeonSleep from "../assets/sleep/espeon-sleep.png";
import umbreonSleep from "../assets/sleep/umbreon-sleep.png";
import leafeonSleep from "../assets/sleep/leafeon-sleep.png";
import glaceonSleep from "../assets/sleep/glaceon-sleep.png";
import sylveonSleep from "../assets/sleep/sylveon-sleep.png";

export const sleepingImages = {
  Bulbasaur: bulbasaurSleep,
  Ivysaur: ivysaurSleep,
  Venusaur: venusaurSleep,
  Charmander: charmanderSleep,
  Charmeleon: charmeleonSleep,
  Charizard: charizardSleep,
  Squirtle: squirtleSleep,
  Wartortle: wartortleSleep,
  Blastoise: blastoiseSleep,
  Eevee: eeveeSleep,
  Vaporeon: vaporeonSleep,
  Jolteon: jolteonSleep,
  Flareon: flareonSleep,
  Espeon: espeonSleep,
  Umbreon: umbreonSleep,
  Leafeon: leafeonSleep,
  Glaceon: glaceonSleep,
  Sylveon: sylveonSleep,
};

const interactionMap = {
  Alimentar: { action: "feed", endpoint: "/pet/feed" },
  Dormir: { action: "sleep", endpoint: "/pet/sleep" },
  Jugar: { action: "play", endpoint: "/pet/play" },
  Entrenar: { action: "train", endpoint: "/pet/train" },
  Explorar: { action: "explore", endpoint: "/pet/explore" },
  Curar: { action: "heal", endpoint: "/pet/heal" },
  "Eliminar Pokémon": { action: null, endpoint: "/pet/delete" },
};

const GetOne = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isEvolving, setIsEvolving] = useState(false);
  const [isEating, setIsEating] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isHealing, setIsHealing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [evolutionTarget, setEvolutionTarget] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentInteraction, setCurrentInteraction] = useState(null);

  const [temporaryBackground, setTemporaryBackground] = useState(null);
  const [temporaryImage, setTemporaryImage] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (!id) {
        setError("No se proporcionó un ID de Pokémon válido.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/pet/user/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPokemonDetails(response.data.pet); // Asumiendo que respondes { pet: {...} }
      } catch (err) {
        console.error("Error fetching Pokémon details:", err);
        setError("Error al cargar los detalles del Pokémon.");
      }
    };

    fetchPokemonDetails();
  }, [id]);

  useEffect(() => {
    // Evita sobreescribir si hay una interacción activa
    if (
      pokemonDetails &&
      pokemonDetails.specie_name &&
      pokemonDetails.location &&
      !isSleeping &&
      !isEating &&
      !isPlaying &&
      !isHealing &&
      !currentInteraction // ← clave
    ) {
      const pokemonImage = speciesImages[pokemonDetails.specie_name];
      const pokemonBackground = locationBackgrounds[pokemonDetails.location];

      setTemporaryImage(pokemonImage);
      setTemporaryBackground(pokemonBackground);
    }
  }, [
    pokemonDetails,
    isSleeping,
    isEating,
    isPlaying,
    isHealing,
    currentInteraction,
  ]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!pokemonDetails) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div>Cargando detalles del Pokémon...</div>
        <img
          src="../assets/waitingpoke.gif"
          alt="Cargando Pokémon"
          style={{ marginTop: "20px", width: "150px", height: "150px" }}
        />
      </div>
    );
  }

  const pokemonImage = speciesImages[pokemonDetails.specie_name];
  const pokemonBackground = locationBackgrounds[pokemonDetails.location];
  const renderEvolutionModal = () => (
    <div className="evolution-modal">
      <h3>Selecciona la Evolución</h3>
      <select
        value={evolutionTarget}
        onChange={(e) => setEvolutionTarget(e.target.value)}
      >
        <option value="">Selecciona una evolución...</option>
        <option value="Vaporeon">Vaporeon</option>
        <option value="Jolteon">Jolteon</option>
        <option value="Flareon">Flareon</option>
        <option value="Espeon">Espeon</option>
        <option value="Umbreon">Umbreon</option>
        <option value="Leafeon">Leafeon</option>
        <option value="Glaceon">Glaceon</option>
        <option value="Sylveon">Sylveon</option>
      </select>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleEvolution}>Confirmar</button>
      <button onClick={() => setIsEvolving(false)}>Cancelar</button>
    </div>
  );

  const handleEvolution = async () => {
    if (!evolutionTarget) {
      setErrorMessage("Por favor, selecciona una evolución.");
      return;
    }
    setErrorMessage("");

    const confirmEvolution = window.confirm(
      `¿Estás seguro de que deseas evolucionar a Eevee a ${evolutionTarget}? Esta acción es irreversible.`
    );
    if (!confirmEvolution) return;

    try {
      const url = `http://localhost:5000/pet/evolve/${pokemonDetails.id}`;
      const data = { id: pokemonDetails.id };

      const response = await axios.post(url, data);
      const updatedPokemon = response.data;

      // 🔸 Función para capitalizar el nombre de la especie
      const formatSpecieName = (name) =>
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      const imageKey = formatSpecieName(updatedPokemon.specie_name);

      // 🔹 Mostrar fondo de evolución y animación
      setTemporaryBackground(locationBackgrounds.EVOLUTION);
      setTemporaryImage(speciesImages[imageKey]);

      const pokemonImage = document.querySelector(".pokemon-species-image");
      if (pokemonImage) {
        pokemonImage.classList.add("pokemon-fade-in");
      }

      // 🔹 Espera y muestra nuevo fondo e imagen
      setTimeout(() => {
        setTemporaryBackground(locationBackgrounds[updatedPokemon.location]);
        setTemporaryImage(speciesImages[imageKey]);
        setPokemonDetails(updatedPokemon);

        if (pokemonImage) {
          pokemonImage.classList.remove("pokemon-fade-in");
        }

        setIsEvolving(false);
      }, 2000);
    } catch (error) {
      console.error("Error durante la evolución:", error);
    }
  };
  const handleInteraction = async (interaction) => {
    if (!pokemonDetails || !pokemonDetails.id) {
      alert("Los detalles del Pokémon aún no están cargados.");
      return;
    }

    const petId = pokemonDetails.id;
    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (interaction === "Eliminar Pokémon") {
      const confirmDelete = window.confirm(
        "¿Estás seguro de que deseas eliminar este Pokémon?"
      );
      if (!confirmDelete) return;

      try {
        const url = `${API_URL}/pet/delete/${petId}`;
        await axios.delete(url, config);
        navigate("/user-dashboard");
        return;
      } catch (error) {
        console.error(
          "Error al eliminar:",
          error.response?.data || error.message
        );
        alert("No se pudo eliminar el Pokémon.");
        return;
      }
    }

    try {
      const { action, endpoint } = interactionMap[interaction];
      const url = action
        ? `${API_URL}${endpoint}/${petId}`
        : `${API_URL}${endpoint}`;
      const data = { id: pokemonDetails.id };
      const response = await axios.post(url, data, config);
      const updatedPokemon = response.data;

      // 🔄 Aquí van las animaciones usando updatedPokemon directamente
      setCurrentInteraction(interaction);
      switch (interaction) {
        case "Alimentar":
          setIsEating(true);
          setTimeout(
            () => setIsEating(false),

            10000
          );
          break;

        case "Dormir":
          setIsSleeping(true);
          setTemporaryImage(
            sleepingImages[pokemonDetails.specie_name] ||
              speciesImages[pokemonDetails.specie_name]
          );
          setTimeout(() => {
            setIsSleeping(false);
            setTemporaryImage(speciesImages[pokemonDetails.specie_name]);
            setCurrentInteraction(null);
          }, 10000);
          break;

        case "Jugar":
          setIsPlaying(true);
          setTimeout(
            () => setIsPlaying(false),

            10000
          );
          break;

        case "Entrenar":
          setTemporaryBackground(locationBackgrounds.BATTLEGROUND);
          setTemporaryImage(
            trainingImages[pokemonDetails.specie_name] ||
              speciesImages[pokemonDetails.specie_name]
          );
          setTimeout(() => {
            setTemporaryBackground(
              locationBackgrounds[pokemonDetails.location]
            );
            setTemporaryImage(speciesImages[pokemonDetails.specie_name]);
            setCurrentInteraction(null);
          }, 6000);
          break;

        case "Explorar":
          setTemporaryBackground(locationBackgrounds.EXPLORE);
          setTemporaryImage(
            explorationImages[pokemonDetails.specie_name] ||
              speciesImages[pokemonDetails.specie_name]
          );
          setTimeout(() => {
            setTemporaryBackground(
              locationBackgrounds[updatedPokemon.location]
            );
            setTemporaryImage(speciesImages[pokemonDetails.specie_name]);
            setCurrentInteraction(null);
          }, 6000);
          break;

        case "Curar":
          setTemporaryBackground(locationBackgrounds.POKECENTER);
          setTemporaryImage("pokecenter_image.png"); // o `heart`, según como lo tengas
          setIsHealing(true);
          setTimeout(() => {
            setIsHealing(false);
            setTemporaryBackground(
              locationBackgrounds[pokemonDetails.location]
            );
            setTemporaryImage(speciesImages[pokemonDetails.specie_name]);
            setCurrentInteraction(null);
          }, 6000);
          break;

        default:
          alert("Interacción no soportada.");
      }

      // ✅ Aquí se actualiza el estado general
      setPokemonDetails(updatedPokemon);
    } catch (error) {
      console.error(`Error en la interacción ${interaction}:`, error);
      alert(`No se pudo realizar la interacción: ${interaction}`);
    }
  };

  return (
    <div className="pokemon-details-container">
      <div className="poke-details-box">
        <div className="navigation-header">
          <a href="/pokenest/getUserPoke" className="navigation-link">
            Mis Pokémon
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
        <div className="rectangle">
          <ul className="interactions-list">
            {pokemonDetails.specie_name === "Eevee" && (
              <li
                className="interaction-item"
                onClick={() => setIsEvolving(true)}
              >
                <span className="interaction-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                </span>
                Evolucionar
              </li>
            )}
            {isEvolving && renderEvolutionModal()}
            {Object.keys(interactionMap).map((option, index) => (
              <li
                key={index}
                className="interaction-item"
                onClick={() => handleInteraction(option)}
              >
                <span className="interaction-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                </span>
                {option}
              </li>
            ))}
          </ul>
        </div>
        <img src={logo} alt="Logos" className="logo-image" />
        <div className="pokemon-details-content">
          <div className="pokemon-alias-container">
            <img src={poke} alt="Poke Icon" className="poke-icon" />
            <span className="pokemon-alias">{pokemonDetails.alias}</span>
            {/* <img src={explorationImages[pokemonDetails.specie_name]} alt="" /> */}

            <span className="separator">-</span>
            <p className="pokemon-level">
              <span>Nv. </span> {pokemonDetails.lvl}
            </p>
          </div>
          <div className="pokemon-types-container">
            {pokemonDetails.types?.length > 0 && (
              <div className="pokemon-types-container">
                {pokemonDetails.types.map((type, index) => {
                  const trimmedType = type.trim().toLowerCase();

                  // Mapeo de inglés a español (según tus claves en typeImages)
                  const typeMap = {
                    normal: "Normal",
                    water: "Agua",
                    electric: "Eléctrico",
                    fire: "Fuego",
                    psychic: "Psíquico",
                    dark: "Siniestro",
                    grass: "Planta",
                    ice: "Hielo",
                    fairy: "Hada",
                    flying: "Volador",
                    poison: "Veneno",
                  };

                  const translatedType = typeMap[trimmedType];
                  const imageSrc = typeImages[translatedType];

                  return (
                    imageSrc && (
                      <img
                        key={index}
                        src={imageSrc}
                        alt={translatedType}
                        className="type-image"
                        title={translatedType}
                      />
                    )
                  );
                })}
              </div>
            )}
          </div>
          {temporaryImage && (
            <div
              className="pokemon-image-container"
              style={{
                backgroundImage: `url(${temporaryBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={temporaryImage}
                alt={pokemonDetails.specie_name}
                className={`pokemon-species-image ${
                  temporaryImage === sleepingImages[pokemonDetails.specie_name]
                    ? "sleeping-image"
                    : temporaryImage ===
                      trainingImages[pokemonDetails.specie_name]
                    ? "training-image"
                    : temporaryImage ===
                      explorationImages[pokemonDetails.specie_species_name]
                    ? "exploration-image"
                    : temporaryImage === poke
                    ? "heal-image"
                    : "default-image"
                }`}
              />
              {isEating && (
                <div className="eating-gif-container">
                  <img src={yummy} alt="Comiendo" className="eating-gif" />
                </div>
              )}
              {isPlaying && (
                <div className="playing-gif-container">
                  <img src={heart} alt="Jugando" className="playing-gif" />
                </div>
              )}
              {temporaryImage ===
                sleepingImages[pokemonDetails.specie_name] && (
                <div className="sleeping-gif-container">
                  <img src={sleep} alt="Durmiendo" className="sleeping-gif" />
                </div>
              )}
              {isHealing && (
                <div className="healing-gif-container">
                  <img src={heart} alt="Curando" className="healing-gif" />
                </div>
              )}
            </div>
          )}

          <div className="ph-bar-container">
            <div className="ph-bar-text">PH</div>
            <div
              className="ph-bar"
              style={{ width: `${pokemonDetails.ph}%` }}
            ></div>
          </div>
          <div className="ph-bar-container">
            <div className="exp-bar-text">EX</div>
            <div
              className="exp-bar"
              style={{ width: `${pokemonDetails.experience}%` }}
            ></div>
          </div>
          <div className="happ-bar-container">
            <div className="happ-bar-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
              </svg>
            </div>
            <div
              className="happ-bar"
              style={{ width: `${pokemonDetails.happiness}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

GetOne.propTypes = {
  pokemon: PropTypes.shape({
    alias: PropTypes.string.isRequired,
    specie_name: PropTypes.string.isRequired,
    lvl: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
    happiness: PropTypes.number.isRequired,
    ph: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default GetOne;
