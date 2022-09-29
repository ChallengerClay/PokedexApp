import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Home from '../Home'
import Regions from '../components/regions/Regions'
import PokemonInfo from '../components/PokemonInfo'
import NotFoundComponent from '../components/NotFoundComponent'
import '../assets/css/output.scss'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <ul className="navdisplay">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/regions">Regions</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
        <Route path="/regions" element={<Regions />} />
        <Route path='*' element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
