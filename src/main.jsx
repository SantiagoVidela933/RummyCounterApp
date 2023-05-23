import ReactDOM from 'react-dom/client'
import { RummyCounterApp } from './RummyCounterApp'
import { PlayersProvider } from './PlayersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlayersProvider>
    <RummyCounterApp/>
  </PlayersProvider>
)
