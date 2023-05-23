import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { HomePage } from './components/Home/HomePage'
import { PlayersPage } from './components/Players/PlayersPage'
import { GamePage } from './components/Game/GamePage'
import { ScorePage } from './components/Score/ScorePage'

import './styles/RummyCounterApp.css';

export const RummyCounterApp = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playerspage" element={<PlayersPage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/scorepage" element={<ScorePage/>} />
      </Routes>
    </Router>
  )
}
