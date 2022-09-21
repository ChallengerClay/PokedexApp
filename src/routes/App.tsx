import React from 'react'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Home from '../Home'
import PokemonInfo from '../components/PokemonInfo'
import '../assets/css/output.scss'

const App = () => {
    return(
    <BrowserRouter>
     <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Regions">Regions</Link></li>
        </ul>
    </header>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pokemon/:name" element={<PokemonInfo/>} />
        </Routes>    
    </BrowserRouter>
    )
}

export default App