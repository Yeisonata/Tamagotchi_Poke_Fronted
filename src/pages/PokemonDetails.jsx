import React, { useState } from 'react';
import '../styles/PokemonDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import pokeIcon from '../assets/poke.png';
import heart from "../assets/emojis/heart.png";
import sleep from "../assets/emojis/sleep.gif";

import yummy from "../assets/emojis/yummy.png";

import axios from 'axios';
import poke from '../assets/poke.png';
import PropTypes from 'prop-types';

// IMPORTS
// --- typeImages ---
import normalType from '../assets/types/normal.gif';
import aguaType from '../assets/types/agua.gif';
import electricoType from '../assets/types/electrico.gif';
import fuegoType from '../assets/types/fuego.gif';
import psiquicoType from '../assets/types/psiquico.gif';
import siniestroType from '../assets/types/siniestro.gif';
import plantaType from '../assets/types/planta.gif';
import hieloType from '../assets/types/hielo.gif';
import hadaType from '../assets/types/hada.gif';
import voladorType from '../assets/types/volador.gif';
import venenoType from '../assets/types/veneno.gif';

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

// --- speciesImages ---
import bulbasaur from '../assets/pokemon/bulbasaur.gif';
import ivysaur from '../assets/pokemon/ivysaur.gif';
import venusaur from '../assets/pokemon/venusaur.gif';
import charmander from '../assets/pokemon/charmander.gif';
import charmeleon from '../assets/pokemon/charmeleon.gif';
import charizard from '../assets/pokemon/charizard.gif';
import squirtle from '../assets/pokemon/squirtle.gif';
import wartortle from '../assets/pokemon/wartortle.gif';
import blastoise from '../assets/pokemon/blastoise.gif';
import eevee from '../assets/pokemon/eevee.gif';
import vaporeon from '../assets/pokemon/vaporeon.gif';
import jolteon from '../assets/pokemon/jolteon.gif';
import flareon from '../assets/pokemon/flareon.gif';
import espeon from '../assets/pokemon/espeon.gif';
import umbreon from '../assets/pokemon/umbreon.gif';
import leafeon from '../assets/pokemon/leafeon.gif';
import glaceon from '../assets/pokemon/glaceon.gif';
import sylveon from '../assets/pokemon/sylveon.gif';

export const speciesImages = {
  Bulbasaur: bulbasaur,
  Ivysaur: ivysaur,
  Venusaur: venusaur,
  Charmander: charmander,
  Charmeleon: charmeleon,
  Charizard: charizard,
  Squirtle: squirtle,
  Wartortle: wartortle,
  Blastoise: blastoise,
  Eevee: eevee,
  Vaporeon: vaporeon,
  Jolteon: jolteon,
  Flareon: flareon,
  Espeon: espeon,
  Umbreon: umbreon,
  Leafeon: leafeon,
  Glaceon: glaceon,
  Sylveon: sylveon,
};

