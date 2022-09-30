import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Home from '../Home'
import RegionList from '../components/regions/RegionList'
import RegionLocations from '../components/regions/RegionLocations'
import PokemonInfo from '../components/pokemon/PokemonInfo'
import NotFoundComponent from '../components/NotFoundComponent'
import '../assets/css/output.scss'

const App = () => {
  return (
    <BrowserRouter>
      <header>
       <nav>
        <ul className="navdisplay">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/regions">Regions</Link>
          </li>
          <li>
            <Link to="/berries">Berries</Link>
          </li>
        </ul>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonInfo />} />
        <Route path="/regions" element={<RegionList />} />
        <Route path="/region/:name" element={<RegionLocations />} />
        <Route path='*' element={<NotFoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
