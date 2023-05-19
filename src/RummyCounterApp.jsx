import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HomePage } from './components/Home/HomePage'
import { PlayersPage } from './components/Players/PlayersPage'
import { GamePage } from './components/Game/GamePage'
import { ScorePage } from './components/Score/ScorePage'

export const RummyCounterApp = () => {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}