// --- locationBackgrounds ---
import cave from '../assets/locations/cave.png';
import forest from '../assets/locations/forest.png';
import lake from '../assets/locations/lake.png';
import beach from '../assets/locations/beach1.jpg';
import snow from '../assets/locations/snow.png';
import pokecenter from '../assets/locations/PokeCenter2.png';
import nolight from '../assets/locations/nolight.png';
import exploreBg from '../assets/locations/explore.png';
import battleground from '../assets/locations/battleground.png';
import evolution from '../assets/locations/evolution.png';

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
import bulbasaurAtk from '../assets/training/bulbasaur-attack.gif';
import ivysaurAtk from '../assets/training/ivysaur-attack.gif';
import venusaurAtk from '../assets/pokemon/venusaur.gif';
import charmanderAtk from '../assets/training/charmander-attack.gif';
import charmeleonAtk from '../assets/training/charmeleon-attack.gif';
import charizardAtk from '../assets/training/charizard-attack2.gif';
import squirtleAtk from '../assets/training/squirtle-attack.gif';
import wartortleAtk from '../assets/training/wartortle-attack.gif';
import blastoiseAtk from '../assets/training/blastoise-attack.gif';
import eeveeAtk from '../assets/training/eevee-attack.gif';
import vaporeonAtk from '../assets/training/vaporeon-attack.gif';
import jolteonAtk from '../assets/pokemon/jolteon.gif';
import flareonAtk from '../assets/training/flareon-attack.gif';
import espeonAtk from '../assets/pokemon/espeon.gif';
import umbreonAtk from '../assets/pokemon/umbreon.gif';
import leafeonAtk from '../assets/training/leafeon-attack.gif';
import glaceonAtk from '../assets/training/glaceon-attack.gif';
import sylveonAtk from '../assets/pokemon/sylveon.gif';

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
import bulbasaurExp from '../assets/explore/bulbasaur.gif';
import ivysaurExp from '../assets/explore/ivysaur.gif';
import venusaurExp from '../assets/explore/venusaur.gif';
import charmanderExp from '../assets/explore/charmander.gif';
import charmeleonExp from '../assets/explore/charmaleon.gif';
import charizardExp from '../assets/explore/chaizard.gif';
import squirtleExp from '../assets/explore/squirtle.gif';
import wartortleExp from '../assets/explore/wartortle.gif';
import blastoiseExp from '../assets/explore/blastoise.gif';
import eeveeExp from '../assets/explore/eevee.gif';
import vaporeonExp from '../assets/explore/vaporeon.gif';
import jolteonExp from '../assets/explore/jolteon.gif';
import flareonExp from '../assets/explore/flareon.gif';
import espeonExp from '../assets/explore/espeon.gif';
import umbreonExp from '../assets/explore/umbreon.gif';
import leafeonExp from '../assets/explore/leafon.gif';
import glaceonExp from '../assets/explore/glaceon.gif';
import sylveonExp from '../assets/explore/espeon.gif';

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
import bulbasaurSleep from '../assets/sleep/bulbasaur-sleep.png';
import ivysaurSleep from '../assets/sleep/ivysaur-sleep.png';
import venusaurSleep from '../assets/sleep/venusaur-sleep.png';
import charmanderSleep from '../assets/sleep/charmander-sleep.png';
import charmeleonSleep from '../assets/sleep/charmaleon-sleep.png';
import charizardSleep from '../assets/sleep/chaizard-sleep.png';
import squirtleSleep from '../assets/sleep/squirtel-sleep.png';
import wartortleSleep from '../assets/sleep/wartortle-sleep.png';
import blastoiseSleep from '../assets/sleep/blastoise-sleep.png';
import eeveeSleep from '../assets/sleep/Eevee-sleep.png';
import vaporeonSleep from '../assets/sleep/vaporeon-sleep.png';
import jolteonSleep from '../assets/sleep/jolteon-sleep.png';
import flareonSleep from '../assets/sleep/flareon-sleep.png';
import espeonSleep from '../assets/sleep/espeon-sleep.png';
import umbreonSleep from '../assets/sleep/umbreon-sleep.png';
import leafeonSleep from '../assets/sleep/leafeon-sleep.png';
import glaceonSleep from '../assets/sleep/glaceon-sleep.png';
import sylveonSleep from '../assets/sleep/sylveon-sleep.png';

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
    Alimentar: { action: "FEED", endpoint: "/pokenest/update" },
    Dormir: { action: "SLEEP", endpoint: "/pokenest/update" },
    Jugar: { action: "PLAY", endpoint: "/pokenest/update" },
    Entrenar: { action: "TRAIN", endpoint: "/pokenest/update" },
    Explorar: { action: "EXPLORE", endpoint: "/pokenest/update" },
    Curar: { action: "HEAL", endpoint: "/pokenest/update" },
    "Eliminar Pokémon": { action: null, endpoint: "/pokenest/delete" },
};


