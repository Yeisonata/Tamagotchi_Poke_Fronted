import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register.jsx';
import App from '../pages/App.jsx';
import '../styles/App.css';
import UserDashboard from '../pages/UserDashboard.jsx'; 
// import Login from '../pages/Login.jsx';
import CreatePokemon from '../pages/CreatePokemon.jsx';
import PokemonDetails from '../pages/PokemonDetails.jsx';
import PokemonList from '../pages/PokemonList.jsx';
import GetOne from '../pages/GetOne.jsx';
import AdminDashboard from '../pages/AdminDashboard.jsx';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/getAll" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pokenest/create" element={<CreatePokemon />} />
        <Route path="/pokenest/pokedetails" element={<PokemonDetails />} />
        <Route path="/pokenest/getUserPoke" element={<PokemonList/>} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/pokenest/getOne/:id" element={<GetOne />} />
      
      </Routes>
    </Router>
  );
}

export default Main;