const PokemonDetails = () => {
    const location = useLocation();
    const pokemon = location.state?.pokemon;
    const navigate = useNavigate();
    const [currentPokemon, setCurrentPokemon] = useState(pokemon);
    const [temporaryBackground, setTemporaryBackground] = useState(locationBackgrounds[pokemon.location]);
    const [temporaryImage, setTemporaryImage] = useState(speciesImages[pokemon.species]);
    const [isSleeping, setIsSleeping] = useState(currentPokemon.sleeping || false);
    const [isEating, setIsEating] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHealing, setIsHealing] = useState(false);
    const [isEvolving, setIsEvolving] = useState(false);
    const [evolutionTarget, setEvolutionTarget] = useState("");
    const [errorMessage, setErrorMessage] = useState("");     
    
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
            {errorMessage && (
                <p className="error-message">{errorMessage}</p> 
            )}
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
          
            const url = `/pokenest/update/eev?targetSpecies=${evolutionTarget}`;
            const data = { id: currentPokemon.id };
            const response = await axios.post(url, data);
            const updatedPokemon = response.data;

            setTemporaryBackground(locationBackgrounds.EVOLUTION);
            setTemporaryImage(speciesImages[updatedPokemon.species]);

            const pokemonImage = document.querySelector(".pokemon-species-image");
            if (pokemonImage) {
                pokemonImage.classList.add("pokemon-fade-in");
            }
    
            setTimeout(() => {
                setTemporaryBackground(locationBackgrounds[updatedPokemon.location]);
                setTemporaryImage(speciesImages[updatedPokemon.species]);
                setCurrentPokemon(updatedPokemon); 
    
                if (pokemonImage) {
                    pokemonImage.classList.remove("pokemon-fade-in");
                }
    
                setIsEvolving(false); 
            }, 2000); 
        } catch (error) {
            console.error("Error al evolucionar el Pokémon:", error);
            alert("No se pudo evolucionar al Pokémon. Inténtalo nuevamente.");
        }
    };

    const handleInteraction = async (interaction) => {

        if (isSleeping) {
            alert("Tu Pokémon está durmiendo y no puede realizar otras acciones hasta que se despierte.");
            return;
        }

        try {
            const { action, endpoint } = interactionMap[interaction];

            
            const url = action ? `${endpoint}?petInteraction=${action}` : endpoint;
            const data = { id: currentPokemon.id }; 

            if (interaction === "Eliminar Pokémon") {
                const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este Pokémon?");
                if (!confirmDelete) {
                    return;
                }
    
                try {
                    await axios.delete('/pokenest/delete', { data: { id: currentPokemon.id } });
                    navigate('/user-dashboard');
                } catch (error) {
                    console.error("Error al eliminar el Pokémon:", error);
                    alert("No se pudo eliminar el Pokémon. Inténtalo nuevamente.");
                }
            }

            const response = await axios.post(url, data);
            const updatedPokemon = response.data; 

            if (updatedPokemon.species !== currentPokemon.species) {
                setTemporaryBackground(locationBackgrounds.EVOLUTION);
                setTemporaryImage(speciesImages[updatedPokemon.species]);

                const pokemonImage = document.querySelector(".pokemon-species-image");

            if (pokemonImage) {
                pokemonImage.classList.add("pokemon-fade-in");
            }
    
            setTimeout(() => {
                setTemporaryBackground(locationBackgrounds[updatedPokemon.location]);
                setTemporaryImage(speciesImages[updatedPokemon.species]);
                setCurrentPokemon(updatedPokemon); 
    
               
                if (pokemonImage) {
                    pokemonImage.classList.remove("pokemon-fade-in");
                }
    
                setIsEvolving(false); 
            }, 2000);
            }

            if (interaction === "Alimentar") {
                setIsEating(true); 

                setTimeout(() => {
                    setIsEating(false);
                }, 10000); 
            }

            if (interaction === "Dormir") {
                setIsSleeping(true); 
                setTemporaryImage(sleepingImages[currentPokemon.species]);
            
                setTimeout(() => {
                    setIsSleeping(false);
                    setTemporaryImage(speciesImages[currentPokemon.species]);
                }, 10000);
            }

            if (interaction === "Jugar") {
                setIsPlaying(true); 

                setTimeout(() => {
                    setIsPlaying(false);
                }, 10000); 
            }

            if (interaction === "Entrenar") {
                setTemporaryBackground(locationBackgrounds.BATTLEGROUND);
                setTemporaryImage(trainingImages[currentPokemon.species]); 
            
              
                setTimeout(() => {
                    setTemporaryBackground(locationBackgrounds[currentPokemon.location]); 
                    setTemporaryImage(speciesImages[currentPokemon.species]);
                }, 6000); 
            }

            if (interaction === "Explorar") {
                setTemporaryBackground(locationBackgrounds.EXPLORE);          
                setTemporaryImage(explorationImages[currentPokemon.species]);
            
             
                setTimeout(() => {
                    setTemporaryBackground(locationBackgrounds[currentPokemon.location]);
                    setTemporaryImage(speciesImages[currentPokemon.species]);
                }, 6000); 
            }

            if (interaction === "Curar") {
               
                setTemporaryBackground(locationBackgrounds.POKECENTER);
                setTemporaryImage(poke);

                setIsHealing(true); 
            
                setTimeout(() => {
                    setTemporaryBackground(locationBackgrounds[currentPokemon.location]); 
                    setTemporaryImage(speciesImages[currentPokemon.species]); 
                    setIsHealing(false); 
                }, 6000); 
            }

          

        setCurrentPokemon(updatedPokemon);
        console.log("Respuesta del backend:", response.data);
        
        } catch (error) {
            if (error.response && error.response.data.includes("The pet is sleeping")) {
                alert("El Pokémon está durmiendo. No puede realizar otras acciones hasta que se despierte.");
                setIsSleeping(true);
            } else {
                alert(`No se pudo realizar ${interaction}.`);
            }
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
            {currentPokemon.species === "Eevee" && (
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
            <img src={{}} alt="Logo" className="logo-image" />
                <div className="pokemon-details-content">
                <div className="pokemon-alias-container">
                    <img src={pokeIcon} alt="Poke Icon" className="poke-icon" />
                    <span className="pokemon-alias">{currentPokemon.alias}</span>
                    <span className="separator">-</span>
                    <p className="pokemon-level"><span>Nv. </span> {currentPokemon.lvl}</p>
                </div>
                <div className="pokemon-types-container">
                        {currentPokemon.types &&
                            currentPokemon.types.map((type, index) => (
                                <img
                                    key={index}
                                    src={typeImages[type.trim()]} // Asegura que el tipo coincida con las claves
                                    alt={type}
                                    className="type-image"
                                />
                            ))}
                    </div>
                {temporaryImage && (
                        <div
                            className="pokemon-image-container"
                            style={{
                                backgroundImage: `url(${temporaryBackground})`, // Fondo dinámico
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <img 
                             src={temporaryImage}
                             alt={currentPokemon.species}
                             className={`pokemon-species-image ${
                                temporaryImage === sleepingImages[currentPokemon.species]
                                ? "sleeping-image"
                                : temporaryImage === trainingImages[currentPokemon.species]
                                ? "training-image"
                                : temporaryImage === explorationImages[currentPokemon.species]
                                ? "exploration-image"
                                : temporaryImage === poke
                                ? "heal-image"
                                : "default-image"
                            }`}
                        />
                         {isEating && (
                        <div className="eating-gif-container">
                            <img src={{yummy}} alt="Comiendo" className="eating-gif" />
                        </div>
                        )}
                          {isPlaying && (
                        <div className="playing-gif-container">
                            <img src={{heart}} alt="Jugando" className="playing-gif" />
                        </div>
                        )}
                          {temporaryImage === sleepingImages[currentPokemon.species] && (
                    <div className="sleeping-gif-container">
                        <img src={{sleep}} alt="Durmiendo" className="sleeping-gif" />
                    </div>
                        )}
                        {isHealing && (
                    <div className="healing-gif-container">
                     
                        <img src={{heart}} alt="Curando" className="healing-gif" />
                    </div>
                        )}
                        </div>
                    )}   
                                  
                                       
                    <div className="ph-bar-container">
                        <div className="ph-bar-text">PH</div>
                        <div
                            className="ph-bar"
                            style={{ width: `${currentPokemon.ph}%` }} // Ajusta el ancho según el porcentaje de PH
                        ></div>
                    </div>
                    <div className="ph-bar-container">
                        <div className="exp-bar-text">EX</div>
                        <div
                            className="exp-bar"
                            style={{ width: `${currentPokemon.experience}%` }} // Ajusta el ancho según el porcentaje de PH
                        ></div>
                    </div>
                    <div className="happ-bar-container">
                        <div className="happ-bar-text">  
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                    </svg>
                    </div>
                        <div
                            className="happ-bar"
                            style={{ width: `${currentPokemon.happiness}%` }} // Ajusta el ancho según el porcentaje de PH
                        ></div>
                    </div>
                </div>
             
            </div>
        </div>
    );
};

PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        alias: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        lvl: PropTypes.number.isRequired,
        experience: PropTypes.number.isRequired,
        happiness: PropTypes.number.isRequired,
        ph: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
    }),
};

export default PokemonDetails;